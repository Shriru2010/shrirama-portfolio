import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import FuturePlans from '@/components/FuturePlans';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleSystem from '@/components/ParticleSystem';
import FloatingActionButton from '@/components/FloatingActionButton';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(element => observer.observe(element));

    return () => {
      revealElements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <ParticleSystem />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FuturePlans />
        <Contact />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
