"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 shadow-md shadow-blue-500/20">
            <span className="text-sm font-bold text-white">P</span>
          </div>
          <span className="text-lg font-semibold text-slate-900">Profisights</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm text-slate-600 transition hover:text-slate-900">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-slate-600 transition hover:text-slate-900">
            How it works
          </Link>
          <Link href="#pricing" className="text-sm text-slate-600 transition hover:text-slate-900">
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-900 sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/demo"
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get a demo
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
