import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mt-20 border-t border-white/10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Infinity. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a className="transition-colors hover:text-zinc-200" href="#">Privacy</a>
            <a className="transition-colors hover:text-zinc-200" href="#">Terms</a>
            <a className="transition-colors hover:text-zinc-200" href="#">Support</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
