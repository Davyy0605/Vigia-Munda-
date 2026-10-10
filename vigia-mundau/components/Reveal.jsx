'use client';
import { motion } from 'framer-motion';
import { EASE } from '../lib/data';

export default function Reveal({ children, delay = 0, y = 36, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return <span className="text-xs font-semibold tracking-[.14em] uppercase text-brand-green">{children}</span>;
}
