import { Card } from '@/components/ui/card';
import { GraduationCap, Heart, Code, Dumbbell } from 'lucide-react';
const About = () => {
  const timelineItems = [{
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Current Education",
    subtitle: "10th Grade Student at Arundhati Gurukulam",
    description: "Proudly studying at Arundhati Gurukulam, pursuing academic excellence while diving deep into programming and Sanskrit studies.",
    year: "2024"
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "NEORISHI DEVELOPERS",
    subtitle: "Founder & CEO of Tech Startup",
    description: "Founded a technology startup that blends traditional wisdom with modern innovation, sharing the same spiritual and technological ideologies.",
    year: "2024+"
  }, {
    icon: <Heart className="h-6 w-6" />,
    title: "Spiritual Foundation",
    subtitle: "Veda Practitioner & Devotee",
    description: "Learning Yajurveda and Rigveda while drawing inspiration from Lord Shiva, Hanuman, and Chhatrapati Shivaji Maharaj.",
    year: "Ongoing"
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "Programming Journey",
    subtitle: "Sanskrit Computation & Full-Stack Development",
    description: "Specializing in Sanskrit computation tools, matrix calculators, and chandas-based applications.",
    year: "2023+"
  }, {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Athletic Pursuits",
    subtitle: "Calisthenics Athlete & Yoga Practitioner",
    description: "Excelling in bodyweight training and maintaining physical and mental balance through dedicated practice.",
    year: "Daily"
  }];
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">I'm a kattar Hindu and dedicated student with a passion for yoga, and most of all, coding. As a Veda practitioner learning Yajurveda and Rigveda, I focus on Sanskrit computation, full-stack web development, and Java. My spiritual inspiration comes from Lord Shiva, Hanuman, and my hero—Chhatrapati Shivaji Maharaj.</p>
        </div>

        {/* Personal Info Card */}
        <div className="mb-16 scroll-reveal">
          <Card className="neo-card card-3d p-8 hover-lift">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 holographic">Shrirama R</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="text-muted-foreground">Founder & CEO, NEORISHI DEVELOPERS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-muted-foreground">Currently in 10th Grade</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-muted-foreground">Tech Entrepreneur & Calisthenics Athlete</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block p-6 glass-card rounded-2xl">
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-muted-foreground">Years of Coding</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-12">My <span className="gradient-text">Journey</span></h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 glow-primary z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="neo-card card-3d p-6 hover-lift neon-border">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-primary rounded-xl text-white flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <span className="text-sm text-primary font-medium">{item.year}</span>
                          </div>
                          <h5 className="text-primary font-medium mb-2">{item.subtitle}</h5>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;