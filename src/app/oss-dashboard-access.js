import { createHmac, timingSafeEqual } from "node:crypto";

export const ossDashboardCookieName = "oss_dashboard_access";

export function createOssDashboardSessionToken(password) {
  const secret = process.env.OSS_DASHBOARD_SESSION_SECRET;
  if (!secret) return null;

  return createHmac("sha256", secret)
    .update(password)
    .update(Buffer.from([0]))
    .update("oss-dashboard-demo-access-v1")
    .digest("base64url");
}

export function hasValidOssDashboardSession(session, password = process.env.OSS_DASHBOARD_PASSWORD) {
  if (!session || !password) return false;

  const token = createOssDashboardSessionToken(password);
  if (!token) return false;

  const expected = Buffer.from(token);
  const provided = Buffer.from(session);
  return provided.length === expected.length && timingSafeEqual(provided, expected);
}
