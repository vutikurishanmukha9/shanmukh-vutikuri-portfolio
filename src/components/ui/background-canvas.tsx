export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Static soft gradient accents — no animation, no blur, pure CSS */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] rounded-full opacity-[0.07] dark:opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-[0.05] dark:opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)' }}
      />
    </div>
  );
};
