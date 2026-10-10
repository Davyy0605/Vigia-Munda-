'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EASE } from '../lib/data';

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed top-0 inset-x-0 h-[3px] origin-left z-40 bg-gradient-to-r from-brand-green to-brand-blue" />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 pl-5 pr-2 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-line shadow-[0_24px_50px_-28px_rgba(20,115,201,.35)] max-w-[calc(100%-24px)]"
      >
        <b className="font-display font-bold">Vigia <span className="text-brand-green">Mundaú</span></b>
        <div className="hidden md:flex gap-6 text-sm text-mute">
          <a className="hover:text-ink transition-colors" href="#projeto">Projeto</a>
          <a className="hover:text-ink transition-colors" href="#armadilha">Armadilha</a>
          <a className="hover:text-ink transition-colors" href="#previna">Previna</a>
        </div>
        <a href="#redes" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-green to-brand-blue">Acompanhe</a>
      </motion.nav>
    </>
  );
}
