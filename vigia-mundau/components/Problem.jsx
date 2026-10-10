'use client';
import { motion } from 'framer-motion';
import Reveal, { Eyebrow } from './Reveal';

const POINTS = [
  { top: '28%', left: '62%', c: 'bg-brand-blue', ring: 'ring-brand-blue/15', ping: 'bg-brand-blue' },
  { top: '58%', left: '30%', c: 'bg-brand-green', ring: 'ring-brand-green/15', ping: 'bg-brand-green' },
  { top: '70%', left: '68%', c: 'bg-brand-blue', ring: 'ring-brand-blue/15', ping: 'bg-brand-blue' },
];

export default function Problem() {
  return (
    <section id="projeto" className="py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-16 lg:gap-28 items-center">
        <Reveal>
          <Eyebrow>O ponto de partida</Eyebrow>
          <h2 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3.3rem)] mt-4 mb-6">
            A base do projeto fica ao lado de um cemitério. E é aí que o olhar começa.
          </h2>
          <p className="text-mute max-w-xl mb-4">
            Cemitérios podem acumular água em vasos, floreiras e jazigos, formando ambientes favoráveis à reprodução do Aedes aegypti, o mosquito transmissor da dengue.
          </p>
          <p className="text-mute max-w-xl">
            Por isso, o Vigia Mundaú decidiu começar pela vizinhança: o Vale do Mundaú, em Garanhuns. Estudar o que está mais perto é o primeiro passo para cuidar de toda a comunidade.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="w-full max-w-md">
          <motion.div
            whileHover={{ rotate: 0, scale: 1.02 }}
            initial={{ rotate: 2 }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="relative aspect-square rounded-[2.2rem] bg-mist border border-line overflow-hidden shadow-[0_30px_60px_-30px_rgba(20,115,201,.3)]"
            aria-hidden="true"
          >
            <div className="absolute inset-[14%] rounded-full border border-brand-blue/25" />
            <div className="absolute inset-[32%] rounded-full border border-brand-green/35" />
            <div className="absolute inset-0 rounded-full animate-sweep" style={{ background: 'conic-gradient(from 0deg, rgba(18,161,95,0) 0 70%, rgba(18,161,95,.35) 100%)' }} />
            {POINTS.map((p, i) => (
              <span key={i} className="absolute w-3 h-3" style={{ top: p.top, left: p.left }}>
                <span className={`absolute inset-0 rounded-full ${p.ping} opacity-50 animate-ping`} style={{ animationDelay: `${i * 0.6}s` }} />
                <span className={`absolute inset-0 rounded-full ${p.c} ring-8 ${p.ring}`} />
              </span>
            ))}
            <span className="absolute left-5 bottom-4 text-xs font-medium text-mute">Vale do Mundaú · Garanhuns</span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
