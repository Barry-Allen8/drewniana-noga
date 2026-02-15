"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -100px 0px" } as const;

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 18,
}: MotionRevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: reducedMotion ? 0.2 : 0.26,
        delay,
        ease: EASE_OUT,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  as?: "div" | "ul" | "ol";
};

export function MotionStagger({
  children,
  className,
  delayChildren = 0.06,
  staggerChildren = 0.04,
  as = "div",
}: MotionStaggerProps) {
  const reducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: reducedMotion ? 0.01 : delayChildren,
        staggerChildren: reducedMotion ? 0.02 : staggerChildren,
      },
    },
  };

  if (as === "ul") {
    return (
      <motion.ul
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={cn(className)}
      >
        {children}
      </motion.ul>
    );
  }

  if (as === "ol") {
    return (
      <motion.ol
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className={cn(className)}
      >
        {children}
      </motion.ol>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

type MotionStaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  as?: "div" | "li";
};

export function MotionStaggerItem({
  children,
  className,
  y = 14,
  as = "div",
}: MotionStaggerItemProps) {
  const reducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0.2 : 0.24,
        ease: EASE_OUT,
      },
    },
  };

  if (as === "li") {
    return (
      <motion.li variants={variants} className={cn(className)}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
