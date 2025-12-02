"use client";

import { motion } from "framer-motion";

const companies = ["TechServ", "ConsultCo", "DigitalFirst", "ProServe", "AgileOps"];

export function SocialProof() {
  return (
    <section className="relative border-y border-slate-100/50 bg-gradient-to-r from-slate-50/80 via-blue-50/30 to-slate-50/80 py-12 overflow-hidden">
      {/* Subtle background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-cyan-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-slate-500"
        >
          Trusted by professional services firms managing millions in billings
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {companies.map((name) => (
            <div key={name} className="text-xl font-semibold text-slate-300">
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
