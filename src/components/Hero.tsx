import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Zap, Star, Code, Heart } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Blending Tradition with Technology";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Om Symbol at Top Center */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative group cursor-pointer">
          <span className="text-5xl lg:text-6xl font-orbitron font-bold prismatic-text animate-pulse-glow hover:scale-110 transition-all duration-500 inline-block">
            ॐ
          </span>
          <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl animate-float-up"></div>
          <div className="absolute inset-0 bg-gradient-aurora rounded-full opacity-20 animate-ping-large"></div>
        </div>
      </div>

      {/* Ultra-Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Aurora Background Animation */}
        <div className="absolute inset-0 aurora-bg opacity-30"></div>
        
        {/* Liquid Morphing Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 liquid-morph opacity-20 float-gentle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 liquid-morph opacity-15 float-medium" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 liquid-morph opacity-10 float-dynamic" style={{ animationDelay: '4s' }}></div>
        
        {/* Interactive Parallax Layers */}
        <div className="parallax-container">
          <div className="parallax-layer-1">
            <div className="absolute inset-0 cyber-grid opacity-20"></div>
          </div>
          <div className="parallax-layer-2">
            <div className="absolute inset-0 hex-grid opacity-30"></div>
          </div>
        </div>
        
        {/* Quantum Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary/40 rotate-45 quantum-dots float-gentle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-accent/40 quantum-dots float-medium" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-4 h-4 bg-secondary/40 rotate-12 quantum-dots float-dynamic" style={{ animationDelay: '5s' }}></div>
        
        {/* Interactive Mouse-Following Gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial opacity-20 pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
        {/* Enhanced Content with Advanced Animations */}
        <div className="space-y-8 text-center max-w-5xl">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-black leading-tight relative group">
              <span className="block text-foreground animate-fade-in-up stagger-1 hover:scale-105 transition-transform duration-300 cursor-default">
                Shrirama
              </span>
              <span className="block prismatic-text text-8xl lg:text-9xl animate-fade-in-up stagger-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
                R
              </span>
              
              {/* Floating Icons around name */}
              <Code className="absolute -top-8 -left-8 h-8 w-8 text-primary/60 float-gentle animate-fade-in-up stagger-3" />
              <Heart className="absolute top-4 -right-12 h-6 w-6 text-accent/60 float-medium animate-fade-in-up stagger-4" />
              <Zap className="absolute -bottom-4 left-8 h-10 w-10 text-secondary/60 float-dynamic animate-fade-in-up stagger-5" />
            </h1>
            
            <div className="h-20 flex items-center justify-center">
              <p className="text-2xl lg:text-3xl text-muted-foreground typing-animation font-grotesk animate-fade-in-up stagger-3">
                {typedText}
              </p>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-up stagger-4">
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              जय श्रीराम, I'm Shrirama R, a passionate teen developer devoted to 
              <span className="gradient-text font-semibold"> Sanskrit computation</span> and 
              <span className="gradient-text font-semibold"> full-stack technology</span>.
            </p>

            {/* Enhanced Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              <div className="elastic-card holo-border p-6 breathing">
                <Star className="h-8 w-8 text-primary mx-auto mb-2 morphing-icon" />
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="elastic-card holo-border p-6 breathing" style={{ animationDelay: '1s' }}>
                <Code className="h-8 w-8 text-accent mx-auto mb-2 morphing-icon" />
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="elastic-card holo-border p-6 breathing" style={{ animationDelay: '2s' }}>
                <Heart className="h-8 w-8 text-secondary mx-auto mb-2 morphing-icon" />
                <div className="text-3xl font-bold gradient-text">∞</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-5">
            <Button 
              size="lg" 
              className="magnetic-button ripple-effect px-8 py-4 text-lg font-semibold bg-gradient-primary hover:shadow-glow-strong transition-all duration-500 group relative overflow-hidden"
              onClick={scrollToAbout}
            >
              <span className="relative z-10 flex items-center">
                Explore My Work
                <ArrowDown className="ml-3 h-6 w-6 group-hover:animate-bounce" />
              </span>
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="magnetic-button ripple-effect px-8 py-4 text-lg font-semibold holo-border hover:shadow-glow transition-all duration-500 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Download Resume
                <Download className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 gradient-shift opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center holo-border relative overflow-hidden">
          <div className="w-2 h-4 bg-primary rounded-full mt-3 animate-pulse"></div>
          <div className="absolute inset-0 spotlight"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;