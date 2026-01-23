interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-transform duration-200 ${
        hover ? "hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
