import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ParticleSystem from '@/components/ParticleSystem';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Shield, Book, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Track home page view
    window.gtag?.('event', 'page_view', {
      page_path: '/',
      page_title: 'Home'
    });
  }, []);

  const quickLinks = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Research",
      description: "Bug bounties & ethical hacking",
      link: "/projects",
      color: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Development",
      description: "Full-stack web applications",
      link: "/skills",
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Sanskrit Tech",
      description: "Ancient wisdom meets AI",
      link: "/about",
      color: "from-amber-500/10 to-yellow-500/10"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Future Plans",
      description: "What's coming next",
      link: "/future-plans",
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleSystem />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Quick Navigation Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 py-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore My <span className="gradient-text">Universe</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={item.link}>
                <Card className={`h-full p-6 bg-gradient-to-br ${item.color} backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-lg bg-background/50 text-primary mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Interactive CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to dive deeper?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-strong"
                onClick={() => {
                  window.gtag?.('event', 'home_cta_click', { button: 'learn_more' });
                }}
              >
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => {
                  window.gtag?.('event', 'home_cta_click', { button: 'get_in_touch' });
                }}
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;