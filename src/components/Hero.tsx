import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Shield, Code2, Sparkles } from 'lucide-react';
const Hero = () => {
  const [typedText, setTypedText] = useState('');
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
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto flex items-center justify-center relative z-10">
        <div className="space-y-6 text-center max-w-4xl">
          {/* Killer Tagline */}
          <div className="animate-fade-in">
            <p className="text-lg sm:text-xl text-muted-foreground mb-4">JSR!!!, I'm</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="text-foreground">Shrirama </span>
              <span className="text-primary">R</span>
            </h1>
            <div className="h-12 flex items-center justify-center">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-semibold">
                {typedText}
                <span className="animate-pulse text-primary">|</span>
              </p>
            </div>
          </div>

          {/* Quick Impact Statement */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Securing systems, building solutions, and blending 
            <span className="text-primary font-semibold"> Sanskrit traditions</span> with 
            <span className="text-accent font-semibold"> modern technology</span>
          </p>

          {/* Simplified Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-8 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">100+</span>
              <span className="text-sm text-muted-foreground">CTFs Solved</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-accent" />
              <span className="text-2xl font-bold text-accent">15+</span>
              <span className="text-sm text-muted-foreground">Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-secondary" />
              <span className="text-2xl font-bold text-secondary">3+</span>
              <span className="text-sm text-muted-foreground">Years</span>
            </div>
          </div>

          {/* Big CTA Button */}
          <div className="space-y-4">
            <Button size="lg" className="px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" onClick={scrollToWork}>
              See My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
            
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="default" onClick={() => window.open('https://github.com/Shriru2010', '_blank')}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>

          {/* Curiosity Hook */}
          <p className="text-sm text-muted-foreground pt-8 animate-pulse">
            👇 Wanna see how I hack and build? Keep scrolling...
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform">
        <div className="w-8 h-12 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-primary rounded-full mt-3"></div>
        </div>
      </button>
    </section>;
};
export default Hero;