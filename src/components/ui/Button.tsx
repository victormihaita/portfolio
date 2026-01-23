import Link from "next/link";

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
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";

  const variants = {
    primary: "gradient-primary text-white hover:opacity-90 hover:scale-[1.02]",
    secondary: "bg-[var(--overlay-light)] text-[var(--foreground)] hover:bg-[var(--overlay-medium)]",
    outline: "border border-[var(--glass-border)] text-[var(--foreground)] hover:bg-[var(--overlay-light)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
