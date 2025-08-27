import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

// Typewriter component
function Typewriter({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse text-primary">█</span>
    </span>
  );
}

export default function EthicalHackerConsole() {
  const skills = [
    "Penetration Testing (Web, Network, APIs)",
    "Tools: Kali Linux, Burp Suite, Wireshark, Metasploit, Nmap",
    "Scripting: Python, Bash Automation",
    "Platforms: HackTheBox, TryHackMe",
  ];

  const projects = [
    "Solved 100+ Capture The Flag challenges",
    "Built personal penetration testing lab with VMs",
    "Bug bounty practice & vulnerability reporting",
  ];

  return (
    <section id="ethical-hacking" className="py-20 relative">
      <div className="container mx-auto px-4">
        <Card className="neo-card card-3d p-8 bg-card/50 backdrop-blur-md neon-border overflow-hidden">
          <div className="font-mono">
            {/* Terminal header bar */}
            <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-primary/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-muted-foreground text-sm">terminal@ethical-hacker</span>
            </div>

            {/* Heading with typewriter */}
            <h2 className="text-3xl font-bold mb-8 text-primary">
              <Typewriter text="root@portfolio:~# Ethical_Hacker" speed={70} />
            </h2>

            {/* Skills */}
            <div className="mb-10">
              <h3 className="text-2xl mb-4 gradient-text">[+] Skills</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Typewriter text={`$ ${skill}`} speed={40} />
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-10">
              <h3 className="text-2xl mb-4 gradient-text">[+] Projects</h3>
              <ul className="space-y-2">
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (skills.length + index) * 0.2 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Typewriter text={`$ ${project}`} speed={40} />
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Hacker tagline */}
            <div className="mt-10 text-accent italic text-lg">
              <Typewriter 
                text='root@portfolio:~$ "Securing systems, one vulnerability at a time..."' 
                speed={60} 
              />
            </div>

            {/* Matrix-like background effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none matrix-rain"></div>
          </div>
        </Card>
      </div>
    </section>
  );
}