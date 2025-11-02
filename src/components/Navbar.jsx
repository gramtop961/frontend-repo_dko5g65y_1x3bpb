import { Infinity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-500/20 transition-transform duration-300 group-hover:scale-105">
              <Infinity size={20} />
            </div>
            <span className="text-white font-semibold tracking-tight">Infinity</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            {[
              { href: '#features', label: 'Features' },
              { href: '#highlights', label: 'Highlights' },
              { href: '#community', label: 'Community' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-1 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-red-500 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-200 transition-all hover:-translate-y-0.5 hover:bg-white/5">
              Sign in
            </button>
            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5 hover:bg-red-500">
              Join
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
