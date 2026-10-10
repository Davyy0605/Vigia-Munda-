'use client';
import { motion } from 'framer-motion';
import { Trash, Package, Plant, HouseLine } from '@phosphor-icons/react';
import Reveal, { Eyebrow } from './Reveal';

const TIPS = [
  { t: 'Vire os recipientes', d: 'Baldes, garrafas e pneus não devem acumular água.', Icon: Trash },
  { t: 'Tampe caixas e tonéis', d: 'Mantenha reservatórios sempre bem vedados.', Icon: Package },
  { t: 'Cuide dos vasos', d: 'Evite água acumulada nos pratinhos de plantas.', Icon: Plant },
  { t: 'Limpe calhas e ralos', d: 'Garanta que a água escoe e não fique parada.', Icon: HouseLine },
];

export default function Tips() {
  return (
    <section id="previna" className="py-32 md:py-44 bg-mist">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-20 items-center">
        <Reveal>
          <Eyebrow>Faça sua parte</Eyebrow>
          <h2 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3.4rem)] mt-4">
            Pequenos gestos que quebram o ciclo do mosquito.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TIPS.map(({ t, d, Icon }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="h-full rounded-3xl border border-line bg-white p-7 shadow-[0_24px_50px_-34px_rgba(20,115,201,.3)]"
              >
                <div className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-brand-green/15 to-brand-blue/15 text-brand-blue">
                  <Icon weight="light" size={26} />
                </div>
                <h3 className="font-display font-semibold text-xl mt-4 mb-1.5">{t}</h3>
                <p className="text-mute text-sm">{d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
