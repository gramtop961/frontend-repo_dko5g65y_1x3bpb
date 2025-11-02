import { Gamepad2 } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/20">
              <Gamepad2 size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight">RedGrid</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
            <a href="#community" className="hover:text-white transition-colors">Community</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 transition-colors">Sign in</button>
            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/20 hover:bg-red-500 transition-colors">Join</button>
          </div>
        </div>
      </div>
    </header>
  );
}
