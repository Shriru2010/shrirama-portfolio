import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'future', label: 'Future Plans' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
      scrolled 
        ? 'backdrop-blur-2xl bg-gradient-glass-strong border-b border-primary/20 shadow-glow' 
        : 'backdrop-blur-xl bg-gradient-glass border-b border-border/10'
    }`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-orbitron font-bold text-2xl relative group cursor-pointer">
          <span className="prismatic-text hover:scale-110 transition-transform duration-300 inline-block">
            SR
          </span>
          <div className="absolute -inset-2 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-primary animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Desktop Navigation with Enhanced Hover Effects */}
        <ScrollArea className="hidden md:block max-w-2xl">
          <nav className="flex items-center space-x-2 px-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative px-4 py-2 rounded-lg font-medium transition-all duration-300
                  text-muted-foreground hover:text-foreground whitespace-nowrap
                  magnetic-button ripple-effect micro-bounce
                  stagger-${Math.min(index + 1, 5)}
                `}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
              </button>
            ))}
          </nav>
        </ScrollArea>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-3 magnetic-button morphing-icon holo-border hover:shadow-glow-strong transition-all duration-300"
          >
            {isDarkMode ? 
              <Sun className="h-5 w-5 text-amber-400" /> : 
              <Moon className="h-5 w-5 text-blue-400" />
            }
          </Button>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-3 magnetic-button morphing-icon holo-border relative overflow-hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative z-10">
              {isMenuOpen ? 
                <X className="h-5 w-5 text-destructive animate-rotate-slow" /> : 
                <Menu className="h-5 w-5 text-primary" />
              }
            </div>
            <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-gradient-glass-strong border-t border-primary/20 animate-slide-down">
          <nav className="container mx-auto px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  block w-full text-left p-4 rounded-xl font-medium transition-all duration-300
                  text-muted-foreground hover:text-foreground hover:bg-gradient-primary/10
                  magnetic-button ripple-effect data-stream
                  animate-fade-in-up stagger-${Math.min(index + 1, 5)}
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;