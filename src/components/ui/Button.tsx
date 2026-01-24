"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 relative overflow-hidden";

  const variants = {
    primary: "gradient-primary text-white",
    secondary:
      "bg-[var(--overlay-light)] text-[var(--foreground)] hover:bg-[var(--overlay-medium)]",
    outline:
      "border border-[var(--glass-border)] text-[var(--foreground)] hover:bg-[var(--overlay-light)] hover:border-[var(--foreground-tertiary)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {/* Shimmer effect for primary */}
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-in-out" />
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          {...motionProps}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={combinedClassName} {...motionProps}>
      {content}
    </motion.button>
  );
}
