import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative border-t border-slate-100 bg-gradient-to-b from-slate-50/80 to-white py-12 overflow-hidden">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-[150px] w-[150px] rounded-full bg-cyan-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-500/20">
              <span className="text-sm font-bold text-white">P</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">Profisights</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="transition hover:text-slate-900">Privacy</Link>
            <Link href="/terms" className="transition hover:text-slate-900">Terms</Link>
            <Link href="mailto:hello@profisights.com" className="transition hover:text-slate-900">Contact</Link>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 Profisights. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
