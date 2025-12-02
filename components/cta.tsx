"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";

export function CTA() {
  return (
    <section id="pricing" className="relative border-t border-blue-100 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 py-20 md:py-32 overflow-hidden">
      {/* Abstract background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute top-1/2 right-1/3 h-[200px] w-[200px] rounded-full bg-blue-400/20 blur-3xl" />
        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 h-24 w-24 rounded-full border border-white/20 bg-white/5"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-20 h-16 w-16 rounded-2xl border border-white/20 bg-white/5"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to automate your billing?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join the early access program and be among the first to transform
            how you manage professional services billing.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/demo"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-600 shadow-lg shadow-blue-900/20 transition hover:bg-blue-50 hover:shadow-xl sm:w-auto"
            >
              Request early access
              <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:hello@profisights.com"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto"
            >
              Contact sales
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
