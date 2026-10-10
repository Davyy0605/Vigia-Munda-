'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, TiktokLogo } from '@phosphor-icons/react';
import { EASE, TIKTOK_VIDEO } from '../lib/data';

const WORDS = [
  { t: 'Vigiar' }, { t: 'hoje' }, { t: 'para' }, { t: 'proteger', g: true },
  { t: 'o' }, { t: 'Vale' }, { t: 'do' }, { t: 'Mundaú' }, { t: 'da' }, { t: 'dengue' },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const vidY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <header ref={ref} className="relative min-h-[100dvh] flex items-center overflow-hidden pt-36 pb-20 bg-white">
      <motion.div style={{ y: orbY }} className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-emerald-300 blur-[100px] opacity-25 animate-drift" />
      </motion.div>
      <motion.div style={{ y: orbY }} className="absolute -bottom-44 -right-32 w-[560px] h-[560px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-sky-300 blur-[100px] opacity-25 animate-drift [animation-delay:-6s]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-[1.25fr_.75fr] gap-14 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-line bg-white/80 text-xs text-mute"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-brand-green opacity-60 animate-ping" />
              <span className="relative w-2 h-2 rounded-full bg-brand-green" />
            </span>
            Projeto financiado pela FACEPE · Garanhuns, PE
          </motion.span>

          <h1 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2.4rem,4.7vw,4.5rem)] max-w-3xl mt-6">
            {WORDS.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom pb-[.1em] mr-[.25em]">
                <motion.span
                  className={'inline-block ' + (w.g ? 'bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent' : '')}
                  initial={{ y: '115%' }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.25 + i * 0.07, ease: EASE }}
                >
                  {w.t}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1, ease: EASE }}
            className="mt-6 max-w-xl text-mute text-lg leading-relaxed"
          >
            Pesquisa, tecnologia e comunidade juntas para monitorar possíveis criadouros do Aedes aegypti, começando por onde o projeto nasceu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
            className="flex flex-wrap gap-3.5 mt-10"
          >
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#projeto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-brand-green to-brand-blue shadow-[0_14px_30px_-12px_rgba(20,115,201,.55)]">
              Conheça o projeto <ArrowRight weight="light" size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} href="#previna"
              className="px-7 py-3.5 rounded-full font-semibold border border-line bg-white hover:border-brand-green transition-colors">
              Como prevenir
            </motion.a>
          </motion.div>
        </div>

        <motion.div style={{ y: vidY }} className="justify-self-center w-full max-w-[330px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
          >
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-brand-green/30 to-brand-blue/30 blur-3xl" />
              <div className="relative aspect-[9/16] rounded-[2.4rem] overflow-hidden border-[7px] border-white shadow-[0_40px_80px_-30px_rgba(20,115,201,.5)] bg-gradient-to-br from-emerald-50 to-sky-50">
                <video className="absolute inset-0 w-full h-full object-cover" src="/video.mp4" poster="/poster.jpg" autoPlay muted loop playsInline controls preload="metadata" />
              </div>
              <a href={TIKTOK_VIDEO} target="_blank" rel="noopener noreferrer"
                className="relative mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brand-blue hover:underline">
                <TiktokLogo weight="light" size={18} /> Assistir no TikTok
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
