import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/20 glass-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-orbitron font-bold gradient-text mb-2">Shrirama R</h3>
            <p className="text-muted-foreground">Blending Tradition with Technology</p>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by Shrirama R</span>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>Devotee of Lord Shiva, Hanuman & Chhatrapati Shivaji Maharaj</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;