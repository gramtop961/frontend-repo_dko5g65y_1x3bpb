import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability (do not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300 shadow-lg">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Live gaming universe
        </div>
        <h1 className="mt-6 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
          Play bold. Look sharp.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg">
          A modern gaming hub with a clean, futuristic aesthetic. Discover trending titles, track your progress, and connect with your squad — all in one place.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button className="rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-red-600/20 hover:bg-red-500 transition-colors">
            Explore Games
          </button>
          <button className="rounded-lg border border-white/10 px-6 py-3 text-sm text-zinc-200 hover:bg-white/5 transition-colors">
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
}
