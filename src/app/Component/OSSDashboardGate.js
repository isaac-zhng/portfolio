"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Lock } from "./Icons";

export default function OSSDashboardGate({ onAccessChange }) {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    fetch("/api/oss-dashboard-demo", { method: "HEAD", cache: "no-store" })
      .then((response) => {
        if (response.ok && isMounted) {
          setAccessGranted(true);
          onAccessChange(true);
        }
      })
      .catch(() => {
        if (isMounted) setError("Couldn’t check demo access right now. Please try again.");
      });

    return () => {
      isMounted = false;
    };
  }, [onAccessChange]);

  async function unlock(event) {
    event.preventDefault();
    setError("");
    setIsChecking(true);

    try {
      const response = await fetch("/api/oss-dashboard-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
        cache: "no-store",
      });
      if (!response.ok) {
        setError(
          response.status === 503
            ? "Demo access is not configured yet. Please try again later."
            : "That password didn’t match. Please try again."
        );
        return;
      }
      setAccessGranted(true);
      onAccessChange(true);
      setPassword("");
    } catch {
      setError("Couldn’t check the password right now. Please try again.");
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <div className="flex h-[220px] min-w-0 flex-1 flex-col gap-[12px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px]">
      <div className="relative flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden rounded-[8px] bg-white shadow-lg md:rounded-[12px]">
        <Image
          src="/oss-dashboard-thumbnail.png"
          alt="IBM logo"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-contain"
        />
        {!accessGranted && (
          <>
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#1E1E35]/80 text-white shadow-lg">
                <Lock className="text-[28px]" />
              </span>
            </div>
            <form onSubmit={unlock} className="absolute inset-x-[12px] bottom-[12px] z-10 flex flex-col gap-[6px] sm:inset-x-[16px] sm:bottom-[16px]">
              <label htmlFor="oss-dashboard-password" className="sr-only">
                Password
              </label>
              <div className="flex gap-[8px] rounded-[12px] bg-[#1E1E35]/90 p-[8px] shadow-lg backdrop-blur-sm">
                <input
                  id="oss-dashboard-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  aria-describedby={error ? "oss-dashboard-password-error" : undefined}
                  aria-invalid={Boolean(error)}
                  className="min-w-0 flex-1 rounded-[8px] border border-white/20 bg-white px-[12px] py-[10px] text-[14px] text-[#1E1E35] outline-none placeholder:text-black/55 focus:border-white focus:ring-2 focus:ring-white/40"
                  placeholder="Password"
                />
                <button
                  type="submit"
                  disabled={isChecking}
                  className="shrink-0 rounded-[8px] bg-white px-[16px] py-[10px] text-[14px] font-medium text-[#1E1E35] transition-colors hover:bg-white/85 disabled:cursor-wait disabled:opacity-70"
                >
                  {isChecking ? "Checking…" : "Unlock"}
                </button>
              </div>
              {error && (
                <p id="oss-dashboard-password-error" role="alert" className="rounded-[8px] bg-[#1E1E35]/90 px-[10px] py-[6px] text-[12px] text-rose-200">
                  {error}
                </p>
              )}
            </form>
          </>
        )}
      </div>


    </div>
  );
}
