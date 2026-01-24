"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  if (!hover) {
    return (
      <div className={`glass-card rounded-2xl p-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${className}`}
      whileHover={{ y: -2 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {children}
    </motion.div>
  );
}

// Interactive card for clickable items
interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function InteractiveCard({
  children,
  className = "",
  href,
}: InteractiveCardProps) {
  const content = (
    <motion.div
      className={`glass-card rounded-2xl p-6 ${className}`}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
