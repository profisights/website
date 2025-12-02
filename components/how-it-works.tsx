"use client";

import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Set up clients", description: "Add your clients, contracts, and rate agreements. Link relevant documents for audit trails." },
  { step: "02", title: "Deploy resources", description: "Assign employees to projects with billing rates. Track T&M, hourly, or milestone-based work." },
  { step: "03", title: "Track attendance", description: "Import attendance data from your HRMS or upload manually. We handle the calculations." },
  { step: "04", title: "Generate invoices", description: "Create accurate invoices in seconds. Review, adjust, and export to PDF or Excel." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-t border-slate-100/50 py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/30 via-slate-50/50 to-blue-50/30" />
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-blue-100/50 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-cyan-100/50 to-transparent blur-3xl" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[10%] h-48 w-48 rounded-full border border-blue-100/30" />
        <div className="absolute bottom-1/4 left-[8%] h-32 w-32 rounded-full border border-cyan-100/30" />
        {/* Wave pattern */}
        <svg className="absolute bottom-0 left-0 right-0 opacity-[0.03]" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="#3b82f6"/>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-blue-600">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            From chaos to clarity in four steps
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={itemVariants} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-full hidden h-px w-full bg-gradient-to-r from-blue-200 to-transparent lg:block" />
              )}
              <div className="text-5xl font-bold bg-gradient-to-br from-blue-200 via-blue-100 to-cyan-100 bg-clip-text text-transparent">{item.step}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
