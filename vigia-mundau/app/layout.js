import './globals.css';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['300', '500', '600', '700'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

const description =
  'Projeto financiado pela FACEPE que monitora possíveis criadouros do Aedes aegypti no Vale do Mundaú, em Garanhuns, com armadilha automatizada baseada em tecnologia da USP.';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Vigia Mundaú | Combate à dengue em Garanhuns',
  description,
  openGraph: {
    title: 'Vigia Mundaú',
    description,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">{children}</body>
    </html>
  );
}
