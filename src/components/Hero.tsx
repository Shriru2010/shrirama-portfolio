import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Shield, Code2, Sparkles, Terminal, Zap, Brain, Eye, Lock, Globe, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.webp';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const roles = [
    "कट्टर सनातनी",
    "Proud ब्राह्मण",
    "Ethical Hacker",
    "Security Researcher",
    "Sanskrit Learner",
    "Full-Stack Developer"
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
      {/* Hero Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>
      
      {/* Animated orange accent orbs matching the flag color */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5' opacity='0.03'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
      }} />
      
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
            {['श्री', 'राम', 'जय', 'संस्कृत', 'धर्म', '</>', 'const', 'हिंदू'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
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
                <div className="relative px-6 py-3 rounded-full bg-background/40 backdrop-blur-xl border border-primary/30">
                  <div className="flex items-center gap-2">
                    <Lock className={`h-4 w-4 transition-all ${isHovered ? 'text-accent rotate-180' : 'text-primary'}`} />
              <span className="text-sm font-jetbrains text-foreground/90 font-semibold">
                      {isHovered ? 'जय श्रीराम! 🚩' : 'हर हर महादेव! SECURE DHARMIC CONNECTION'}
                    </span>
                    <Eye className={`h-4 w-4 transition-all ${isHovered ? 'text-accent' : 'text-primary/50'}`} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Epic Name Reveal */}
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-russo mb-4 tracking-wider">
                <span className="block text-primary/20 absolute inset-0 blur-sm">Shrirama R</span>
                <span className="relative bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)]">
                  Shrirama R
                </span>
              </h1>
              
              {/* Sanskrit Tagline */}
              <p className="text-xl font-oswald text-primary/90 mb-6 drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]">
                ॐ नमः शिवाय | सत्यमेव जयते | कट्टर सनातनी ब्राह्मण 🚩
              </p>
            </div>
            
            {/* Dynamic Role Display */}
            <div className="h-16 flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
                <div className="relative px-8 py-4 rounded-2xl bg-background/40 backdrop-blur-xl border border-primary/30">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-6 w-6 text-primary animate-pulse drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bebas tracking-wide">
                      <span className="text-muted-foreground">I'm a </span>
                      <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text font-bold drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]">
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
            <div className="backdrop-blur-sm bg-background/30 p-6 rounded-lg border border-primary/20">
              <p className="text-xl sm:text-2xl text-foreground/90 leading-relaxed font-oswald font-light">
                Proud follower of <span className="text-primary font-bold">सनातन धर्म</span>, 
                carrying forward the <span className="text-accent font-bold">ब्राह्मण परंपरा</span> while
                securing digital realms and building tomorrow's technology
              </p>
              
              {/* Mystery Quote */}
              <p className="mt-6 text-lg text-primary/80 italic">
                "धर्मो रक्षति रक्षितः | वसुधैव कुटुम्बकम् | Technology meets Tradition"
              </p>
            </div>
          </div>

          {/* Interactive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto py-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div 
              className="group relative"
              style={{ animationDelay: `0.5s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-background/40 backdrop-blur-xl border border-primary/30 group-hover:border-primary/60 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                <Shield className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]" />
                <div className="text-4xl font-bebas text-primary mb-1">100+</div>
                <div className="text-sm text-foreground/80">Security Tests</div>
              </div>
            </div>
            
            <div 
              className="group relative"
              style={{ animationDelay: `0.6s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-background/40 backdrop-blur-xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)]">
                <Code2 className="h-8 w-8 text-accent mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(var(--accent-rgb),0.6)]" />
                <div className="text-4xl font-bebas text-accent mb-1">50K+</div>
                <div className="text-sm text-foreground/80">Lines of Code</div>
              </div>
            </div>
            
            <div 
              className="group relative"
              style={{ animationDelay: `0.7s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative p-6 rounded-2xl bg-background/40 backdrop-blur-xl border border-secondary/30 group-hover:border-secondary/60 transition-all duration-300 hover:scale-105 cursor-pointer shadow-[0_0_20px_rgba(var(--secondary-rgb),0.1)] hover:shadow-[0_0_30px_rgba(var(--secondary-rgb),0.3)]">
                <Globe className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(var(--secondary-rgb),0.6)]" />
                <div className="text-4xl font-bebas text-secondary mb-1">15+</div>
                <div className="text-sm text-foreground/80">Live Projects</div>
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
                className="relative px-14 py-8 text-xl font-bebas tracking-wider bg-gradient-to-r from-primary via-accent to-primary hover:scale-105 shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)] transition-all duration-300 border-0 group"
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
                className="group relative overflow-hidden border-primary/50 hover:border-primary backdrop-blur-sm bg-background/20 font-oswald text-foreground/90 hover:text-foreground"
                onClick={() => window.open('https://github.com/Shriru2010', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                <Github className="mr-2 h-5 w-5 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">View Code</span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-accent/50 hover:border-accent backdrop-blur-sm bg-background/20 font-oswald text-foreground/90 hover:text-foreground"
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/40 backdrop-blur-xl border border-primary/30 group hover:border-primary/60 transition-all cursor-pointer" onClick={scrollToNext}>
              <Sparkles className="h-5 w-5 text-primary animate-pulse drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]" />
              <span className="text-base font-oswald text-foreground/90">
                Ready to discover what I can do for you?
              </span>
              <ArrowDown className="h-5 w-5 text-primary animate-bounce drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.6)]" />
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
          <div className="relative w-12 h-20 border-2 border-primary/70 rounded-full flex justify-center group-hover:border-primary transition-colors">
            <div className="w-3 h-6 bg-gradient-to-b from-primary to-accent rounded-full mt-3 animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;