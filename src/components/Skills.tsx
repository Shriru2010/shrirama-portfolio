import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu, BookOpen, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 90, color: "bg-orange-500" },
        { name: "CSS", level: 85, color: "bg-blue-500" },
        { name: "JavaScript", level: 80, color: "bg-yellow-500" },
        { name: "React", level: 75, color: "bg-cyan-500" }
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend & Languages",
      skills: [
        { name: "Java", level: 85, color: "bg-red-500" },
        { name: "Python", level: 70, color: "bg-green-500" },
        { name: "Database Design", level: 65, color: "bg-purple-500" }
      ]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Sanskrit Computation",
      skills: [
        { name: "Sanskrit Programming", level: 80, color: "bg-amber-500" },
        { name: "Chandas Analysis", level: 75, color: "bg-orange-400" },
        { name: "Matrix Calculators", level: 70, color: "bg-pink-500" }
      ]
    }
  ];

  const tools = [
    "Git & GitHub", "VS Code", "IntelliJ IDEA", "Chrome DevTools", 
    "Figma", "Sanskrit Tools", "Linux", "Windows"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="holographic">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Blending traditional Sanskrit knowledge with modern technology to create innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="neo-card card-3d p-6 hover-lift scroll-reveal neon-border">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-primary rounded-xl text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 skill-progress"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="scroll-reveal">
          <Card className="neo-card card-3d p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Tools I Work With</h3>
              </div>
              <p className="text-muted-foreground">Technologies and tools that power my development workflow</p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm font-medium glass-card hover-lift cursor-pointer"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Specialty Highlight */}
        <div className="mt-16 scroll-reveal">
          <Card className="neo-card p-8 text-center bg-gradient-primary/10 border-primary/20 neon-border">
            <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Sanskrit Computation Specialist</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Developing innovative tools that bridge ancient Sanskrit knowledge with modern computational methods. 
              Creating matrix calculators and chandas-based applications for academic and research purposes.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;