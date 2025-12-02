"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./icons";

const benefits = [
  "Eliminate manual invoice calculations",
  "Track rate history and justifications",
  "Sync employee data from HRMS",
  "Multi-currency billing support",
  "Audit-ready documentation",
  "Real-time project profitability",
];

const invoiceLineItems = [
  { name: "John Smith", hours: "176 hrs", amount: "$15,840" },
  { name: "Sarah Chen", hours: "160 hrs", amount: "$14,400" },
  { name: "Mike Johnson", hours: "168 hrs", amount: "$12,600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function Benefits() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-slate-50/50 to-cyan-50/40" />
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-cyan-100/50 to-transparent blur-3xl" />
        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-[5%] h-32 w-32 rounded-full border border-blue-100/40" />
        <div className="absolute bottom-1/3 right-[8%] h-24 w-24 rotate-45 rounded-2xl border border-cyan-100/40" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-blue-600">Why Profisights</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Built for the complexities of professional services billing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We understand the nuances — rate revisions, partial billing periods,
              multi-currency invoicing, and audit requirements. That&apos;s why we built Profisights.
            </p>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-8 space-y-4"
            >
              {benefits.map((benefit) => (
                <motion.li key={benefit} variants={itemVariants} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-emerald-50 to-green-50 shadow-sm">
                    <CheckIcon className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Invoice Preview Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-200/60 via-sky-100/40 to-cyan-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-100/30 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Invoice</div>
                    <div className="text-2xl font-semibold text-slate-900">#INV-2024-0042</div>
                  </div>
                  <div className="rounded-full bg-gradient-to-r from-emerald-50 to-green-50 px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm">
                    Generated
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-500">Client</div>
                    <div className="font-medium text-slate-900">Acme Corporation</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Period</div>
                    <div className="font-medium text-slate-900">Nov 1 - Nov 30, 2024</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {invoiceLineItems.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50/80 to-blue-50/50 p-3 border border-slate-100/50">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-100 to-sky-50 shadow-sm" />
                        <div>
                          <div className="text-sm font-medium text-slate-900">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.hours}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{item.amount}</div>
                    </div>
                  ))}
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold text-slate-900">Total</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">$42,840</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
