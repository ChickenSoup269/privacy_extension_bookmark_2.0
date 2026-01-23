"use client";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
      
      {/* Floating Geometric Shapes (Subtle) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-black/5 dark:border-white/5 rounded-full animate-drift-slow"></div>
      <div className="absolute top-3/4 left-2/3 w-[500px] h-[500px] border-2 border-black/5 dark:border-white/5 skew-x-12 animate-drift-reverse"></div>
      
      {/* Gradient Wash for Yellow Theme */}
      <div className="yellow:absolute yellow:inset-0 yellow:bg-gradient-to-tr yellow:from-yellow-400/20 yellow:to-transparent"></div>
    </div>
  );
}
