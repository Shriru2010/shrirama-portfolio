import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, MessageCircle, Download, Mail } from 'lucide-react';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const actions = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Contact',
      action: scrollToContact,
      color: 'bg-gradient-primary'
    },
    {
      icon: <Download className="h-5 w-5" />,
      label: 'Resume',
      action: () => {/* Add resume download logic */},
      color: 'bg-gradient-secondary'
    },
    {
      icon: <ArrowUp className="h-5 w-5" />,
      label: 'Top',
      action: scrollToTop,
      color: 'bg-gradient-to-br from-accent to-primary'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Action Buttons */}
      {isOpen && actions.map((action, index) => (
        <div
          key={index}
          className="transform transition-all duration-300 ease-out"
          style={{
            transitionDelay: `${index * 100}ms`,
            transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0)',
          }}
        >
          <Button
            size="sm"
            className={`${action.color} rounded-full p-3 shadow-glow hover:scale-110 transition-transform duration-200`}
            onClick={action.action}
            title={action.label}
          >
            {action.icon}
          </Button>
        </div>
      ))}

      {/* Main FAB */}
      <Button
        className={`fab energy-pulse transition-all duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        onClick={() => setIsOpen(!isOpen)}
        size="sm"
      >
        <MessageCircle className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </Button>
    </div>
  );
};

export default FloatingActionButton;