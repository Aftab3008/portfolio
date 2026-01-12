"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br from-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-tl from-accent/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-b from-neutral-200 to-neutral-600 select-none"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 -mt-8 sm:-mt-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 bg-white text-black hover:bg-neutral-200 font-medium px-8"
          >
            <Link href="/">
              <FaHome className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-neutral-700 hover:bg-neutral-800/50 hover:border-neutral-600 text-neutral-200 font-medium px-8"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex items-center justify-center gap-2 text-neutral-500 text-sm"
        >
          <span className="inline-block w-12 h-px bg-neutral-700" />
          <span>Lost in code</span>
          <span className="inline-block w-12 h-px bg-neutral-700" />
        </motion.div>
      </motion.div>
    </div>
  );
}
