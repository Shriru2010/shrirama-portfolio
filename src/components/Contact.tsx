import { Card } from '@/components/ui/card';
import { Mail, Phone, MessageCircle, Github } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "shriramar6@gmail.com",
      href: "mailto:shriramar6@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9482462624",
      href: "tel:+919482462624"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "Snapchat",
      value: "shriru2010",
      href: "https://snapchat.com/add/shriru2010"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "@shriru10",
      href: "https://github.com/Shriru2010"
    },
    // Removed the location entry as per user request
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="holographic">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="scroll-reveal max-w-2xl w-full">
            <Card className="neo-card card-3d p-8 h-fit neon-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out for project collaborations, Sanskrit computation discussions, 
                or just to connect about technology and innovation.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="p-3 bg-gradient-primary rounded-xl text-white group-hover:glow-primary transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instagram */}
              <div className="mt-8 p-4 glass-card rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">IG</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram</p>
                    <a 
                      href="https://instagram.com/shriru10" 
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      @shriru10
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;