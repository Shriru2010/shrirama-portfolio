import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Shield, Code2, Sparkles, Terminal, Zap, Brain } from 'lucide-react';
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Ethical Hacker | Student | Creator";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated Background with Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-l from-accent/20 to-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full"></div>
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='white' stroke-width='0.5' opacity='0.05'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="space-y-8 text-center max-w-5xl">
          {/* Floating Tech Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Terminal className="absolute top-10 left-10 h-8 w-8 text-primary/20 animate-float" />
            <Shield className="absolute top-20 right-20 h-10 w-10 text-accent/20 animate-float-delayed" />
            <Code2 className="absolute bottom-20 left-20 h-8 w-8 text-secondary/20 animate-float" />
            <Brain className="absolute bottom-10 right-10 h-9 w-9 text-primary/20 animate-float-delayed" />
            <Zap className="absolute top-1/2 left-10 h-7 w-7 text-accent/20 animate-float" />
          </div>
          
          {/* Killer Tagline with gradient */}
          <div className="animate-fade-in-up">
            <div className="inline-block px-6 py-2 mb-6 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
              <p className="text-sm sm:text-base text-foreground/80 font-medium">जय श्रीराम!!! Welcome to my digital universe</p>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
                Shrirama R
              </span>
            </h1>
            
            <div className="h-14 flex items-center justify-center mb-4">
              <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-card/50 to-card-glass/50 backdrop-blur-xl border border-border/50">
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  {typedText}
                  <span className="animate-pulse text-primary ml-1">|</span>
                </p>
              </div>
            </div>
          </div>

          {/* Impact Statement with Glass Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 blur-3xl"></div>
            <p className="relative text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up backdrop-blur-sm bg-card/5 rounded-2xl p-6 border border-border/20">
              Securing systems, building solutions, and blending 
              <span className="text-primary font-bold"> Sanskrit traditions</span> with 
              <span className="text-accent font-bold"> modern technology</span>
            </p>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="flex flex-wrap justify-center gap-6 py-8 animate-fade-in-up">
            <div className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-card/50 to-card-glass/30 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Shield className="h-6 w-6 text-primary animate-pulse" />
                <div className="text-left">
                  <span className="block text-3xl font-bold text-primary">100+</span>
                  <span className="text-xs text-muted-foreground">CTFs Solved</span>
                </div>
              </div>
            </div>
            
            <div className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-card/50 to-card-glass/30 backdrop-blur-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Code2 className="h-6 w-6 text-accent animate-pulse" />
                <div className="text-left">
                  <span className="block text-3xl font-bold text-accent">15+</span>
                  <span className="text-xs text-muted-foreground">Projects Built</span>
                </div>
              </div>
            </div>
            
            <div className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-card/50 to-card-glass/30 backdrop-blur-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
                <div className="text-left">
                  <span className="block text-3xl font-bold text-secondary">3+</span>
                  <span className="text-xs text-muted-foreground">Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-xl opacity-70 animate-pulse"></div>
              <Button 
                size="lg" 
                className="relative px-12 py-7 text-lg font-bold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-105 border-0" 
                onClick={scrollToWork}
              >
                <Zap className="mr-2 h-5 w-5" />
                See My Work
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-primary/30 hover:border-primary backdrop-blur-sm bg-card/30"
                onClick={() => window.open('https://github.com/Shriru2010', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 translate-y-full group-hover:translate-y-0 transition-transform"></span>
                <Github className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </Button>
            </div>
          </div>

          {/* Enhanced Curiosity Hook */}
          <div className="relative pt-8">
            <p className="text-sm text-muted-foreground animate-bounce-gentle inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-card/30 to-card-glass/30 backdrop-blur-sm border border-border/20">
              <Sparkles className="h-4 w-4 text-primary" />
              Wanna see how I hack and build? Keep scrolling...
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-primary rounded-full mt-3"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;