import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl hero-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl hero-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl hero-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Shrirama</span>
              <span className="block gradient-text">R</span>
            </h1>
            
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <p className="text-xl lg:text-2xl text-muted-foreground typing-animation">
                {typedText}
              </p>
            </div>
          </div>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
            Hi, I'm Shrirama R, a passionate teen developer devoted to Sanskrit computation and full-stack technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:glow-primary font-medium"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Download Resume
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Side - Profile Picture Placeholder */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 glass-card rounded-3xl p-8 flex items-center justify-center hover-lift">
              <div className="w-full h-full bg-gradient-primary rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-orbitron font-bold text-white">SR</span>
                  </div>
                  <p className="text-white/80 font-medium">Profile Picture</p>
                  <p className="text-white/60 text-sm mt-1">Upload Later</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full glow-primary hero-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full hero-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;