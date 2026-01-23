export function Background() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 0%, rgba(30, 64, 115, 0.25), transparent 50%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(20, 80, 80, 0.2), transparent 50%)
        `,
      }}
    />
  );
}
