'use client';
import { motion } from 'framer-motion';
import { Crosshair, Drop, ChartBar, UsersThree } from '@phosphor-icons/react';
import Reveal, { Eyebrow } from './Reveal';

function IconBox({ children }) {
  return <div className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-brand-green/15 to-brand-blue/15 text-brand-blue">{children}</div>;
}

function Card({ className = '', delay = 0, children }) {
  return (
    <Reveal delay={delay} className={className}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="h-full rounded-[1.9rem] border border-line bg-white p-9 shadow-[0_30px_60px_-34px_rgba(20,115,201,.28)]"
      >
        {children}
      </motion.div>
    </Reveal>
  );
}

export default function Trap() {
  return (
    <section id="armadilha" className="py-32 md:py-44 bg-mist">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-14">
          <Eyebrow>Tecnologia</Eyebrow>
          <h2 className="font-display font-semibold tracking-tight leading-[1.08] text-[clamp(2rem,4vw,3.4rem)] mt-4">
            Uma armadilha automatizada, feita para vigiar sem parar.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <Reveal className="md:col-span-8">
            <motion.div
              whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="h-full rounded-[1.9rem] border border-line p-9 bg-gradient-to-br from-emerald-50 via-white to-sky-50 shadow-[0_30px_60px_-34px_rgba(20,115,201,.28)]"
            >
              <IconBox><Crosshair weight="light" size={26} /></IconBox>
              <h3 className="font-display font-semibold text-3xl mt-5 mb-3">Baseada em tecnologia da USP</h3>
              <p className="text-mute max-w-xl">
                A armadilha desenvolvida pelo projeto parte de uma tecnologia da Universidade de São Paulo e ajuda a monitorar locais com potencial de proliferação do Aedes aegypti na nossa comunidade.
              </p>
            </motion.div>
          </Reveal>

          <Card className="md:col-span-4" delay={0.1}>
            <IconBox><Drop weight="light" size={26} /></IconBox>
            <h3 className="font-display font-semibold text-2xl mt-5 mb-2">Foco na água parada</h3>
            <p className="text-mute text-sm">O monitoramento mira os pontos onde o mosquito pode se reproduzir.</p>
          </Card>

          <Card className="md:col-span-5">
            <IconBox><ChartBar weight="light" size={26} /></IconBox>
            <h3 className="font-display font-semibold text-2xl mt-5 mb-2">Dados para agir</h3>
            <p className="text-mute text-sm">Informação organizada ajuda a orientar ações de prevenção no território.</p>
          </Card>

          <Card className="md:col-span-7" delay={0.1}>
            <IconBox><UsersThree weight="light" size={26} /></IconBox>
            <h3 className="font-display font-semibold text-2xl mt-5 mb-2">Ciência com a comunidade</h3>
            <p className="text-mute text-sm max-w-md">O projeto nasce no território e é pensado para quem vive nele.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
