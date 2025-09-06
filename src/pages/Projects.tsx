import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code2, Shield, Book, Brain, Rocket, ExternalLink, 
  Github, Lock, Star, Eye, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewedProjects, setViewedProjects] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Track page view
    window.gtag?.('event', 'page_view', {
      page_path: '/projects',
      page_title: 'Projects Portfolio'
    });
  }, []);

  const projectCategories = [
    {
      id: 'security',
      icon: <Shield className="h-5 w-5" />,
      title: "Security Research",
      description: "Bug bounties and vulnerability discoveries",
      projects: [
        {
          name: "XSS Hunter Pro",
          description: "Advanced XSS detection tool with real-time alerts",
          tags: ["Python", "JavaScript", "Security"],
          status: "Active",
          stars: 234,
          views: 1520,
          link: "#",
          github: "#"
        },
        {
          name: "SQLi Scanner",
          description: "Automated SQL injection vulnerability scanner",
          tags: ["Python", "SQL", "Automation"],
          status: "Completed",
          stars: 189,
          views: 980,
          link: "#",
          github: "#"
        }
      ]
    },
    {
      id: 'sanskrit',
      icon: <Book className="h-5 w-5" />,
      title: "Sanskrit Computation",
      description: "NLP tools for ancient texts",
      projects: [
        {
          name: "Vedic Parser",
          description: "Deep learning model for Sanskrit text analysis",
          tags: ["Python", "TensorFlow", "NLP"],
          status: "In Progress",
          stars: 156,
          views: 720,
          link: "#",
          github: "#"
        },
        {
          name: "Panini Engine",
          description: "Computational implementation of Paninian grammar",
          tags: ["C++", "Linguistics", "AI"],
          status: "Active",
          stars: 201,
          views: 890,
          link: "#",
          github: "#"
        }
      ]
    },
    {
      id: 'web',
      icon: <Code2 className="h-5 w-5" />,
      title: "Web Development",
      description: "Full-stack applications",
      projects: [
        {
          name: "DevSecOps Dashboard",
          description: "Real-time security monitoring for CI/CD pipelines",
          tags: ["React", "Node.js", "Docker"],
          status: "Deployed",
          stars: 312,
          views: 2100,
          link: "#",
          github: "#"
        },
        {
          name: "AI Code Reviewer",
          description: "ML-powered code review assistant",
          tags: ["TypeScript", "OpenAI", "Next.js"],
          status: "Beta",
          stars: 445,
          views: 3200,
          link: "#",
          github: "#"
        }
      ]
    },
    {
      id: 'ai',
      icon: <Brain className="h-5 w-5" />,
      title: "AI/ML Projects",
      description: "Machine learning experiments",
      projects: [
        {
          name: "Threat Predictor",
          description: "ML model for predicting security threats",
          tags: ["Python", "PyTorch", "Security"],
          status: "Research",
          stars: 278,
          views: 1450,
          link: "#",
          github: "#"
        }
      ]
    }
  ];

  const handleProjectView = (projectName: string) => {
    setViewedProjects(prev => new Set(prev).add(projectName));
    window.gtag?.('event', 'project_view', {
      project_name: projectName
    });
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    window.gtag?.('event', 'project_category_select', {
      category: category
    });
  };

  const filteredProjects = selectedCategory === 'all' 
    ? projectCategories.flatMap(cat => cat.projects.map(p => ({ ...p, category: cat.title })))
    : projectCategories.find(cat => cat.id === selectedCategory)?.projects.map(p => ({ ...p, category: projectCategories.find(cat => cat.id === selectedCategory)?.title })) || [];

  return (
    <div className="min-h-screen relative overflow-hidden">
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
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive portfolio showcasing my work in security, development, and research
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => handleCategorySelect('all')}
            className="group"
          >
            <Rocket className="mr-2 h-4 w-4" />
            All Projects
          </Button>
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => handleCategorySelect(category.id)}
              className="group"
            >
              {category.icon}
              <span className="ml-2">{category.title}</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className={`h-full p-6 bg-gradient-glass backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                  viewedProjects.has(project.name) ? 'border-green-500/30' : ''
                }`}
                onClick={() => handleProjectView(project.name)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <Badge variant={project.status === 'Active' || project.status === 'Deployed' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-blue-500" />
                    <span>{project.views}</span>
                  </div>
                  {viewedProjects.has(project.name) && (
                    <Badge variant="outline" className="text-xs text-green-500 border-green-500/30">
                      Viewed
                    </Badge>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.gtag?.('event', 'project_demo_click', { project: project.name });
                    }}
                  >
                    <ExternalLink className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                    Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 group"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.gtag?.('event', 'project_github_click', { project: project.name });
                    }}
                  >
                    <Github className="mr-1 h-3 w-3 group-hover:rotate-12 transition-transform" />
                    Code
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Private Work Notice */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30 mb-16">
            <div className="flex items-start gap-4">
              <Lock className="h-8 w-8 text-red-500 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Private Development Work</h3>
                <p className="text-muted-foreground mb-4">
                  I've contributed to several confidential projects for enterprise clients including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Security audits for Fortune 500 companies</li>
                  <li>Penetration testing for government systems</li>
                  <li>Custom security tools for cybersecurity firms</li>
                  <li>NDA-protected blockchain security assessments</li>
                </ul>
                <Button 
                  variant="outline" 
                  className="mt-4 border-red-500/50 hover:bg-red-500/10"
                  onClick={() => {
                    window.gtag?.('event', 'private_work_inquiry');
                  }}
                >
                  Inquire About Private Consulting
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Impressed by my work?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-strong"
              >
                Hire Me
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/future-plans">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10"
              >
                See Future Plans
                <Rocket className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <p className="mt-8 text-muted-foreground animate-pulse">
            👇 Let's build something amazing together
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;