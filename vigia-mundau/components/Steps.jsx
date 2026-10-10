'use client';
import { motion } from 'framer-motion';
import Reveal, { Eyebrow } from './Reveal';
import { EASE } from '../lib/data';

const STEPS = [
  { n: '01', t: 'Observar', d: 'Mapear o entorno da base do projeto, no Vale do Mundaú, em busca de possíveis criadouros.' },
  { n: '02', t: 'Monitorar', d: 'Usar a armadilha automatizada para acompanhar a presença do Aedes aegypti nesses locais.' },
  { n: '03', t: 'Agir', d: 'Compartilhar o aprendizado e mobilizar a comunidade para eliminar focos de água parada.' },
];

export default function Steps() {
  return (
    <section className="py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-14">
          <Eyebrow>Como funciona</Eyebrow>
          <h2 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3.4rem)] mt-4">
            Do território à ação, em três movimentos.
          </h2>
        </Reveal>

        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }}
          className="h-[2px] origin-left bg-gradient-to-r from-brand-green to-brand-blue"
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr]">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.15} className={`py-9 md:px-8 md:first:pl-0 md:last:pr-0 ${i < 2 ? 'md:border-r border-line' : ''}`}>
              <motion.b
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.15, ease: EASE }}
                className="font-display font-light text-6xl text-brand-blue block leading-none"
              >
                {s.n}
              </motion.b>
              <h3 className="font-display font-semibold text-2xl mt-4 mb-2">{s.t}</h3>
              <p className="text-mute text-[.95rem]">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
