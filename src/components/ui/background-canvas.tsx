export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      <div
        className="absolute inset-x-0 top-0 h-72 opacity-[0.08] dark:opacity-[0.05]"
        style={{ background: 'linear-gradient(180deg, hsl(var(--primary)) 0%, transparent 100%)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-72 opacity-[0.08] dark:opacity-[0.05]"
        style={{ background: 'linear-gradient(0deg, hsl(var(--muted)) 0%, transparent 100%)' }}
      />
    </div>
  );
};
