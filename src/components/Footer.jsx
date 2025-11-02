export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(239,68,68,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} RedGrid. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <a className="hover:text-zinc-200 transition-colors" href="#">Privacy</a>
            <a className="hover:text-zinc-200 transition-colors" href="#">Terms</a>
            <a className="hover:text-zinc-200 transition-colors" href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
