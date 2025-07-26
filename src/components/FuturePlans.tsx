import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Rocket, Palette, Users, Briefcase, ArrowRight, Clock } from 'lucide-react';

const FuturePlans = () => {
  const futurePlans = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Services Domain Entry",
      description: "Planning to enter the professional services domain with a focus on technology consulting and development",
      timeline: "2025-2026",
      status: "Planning",
      color: "bg-blue-500"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design Services",
      description: "Expanding into user interface and experience design to create beautiful, functional digital experiences",
      timeline: "2024-2025",
      status: "Coming Soon",
      color: "bg-purple-500"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Sanskrit Tech Community",
      description: "Building a community of developers interested in Sanskrit computation and ancient knowledge systems",
      timeline: "2024",
      status: "Conceptualizing",
      color: "bg-green-500"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Advanced Sanskrit Tools",
      description: "Developing sophisticated applications for Sanskrit research, translation, and computational analysis",
      timeline: "Ongoing",
      status: "In Development",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="future" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Future <span className="gradient-text">Plans</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Envisioning the future where tradition meets innovation
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="mb-16 scroll-reveal">
          <Card className="glass-card p-8 text-center bg-gradient-primary/10 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">Under Construction</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Exciting developments are on the horizon! I'm preparing to launch comprehensive 
                UI/UX design services and advanced Sanskrit computation tools.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 px-4 py-2 glass-card rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Launching Soon</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Future Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {futurePlans.map((plan, index) => (
            <Card key={index} className="glass-card p-6 hover-lift scroll-reveal">
              <div className="flex items-start space-x-4">
                <div className={`p-3 ${plan.color} rounded-xl text-white flex-shrink-0`}>
                  {plan.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{plan.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {plan.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{plan.timeline}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="scroll-reveal">
          <Card className="glass-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-6">
              My <span className="gradient-text">Vision</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              To bridge the gap between ancient wisdom and modern technology, creating tools and services 
              that honor traditional knowledge while embracing innovation. My goal is to contribute to the 
              digital transformation of Sanskrit studies and provide exceptional technology solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Pioneering new approaches to Sanskrit computation</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-bold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Delivering high-quality solutions and services</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-bold mb-2">Impact</h4>
                <p className="text-sm text-muted-foreground">Making a meaningful difference in education and technology</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;