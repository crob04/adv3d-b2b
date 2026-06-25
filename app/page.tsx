import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import WhyUs from '@/components/WhyUs';
import WhatYouGet from '@/components/WhatYouGet';
import HowItWorks from '@/components/HowItWorks';
import Proof from '@/components/Proof';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhyUs />
      <WhatYouGet />
      <HowItWorks />
      <Proof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}