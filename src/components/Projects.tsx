import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lock, Code, Calculator, BookOpen, Eye } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Matrix Calculators",
      description: "Advanced computational tools for matrix operations and mathematical analysis",
      tags: ["Java", "Mathematics", "Algorithms"],
      status: "Internal Use"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Chandas-based Applications",
      description: "Sanskrit prosody analysis tools for academic research and study",
      tags: ["Sanskrit", "Computational Linguistics", "Python"],
      status: "Academic"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development Tools",
      description: "Full-stack applications and utilities for various institutional needs",
      tags: ["React", "JavaScript", "Full-Stack"],
      status: "Institutional"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions combining traditional knowledge with modern technology
          </p>
        </div>

        {/* Project Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectCategories.map((project, index) => (
            <Card key={index} className="glass-card p-6 hover-lift scroll-reveal">
              <div className="mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl text-white w-fit mb-4">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Lock className="h-4 w-4" />
                  <span>{project.status}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="scroll-reveal">
          <Card className="glass-card p-8 text-center border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Eye className="h-6 w-6 text-amber-500" />
              <h3 className="text-2xl font-bold">Private Development Work</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Some of my tools and calculators were developed for private academic purposes and are not listed here. 
              These projects involved institutional requirements and proprietary algorithms for educational research.
            </p>
            <div className="mt-6 inline-flex items-center space-x-2 text-sm text-amber-600">
              <Lock className="h-4 w-4" />
              <span className="font-medium">Confidential Academic Projects</span>
            </div>
          </Card>
        </div>

        {/* Skills Showcase */}
        <div className="mt-16 scroll-reveal">
          <Card className="glass-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Project <span className="gradient-text">Highlights</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Mathematical Tools</h4>
                <p className="text-sm text-muted-foreground">Advanced matrix operations and computational algorithms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Sanskrit Computing</h4>
                <p className="text-sm text-muted-foreground">Prosody analysis and linguistic computation tools</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">Full-Stack Solutions</h4>
                <p className="text-sm text-muted-foreground">Complete web applications for institutional needs</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;