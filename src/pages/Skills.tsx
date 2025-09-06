import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Code2, Shield, Globe, Database, Terminal, 
  Sparkles, ChevronRight, MousePointer, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [clickedCategory, setClickedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Track page view
    window.gtag?.('event', 'page_view', {
      page_path: '/skills',
      page_title: 'Skills & Expertise'
    });
  }, []);

  const skillCategories = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 90, color: "bg-blue-500" },
        { name: "TypeScript", level: 85, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "Three.js/WebGL", level: 70, color: "bg-purple-500" }
      ],
      clickCount: 0
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend & Languages",
      skills: [
        { name: "Python", level: 95, color: "bg-yellow-500" },
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "C++", level: 80, color: "bg-orange-500" },
        { name: "PostgreSQL/MongoDB", level: 75, color: "bg-indigo-500" }
      ],
      clickCount: 0
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Sanskrit Computation",
      skills: [
        { name: "Sanskrit NLP", level: 85, color: "bg-amber-500" },
        { name: "Panini Grammar Engine", level: 80, color: "bg-amber-600" },
        { name: "Vedic Text Processing", level: 75, color: "bg-orange-600" },
        { name: "Computational Linguistics", level: 70, color: "bg-yellow-600" }
      ],
      clickCount: 0
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Ethical Hacking",
      skills: [
        { name: "Web App Pentesting", level: 95, color: "bg-red-500" },
        { name: "Network Security", level: 85, color: "bg-red-600" },
        { name: "OSINT", level: 90, color: "bg-pink-500" },
        { name: "Cryptography", level: 80, color: "bg-purple-600" }
      ],
      clickCount: 0
    }
  ];

  const tools = [
    "Burp Suite", "Metasploit", "Wireshark", "Nmap", "Git", "Docker", 
    "Kubernetes", "AWS", "Linux", "Kali Linux", "OWASP ZAP", "John the Ripper",
    "Hashcat", "SQLMap", "Aircrack-ng", "Nikto", "Hydra", "VS Code"
  ];

  const handleCategoryClick = (category: string) => {
    setClickedCategory(category);
    // Track interaction
    window.gtag?.('event', 'skill_category_click', {
      category: category
    });
  };

  const handleSkillHover = (skill: string) => {
    setHoveredSkill(skill);
    // Track hover interaction
    window.gtag?.('event', 'skill_hover', {
      skill: skill
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Interactive Background */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-grid-pattern opacity-5"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        {/* Header */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click and explore my technical expertise. Each interaction reveals more!
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MousePointer className="h-4 w-4 animate-bounce" />
            <span>Click on categories to explore</span>
          </div>
        </motion.div>

        {/* Interactive Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className={`p-6 bg-gradient-glass backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                  clickedCategory === category.title ? 'border-primary shadow-glow' : ''
                }`}
                onClick={() => handleCategoryClick(category.title)}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  {clickedCategory === category.title && (
                    <Sparkles className="h-4 w-4 text-primary animate-spin" />
                  )}
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group"
                      onMouseEnter={() => handleSkillHover(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={hoveredSkill === skill.name ? skill.level : skill.level * 0.7} 
                          className="h-2 transition-all duration-500"
                        />
                        {hoveredSkill === skill.name && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded"
                          >
                            Expert Level
                          </motion.div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tools Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-8 bg-gradient-glass backdrop-blur-xl border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Tools I Master
              <Zap className="inline-block ml-2 h-5 w-5 text-primary animate-pulse" />
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.02 }}
                  whileHover={{ scale: 1.1, rotate: [-5, 5, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                    onClick={() => {
                      window.gtag?.('event', 'tool_click', { tool: tool });
                    }}
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Sanskrit Specialist Highlight */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-amber-500/30 hover:border-amber-500/50 transition-all cursor-pointer group">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 group-hover:text-amber-500 transition-colors">
                🕉️ Sanskrit Computation Specialist
              </h3>
              <p className="text-muted-foreground mb-6">
                Bridging ancient wisdom with modern technology through computational linguistics
              </p>
              <Button
                variant="outline"
                className="border-amber-500/50 hover:bg-amber-500/10"
                onClick={() => {
                  window.gtag?.('event', 'sanskrit_specialist_click');
                }}
              >
                Learn More About My Sanskrit Work
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Navigation CTAs */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">See my skills in action!</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-strong"
              >
                View Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                Hire Me
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-muted-foreground animate-pulse">
            👇 Check out my live projects and demos
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;