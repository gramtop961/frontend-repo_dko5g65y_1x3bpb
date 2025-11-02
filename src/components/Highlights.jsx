import { Rocket, Trophy, Shield } from 'lucide-react';

const features = [
  {
    title: 'Lag-free performance',
    desc: 'Experience ultra-smooth gameplay with our low-latency network and optimized matchmaking.',
    icon: Rocket,
  },
  {
    title: 'Rank up & compete',
    desc: 'Seasonal ladders, clan wars, and competitive events designed for fair play.',
    icon: Trophy,
  },
  {
    title: 'Secure & fair',
    desc: 'Best-in-class anti-cheat and account protection keep your progress safe.',
    icon: Shield,
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative w-full py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Built for gamers, by gamers
          </h2>
          <p className="mt-3 text-zinc-400">
            Clean design. Powerful features. A modern look that never gets in your way.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-950/60 p-6 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-md shadow-red-600/30">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-500/10 blur-3xl transition-opacity group-hover:opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
