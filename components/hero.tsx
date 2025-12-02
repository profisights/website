"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";
import { AbstractBackground } from "./abstract-background";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <AbstractBackground />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-1.5 text-sm text-slate-600 shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Now in early access
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
          >
            Professional services
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              billing, automated
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Stop wrestling with spreadsheets. Profisights handles client management,
            resource deployments, attendance tracking, and invoice generation —
            so you can focus on delivering value to your clients.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/demo"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto"
            >
              Request early access
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:bg-white hover:shadow-md sm:w-auto"
            >
              See how it works
            </Link>
          </motion.div>
        </div>

        {/* Hero Image/Dashboard Preview */}
        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      className="relative mt-16 md:mt-24"
    >
      {/* Glow effect behind the card */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100 via-sky-50 to-cyan-100 opacity-60 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 shadow-2xl shadow-slate-200/50 backdrop-blur-sm">
        {/* Mock Dashboard */}
        <div className="aspect-[16/9] p-4 md:p-8">
          <div className="h-full rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
                <div className="h-3 w-24 rounded-full bg-slate-200" />
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-lg bg-slate-100" />
                <div className="h-8 w-8 rounded-lg bg-slate-100" />
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="grid grid-cols-12 gap-4 p-6">
              {/* Sidebar */}
              <div className="col-span-3 space-y-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-8 rounded-lg ${i === 1 ? 'bg-gradient-to-r from-blue-100 to-blue-50' : 'bg-slate-100'}`} />
                ))}
              </div>
              {/* Main Content */}
              <div className="col-span-9 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                      <div className="mb-2 h-3 w-12 rounded-full bg-slate-200" />
                      <div className="h-6 w-20 rounded-lg bg-slate-100" />
                    </div>
                  ))}
                </div>
                {/* Table */}
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="h-4 w-32 rounded-full bg-slate-200" />
                    <div className="h-8 w-24 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400" />
                  </div>
                  <div className="space-y-3">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-50" />
                          <div className="h-3 w-32 rounded-full bg-slate-100" />
                        </div>
                        <div className="h-3 w-20 rounded-full bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
