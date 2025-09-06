import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Rocket, Target, Trophy, Zap, BookOpen, 
  Shield, Code2, Brain, ChevronRight, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const FuturePlans = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  useEffect(() => {
    // Track page view
    window.gtag?.('event', 'page_view', {
      page_path: '/future-plans',
      page_title: 'Future Plans & Goals'
    });
  }, []);

  const goals = [
    {
      id: 'short',
      title: "Short Term Goals",
      icon: <Target className="h-6 w-6" />,
      timeline: "Next 6 Months",
      items: [
        { task: "Complete advanced cybersecurity certification", progress: 75, priority: "high" },
        { task: "Launch Sanskrit NLP open-source project", progress: 60, priority: "high" },
        { task: "Contribute to 5 major OSS projects", progress: 40, priority: "medium" },
        { task: "Build AI-powered security scanner", progress: 30, priority: "high" }
      ]
    },
    {
      id: 'medium',
      title: "Medium Term Goals",
      icon: <Rocket className="h-6 w-6" />,
      timeline: "1-2 Years",
      items: [
        { task: "Graduate with distinction from IIT Delhi", progress: 45, priority: "high" },
        { task: "Start security consulting firm", progress: 20, priority: "high" },
        { task: "Publish research paper on Sanskrit computation", progress: 35, priority: "medium" },
        { task: "Build 1M+ user product", progress: 15, priority: "medium" }
      ]
    },
    {
      id: 'long',
      title: "Long Term Vision",
      icon: <Trophy className="h-6 w-6" />,
      timeline: "5+ Years",
      items: [
        { task: "Become recognized security expert", progress: 25, priority: "high" },
        { task: "Create Sanskrit tech foundation", progress: 10, priority: "high" },
        { task: "Build unicorn cybersecurity startup", progress: 5, priority: "high" },
        { task: "Mentor 1000+ students", progress: 8, priority: "medium" }
      ]
    }
  ];

  const learningPath = [
    { skill: "Quantum Computing Security", icon: <Brain />, status: "planned" },
    { skill: "Blockchain & Smart Contracts", icon: <Code2 />, status: "in-progress" },
    { skill: "Advanced AI/ML", icon: <Zap />, status: "in-progress" },
    { skill: "Cloud Security Architecture", icon: <Shield />, status: "planned" },
    { skill: "Sanskrit Computational Linguistics", icon: <BookOpen />, status: "active" }
  ];

  const handleGoalClick = (goalId: string) => {
    setSelectedGoal(goalId);
    window.gtag?.('event', 'goal_interaction', {
      goal_id: goalId
    });
  };

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
            Future <span className="gradient-text">Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My roadmap to becoming a world-class ethical hacker and tech innovator
          </p>
        </motion.div>

        {/* Interactive Goals Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card 
                className={`p-6 bg-gradient-glass backdrop-blur-xl border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer ${
                  selectedGoal === goal.id ? 'border-primary shadow-glow' : ''
                }`}
                onClick={() => handleGoalClick(goal.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{goal.title}</h3>
                    <p className="text-sm text-muted-foreground">{goal.timeline}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {goal.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm group-hover:text-primary transition-colors">
                          {item.task}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.progress}%
                        </span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                      {item.priority === 'high' && (
                        <span className="text-xs text-red-500 mt-1 inline-block">High Priority</span>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="p-8 bg-gradient-glass backdrop-blur-xl border-primary/20 mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Continuous Learning Path
              <Sparkles className="inline-block ml-2 h-5 w-5 text-primary animate-pulse" />
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {learningPath.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    item.status === 'active' 
                      ? 'bg-primary/10 border-primary/30' 
                      : item.status === 'in-progress'
                      ? 'bg-blue-500/10 border-blue-500/30'
                      : 'bg-background/50 border-border/20'
                  }`}
                  onClick={() => {
                    window.gtag?.('event', 'learning_path_click', { skill: item.skill });
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{item.icon}</div>
                    <div>
                      <p className="font-medium">{item.skill}</p>
                      <span className="text-xs text-muted-foreground capitalize">
                        {item.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Dream Projects */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Card className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 mb-16">
            <h3 className="text-2xl font-bold mb-6">🚀 Dream Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-lg mb-3 text-purple-400">Security Innovation</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-powered threat prediction system</li>
                  <li>• Quantum-resistant encryption protocol</li>
                  <li>• Global bug bounty platform</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3 text-pink-400">Sanskrit Tech</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sanskrit-to-code compiler</li>
                  <li>• Vedic mathematics solver</li>
                  <li>• Ancient text digitization AI</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Want to be part of my journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="group bg-gradient-primary hover:shadow-glow-strong"
              >
                Collaborate With Me
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={() => {
                window.gtag?.('event', 'newsletter_signup_attempt');
              }}
            >
              Follow My Progress
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="mt-8 text-muted-foreground animate-pulse">
            👇 Let's build the future together
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FuturePlans;