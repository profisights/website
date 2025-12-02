"use client";

import { motion } from "framer-motion";

export function AbstractBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Main gradient orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100 via-cyan-50 to-transparent opacity-70 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        className="absolute -top-20 left-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sky-100 via-blue-50 to-transparent opacity-60 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-100 via-sky-50 to-transparent opacity-50 blur-3xl"
      />

      {/* Floating abstract shapes - more visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-32 right-[15%] h-24 w-24 rounded-full border border-blue-200/50 bg-gradient-to-br from-white to-blue-50 shadow-lg shadow-blue-100/50"
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, 15, 0],
          rotate: [0, -3, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.7 },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-48 left-[10%] h-16 w-16 rounded-2xl border border-cyan-200/50 bg-gradient-to-tr from-white to-cyan-50 shadow-lg shadow-cyan-100/50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.9 },
          scale: { duration: 0.8, delay: 0.9 },
          y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-72 right-[25%] h-12 w-12 rotate-45 rounded-xl border border-sky-200/50 bg-gradient-to-br from-white to-sky-50 shadow-lg shadow-sky-100/50"
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                           linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export function AbstractBackgroundAlt() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Softer gradient blobs */}
      <div className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-50/80 via-sky-50/40 to-transparent blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-cyan-50/60 via-blue-50/30 to-transparent blur-3xl" />

      {/* Decorative lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="#3b82f6" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
  );
}

export function GradientOrb({ className }: { className?: string }) {
  return (
    <div className={`rounded-full blur-3xl ${className}`} />
  );
}
