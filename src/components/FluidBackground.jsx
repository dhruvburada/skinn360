export const FluidBackground = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob" />
    <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-yellow-200/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-2000" />
    <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-blob animation-delay-4000" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
  </div>
);
