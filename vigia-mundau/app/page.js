import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Problem from '../components/Problem';
import Trap from '../components/Trap';
import Steps from '../components/Steps';
import Tips from '../components/Tips';
import Social from '../components/Social';
import Footer from '../components/Footer';

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Problem />
      <Trap />
      <Steps />
      <Tips />
      <Social />
      <Footer />
    </main>
  );
}
