import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Zap, Star, Code, Heart, Github } from 'lucide-react';
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
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
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
        
        {/* Simple floating shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center justify-center relative z-10">
        {/* Enhanced Content with Advanced Animations */}
        <div className="space-y-8 text-center max-w-5xl">
          <div className="space-y-6">
            {/* Om Symbol above name */}
            <div className="mb-6">
              <span className="text-3xl lg:text-4xl font-orbitron font-bold text-primary hover:scale-105 transition-transform duration-300 inline-block">
                ॐ
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">
                Shrirama
              </span>
              <span className="block text-primary text-6xl lg:text-8xl">
                R
              </span>
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

            {/* Simple Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <Heart className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-3xl font-bold text-secondary">∞</div>
                <div className="text-sm text-muted-foreground">Passion</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold" onClick={scrollToAbout}>
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold" onClick={() => window.open('https://github.com/Shriru2010', '_blank')}>
              GitHub Profile
              <Github className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-primary rounded-full mt-3"></div>
        </div>
      </div>
    </section>;
};
export default Hero;