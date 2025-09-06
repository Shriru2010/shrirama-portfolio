import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, GraduationCap, Code2, Calendar, Award, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Track page view for analytics
    window.gtag?.('event', 'page_view', {
      page_path: '/about',
      page_title: 'About Me'
    });
  }, []);

  const timelineItems = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "IIT Delhi Journey",
      subtitle: "B.Tech in Mathematics & Computing",
      description: "Currently pursuing my degree at one of India's premier institutions, specializing in the intersection of mathematics and computer science.",
      year: "2023-2027",
      animation: "fade-right"
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Ethical Hacking Expertise",
      subtitle: "Security Research & Bug Bounties",
      description: "Discovered vulnerabilities in major platforms, earning recognition from tech giants. Specialized in web application security and penetration testing.",
      year: "2021-Present",
      animation: "fade-left"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Sanskrit Computation",
      subtitle: "Ancient Wisdom Meets Modern Tech",
      description: "Bridging the gap between Sanskrit linguistics and computational methods, exploring NLP applications for ancient texts.",
      year: "2022-Present",
      animation: "fade-right"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Competitive Programming",
      subtitle: "Problem Solving at Scale",
      description: "Active participant in coding competitions, consistently ranking in top percentiles. Expertise in algorithms and data structures.",
      year: "2020-Present",
      animation: "fade-left"
    }
  ];

  const achievements = [
    { number: "15+", label: "Security Vulnerabilities Found", color: "text-red-500" },
    { number: "3", label: "Years of Experience", color: "text-blue-500" },
    { number: "10+", label: "Projects Completed", color: "text-green-500" },
    { number: "5★", label: "Client Rating", color: "text-yellow-500" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        {/* Header Section */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
            <span className="gradient-text">About</span> Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ethical hacker, developer, and Sanskrit enthusiast on a mission to make the digital world safer
          </p>
        </motion.div>

        {/* Personal Info Card with Interactive Elements */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-8 mb-16 bg-gradient-glass backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <User className="h-6 w-6 text-primary" />
                  Personal Overview
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-semibold">Satyam Raghuwanshi</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Role:</span>
                    <span className="font-semibold text-primary">Ethical Hacker & Developer</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-semibold">IIT Delhi (B.Tech)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-semibold">3+ Years</span>
                  </div>
                </div>
              </div>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center p-6 rounded-xl bg-gradient-glass border border-border/20 hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <Card className={`w-full md:w-5/12 p-6 bg-gradient-glass backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                  index % 2 === 0 ? 'mr-auto md:mr-8' : 'ml-auto md:ml-8'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-primary mb-2">{item.subtitle}</p>
                      <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                      <span className="text-xs text-muted-foreground/70">{item.year}</span>
                    </div>
                  </div>
                </Card>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Ready to see what I can do?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/skills">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-strong transition-all duration-300"
              >
                View My Skills
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                See My Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Curiosity Hook */}
          <p className="mt-8 text-muted-foreground animate-pulse">
            👇 Discover the tools and technologies I master
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;