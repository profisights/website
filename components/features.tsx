"use client";

import { motion } from "framer-motion";
import { UsersIcon, FolderIcon, CalendarIcon, DocumentIcon, CurrencyIcon, ChartIcon } from "./icons";

const features = [
  {
    icon: UsersIcon,
    title: "Client Management",
    description: "Centralize client data, contracts, and rate agreements. Track contacts, approvers, and linked documents in one place.",
  },
  {
    icon: FolderIcon,
    title: "Project Tracking",
    description: "Manage T&M, milestone, and fixed-scope projects. Link rate cards, track deployments, and monitor project health.",
  },
  {
    icon: CalendarIcon,
    title: "Resource Deployment",
    description: "Assign employees to projects with full rate history. Track billing types, utilization, and rate revisions automatically.",
  },
  {
    icon: DocumentIcon,
    title: "Automated Invoicing",
    description: "Generate accurate invoices from attendance and deployment data. Support multiple currencies and billing models.",
  },
  {
    icon: CurrencyIcon,
    title: "Rate Card Management",
    description: "Maintain global, client, or project-specific rate cards. Map skills to designations with domestic and export pricing.",
  },
  {
    icon: ChartIcon,
    title: "Attendance Integration",
    description: "Import attendance data to auto-calculate billable amounts. Prorate monthly rates or compute hourly totals seamlessly.",
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-blue-50/30" />
        <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-cyan-100/40 to-transparent blur-3xl" />
        {/* Decorative circles */}
        <div className="absolute top-20 right-[10%] h-64 w-64 rounded-full border border-blue-100/30" />
        <div className="absolute bottom-20 left-[5%] h-48 w-48 rounded-full border border-cyan-100/30" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-medium text-blue-600">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to manage professional services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From client onboarding to invoice generation, streamline your entire billing workflow.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group rounded-2xl border border-slate-100/80 bg-white/60 p-6 backdrop-blur-sm transition hover:border-blue-100 hover:bg-white/80 hover:shadow-xl hover:shadow-blue-100/20"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 transition group-hover:from-blue-100 group-hover:to-sky-100">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
