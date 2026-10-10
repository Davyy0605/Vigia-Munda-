'use client';
import { motion } from 'framer-motion';
import { InstagramLogo, YoutubeLogo, TiktokLogo, ArrowUpRight } from '@phosphor-icons/react';
import Reveal, { Eyebrow } from './Reveal';
import { SOCIALS } from '../lib/data';

const LOGOS = { instagram: InstagramLogo, youtube: YoutubeLogo, tiktok: TiktokLogo };

export default function Social() {
  return (
    <section id="redes" className="py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-4xl">
          <Eyebrow>Acompanhe o Vigia Mundaú</Eyebrow>
          <h2 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2.2rem,5vw,4.2rem)] mt-4">
            Fique por dentro e ajude a espalhar a prevenção.
          </h2>
          <p className="text-mute mt-5 max-w-lg">Bastidores, descobertas e orientações do projeto nas nossas redes.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {SOCIALS.map((s, i) => {
            const Logo = LOGOS[s.key];
            return (
              <Reveal key={s.key} delay={i * 0.12}>
                <motion.a
                  href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover="hover" initial="rest" animate="rest"
                  className="block h-full p-8 rounded-3xl border border-line bg-white hover:border-brand-green hover:shadow-[0_30px_60px_-34px_rgba(20,115,201,.35)] transition-[border-color,box-shadow] duration-500"
                >
                  <div className="flex items-center justify-between mb-5">
                    <motion.span variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -8, scale: 1.1 } }} transition={{ type: 'spring', stiffness: 300, damping: 14 }}
                      className={`w-12 h-12 rounded-2xl grid place-items-center text-white ${s.tile}`}>
                      <Logo weight="fill" size={26} />
                    </motion.span>
                    <small className="text-xs tracking-[.08em] uppercase text-mute">{s.name}</small>
                  </div>
                  <strong className="font-display font-semibold text-2xl break-words block">{s.handle}</strong>
                  <span className="inline-flex items-center gap-1.5 text-brand-blue font-semibold text-sm mt-4">
                    {s.cta}
                    <motion.span variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -4 } }}><ArrowUpRight weight="light" size={18} /></motion.span>
                  </span>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
