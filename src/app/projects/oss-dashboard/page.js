import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowRight } from "../../Component/Icons";
import {
  hasValidOssDashboardSession,
  ossDashboardCookieName,
} from "../../oss-dashboard-access";

export const dynamic = "force-dynamic";

export default async function OSSDashboardCaseStudy() {
  const cookieStore = await cookies();
  const hasAccess = hasValidOssDashboardSession(
    cookieStore.get(ossDashboardCookieName)?.value
  );

  if (!hasAccess) {
    return (
      <main className="page-grain mx-auto flex min-h-screen w-full max-w-[1440px] items-center justify-center bg-[#E3E5F6] p-[8px] text-[#1E1E35] md:p-[12px] lg:p-[16px] xl:p-[24px]">
        <section className="flex min-h-[calc(100vh-48px)] w-full flex-col items-center justify-center gap-[16px] rounded-[8px] bg-white px-[24px] text-center md:rounded-[12px]">
          <h1 className="text-[32px] font-bold md:text-[48px]">OSS Dashboard is locked</h1>
          <p className="max-w-[480px] text-[16px] leading-relaxed text-black/70">
            Enter the project password in the OSS Dashboard card to access its demo and case study.
          </p>
          <Link href="/#projects" className="group flex w-fit items-center gap-[8px] rounded-[12px] bg-[#1E1E35] px-[24px] py-[16px] text-white transition-colors hover:bg-[#5A56A2]">
            Back to projects <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-grain mx-auto min-h-screen w-full max-w-[1440px] bg-[#E3E5F6] p-[8px] text-[#1E1E35] md:p-[12px] lg:p-[16px] xl:p-[24px]">
      <div className="min-h-[calc(100vh-48px)] overflow-hidden rounded-[8px] bg-white md:rounded-[12px]">
        <header className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-[16px] px-[24px] py-[24px] sm:px-[32px] md:px-[48px] xl:px-[64px]">
          <Link href="/#projects" className="group flex shrink-0 items-center gap-[10px] py-[8px] text-[14px] font-medium transition-colors hover:text-[#5A56A2]">
            <span className="rotate-180 transition-transform group-hover:-translate-x-1">
              <ArrowRight />
            </span>
            Back to projects
          </Link>
          <span className="text-right text-[10px] uppercase tracking-[0.12em] text-black/55 sm:text-[12px] sm:tracking-[0.18em]">
            Case Study
          </span>
        </header>

        <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-[24px] px-[32px] pb-[96px] pt-[48px] md:pt-[80px] lg:px-[64px] xl:px-[64px]">
          <span className="w-fit rounded-full border border-[#1E1E35]/15 px-[14px] py-[8px] text-[12px]">
            Open Source · Dashboard
          </span>
          <h1 className="text-[48px] font-bold leading-[0.95] md:text-[80px]">
            OSS Dashboard
          </h1>
          <p className="max-w-[680px] text-[16px] leading-relaxed text-black/70">
            Case study details are coming soon.
          </p>
          <Link href="/#projects" className="group flex w-fit items-center gap-[8px] rounded-[12px] bg-[#1E1E35] px-[24px] py-[16px] text-white transition-colors hover:bg-[#5A56A2]">
            Explore projects <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </main>
  );
}
