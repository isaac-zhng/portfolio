import { createHmac, timingSafeEqual } from "node:crypto";
import { createReadStream, statSync } from "node:fs";
import path from "node:path";
import { Readable } from "node:stream";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const videoPath = path.join(process.cwd(), "private", "oss-dashboard-demo.mp4");
const videoSize = statSync(videoPath).size;
const contentType = "video/mp4";
const cookieName = "oss_dashboard_access";

function sessionToken(password) {
  const secret = process.env.OSS_DASHBOARD_SESSION_SECRET;
  if (!secret) return null;
  return createHmac("sha256", secret)
    .update(password)
    .update(Buffer.from([0]))
    .update("oss-dashboard-demo-access-v1")
    .digest("base64url");
}

function validSession(request, password) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const session = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${cookieName}=`))
    ?.slice(cookieName.length + 1);
  if (!session) return false;

  const token = sessionToken(password);
  if (!token) return false;
  const expected = Buffer.from(token);
  const provided = Buffer.from(session);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request) {
  const configuredPassword = process.env.OSS_DASHBOARD_PASSWORD;
  if (!configuredPassword || !process.env.OSS_DASHBOARD_SESSION_SECRET) {
    return new NextResponse("Demo access is not configured", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }

  let submittedPassword;
  try {
    ({ password: submittedPassword } = await request.json());
  } catch {
    return new NextResponse("Invalid request", { status: 400 });
  }

  if (typeof submittedPassword !== "string") return unauthorized();
  const expected = Buffer.from(configuredPassword);
  const provided = Buffer.from(submittedPassword);
  if (provided.length !== expected.length || !timingSafeEqual(provided, expected)) {
    return unauthorized();
  }

  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Cache-Control": "no-store",
      "Set-Cookie": `${cookieName}=${sessionToken(configuredPassword)}; HttpOnly; SameSite=Lax; Path=/api/oss-dashboard-demo; Max-Age=3600${secure}`,
    },
  });
}



export async function HEAD(request) {
  const configuredPassword = process.env.OSS_DASHBOARD_PASSWORD;
  if (!configuredPassword || !process.env.OSS_DASHBOARD_SESSION_SECRET) {
    return new NextResponse(null, {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }
  return validSession(request, configuredPassword)
    ? new NextResponse(null, { headers: { "Cache-Control": "private, no-store" } })
    : unauthorized();
}

export async function GET(request) {
  const configuredPassword = process.env.OSS_DASHBOARD_PASSWORD;
  if (!configuredPassword || !process.env.OSS_DASHBOARD_SESSION_SECRET) {
    return new NextResponse("Demo access is not configured", {
      status: 503,
      headers: { "Cache-Control": "no-store" },
    });
  }
  if (!validSession(request, configuredPassword)) return unauthorized();

  const rangeHeader = request.headers.get("range");
  if (!rangeHeader) {
    return new NextResponse(Readable.toWeb(createReadStream(videoPath)), {
      headers: {
        "Accept-Ranges": "bytes",
        "Cache-Control": "private, no-store",
        "Content-Length": String(videoSize),
        "Content-Type": contentType,
      },
    });
  }

  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader);
  if (!match || (!match[1] && !match[2])) {
    return new NextResponse(null, {
      status: 416,
      headers: {
        "Content-Range": `bytes */${videoSize}`,
        "Cache-Control": "private, no-store",
      },
    });
  }

  const start = match[1] ? Number(match[1]) : Math.max(videoSize - Number(match[2]), 0);
  const end = match[2] && match[1] ? Math.min(Number(match[2]), videoSize - 1) : videoSize - 1;
  if (start >= videoSize || end < start) {
    return new NextResponse(null, {
      status: 416,
      headers: {
        "Content-Range": `bytes */${videoSize}`,
        "Cache-Control": "private, no-store",
      },
    });
  }

  return new NextResponse(Readable.toWeb(createReadStream(videoPath, { start, end })), {
    status: 206,
    headers: {
      "Accept-Ranges": "bytes",
      "Cache-Control": "private, no-store",
      "Content-Length": String(end - start + 1),
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Content-Type": contentType,
    },
  });
}
