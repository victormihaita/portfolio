"use client";

export function GradientOrbs() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Subtle blue glow - top right */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)",
          top: "-20%",
          right: "-20%",
        }}
      />

      {/* Subtle purple glow - bottom left */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 60%)",
          bottom: "-10%",
          left: "-10%",
        }}
      />
    </div>
  );
}
