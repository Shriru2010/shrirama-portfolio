import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Shield, Code2, Sparkles, Terminal, Zap, Brain, Eye, Lock, Globe, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    "Ethical Hacker",
    "Security Researcher", 
    "Full-Stack Developer",
    "Sanskrit Scholar",
    "Problem Solver"
  ];
  
  useEffect(() => {
    const currentText = roles[textIndex];
    let charIndex = 0;
    setTypedText('');
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setTypedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [textIndex]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        
        {/* Interactive Gradient Orbs that Follow Mouse */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-30 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent)',
            left: `${mousePosition.x * 0.5}%`,
            top: `${mousePosition.y * 0.5}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        
        {/* Animated Gradient Mesh */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-accent/20 to-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full animate-pulse"></div>
        </div>
        
        {/* Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Matrix Rain Effect - Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/20 font-jetbrains text-xs animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {['0101', 'hack', '</>', 'sudo', 'root', '#!/bin/bash', 'const', 'संस्कृत'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="space-y-8 text-center max-w-6xl">
          {/* Mysterious Opening */}
          <div 
            className="animate-fade-in-up"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Encrypted Message Badge */}
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-50 animate-pulse"></div>
                <div className="relative px-6 py-3 rounded-full bg-gradient-to-r from-card/80 to-card-glass/80 backdrop-blur-xl border border-primary/30">
                  <div className="flex items-center gap-2">
                    <Lock className={`h-4 w-4 transition-all ${isHovered ? 'text-accent rotate-180' : 'text-primary'}`} />
                    <span className="text-sm font-jetbrains text-foreground/80">
                      {isHovered ? 'ACCESS GRANTED' : 'SECURE CONNECTION ESTABLISHED'}
                    </span>
                    <Eye className={`h-4 w-4 transition-all ${isHovered ? 'text-accent' : 'text-primary/50'}`} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Epic Name Reveal */}
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-russo mb-4 tracking-wider">
                <span className="block text-foreground/20 absolute inset-0 blur-sm">Shrirama R</span>
                <span className="relative bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
                  Shrirama R
                </span>
              </h1>
              
              {/* Sanskrit Tagline */}
              <p className="text-xl font-oswald text-primary/80 mb-6">
                सत्यमेव जयते | Truth Alone Triumphs
              </p>
            </div>
            
            {/* Dynamic Role Display */}
            <div className="h-16 flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
                <div className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-card/60 to-card-glass/60 backdrop-blur-xl border border-border/30">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-primary animate-pulse" />
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bebas tracking-wide">
                      <span className="text-muted-foreground">I'm a </span>
                      <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-bold">
                        {typedText}
                      </span>
                      <span className="animate-pulse text-primary ml-1">_</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intriguing Description */}
          <div className="relative max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl sm:text-2xl text-foreground/70 leading-relaxed font-oswald font-light">
              Breaking into systems legally, building secure solutions, and bridging 
              <span className="text-primary font-semibold"> ancient wisdom</span> with 
              <span className="text-accent font-semibold"> cutting-edge tech</span>
            </p>
            
            {/* Mystery Quote */}
            <p className="mt-6 text-lg text-muted-foreground/60 italic">
              "Every system has a vulnerability. Every problem has a solution."
            </p>
          </div>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto py-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div 
              className="group relative"
              style={{ animationDelay: `0.5s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card-glass/20 backdrop-blur-xl border border-primary/20 group-hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bebas text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Security Tests</div>
              </div>
            </div>
            
            <div 
              className="group relative"
              style={{ animationDelay: `0.6s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card-glass/20 backdrop-blur-xl border border-accent/20 group-hover:border-accent/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Code2 className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bebas text-accent mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
            </div>
            
            <div 
              className="group relative"
              style={{ animationDelay: `0.7s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-card/40 to-card-glass/20 backdrop-blur-xl border border-secondary/20 group-hover:border-secondary/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <Globe className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bebas text-secondary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Live Projects</div>
              </div>
            </div>
          </div>

          {/* Compelling CTAs */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Main CTA with Glow Effect */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary blur-2xl opacity-60 animate-pulse"></div>
              <Button 
                size="lg" 
                className="relative px-14 py-8 text-xl font-bebas tracking-wider bg-gradient-to-r from-primary via-accent to-secondary hover:scale-105 shadow-glow hover:shadow-glow-strong transition-all duration-300 border-0 group"
                onClick={scrollToWork}
              >
                <span className="flex items-center gap-3">
                  <Zap className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  EXPLORE MY UNIVERSE
                  <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
            
            {/* Secondary Actions */}
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-primary/30 hover:border-primary backdrop-blur-sm bg-card/20 font-oswald"
                onClick={() => window.open('https://github.com/Shriru2010', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                <Github className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View Code</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-accent/30 hover:border-accent backdrop-blur-sm bg-card/20 font-oswald"
                onClick={scrollToNext}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent/10 to-secondary/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                <Brain className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Learn More</span>
              </Button>
            </div>
          </div>

          {/* Mysterious Hook */}
          <div className="relative pt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-card/40 to-card-glass/40 backdrop-blur-xl border border-primary/20 group hover:border-primary/40 transition-all cursor-pointer" onClick={scrollToNext}>
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-base font-oswald text-foreground/80">
                Ready to discover what I can do for you?
              </span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Scroll Indicator */}
      <button 
        onClick={scrollToNext} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative w-12 h-20 border-2 border-primary/50 rounded-full flex justify-center group-hover:border-primary transition-colors">
            <div className="w-3 h-6 bg-gradient-to-b from-primary to-accent rounded-full mt-3 animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;