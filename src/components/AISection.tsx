
import { Bot, Brain, LineChart, Code, ShieldAlert, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const AISection = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Mentor (Cyber Guide)",
      description: "AI acts as a real-time assistant, explaining security concepts using interactive visuals."
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Adaptive Learning Paths",
      description: "AI dynamically adjusts difficulty based on player performance for personalized learning."
    },
    {
      icon: <ShieldAlert className="h-6 w-6" />,
      title: "AI-Generated Challenges",
      description: "Unique, real-world attack & defense scenarios tailored to skill level."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Automated Code Review",
      description: "AI analyzes security flaws in code and suggests fixes with detailed explanations."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Opponents",
      description: "Compete against AI hackers or defenders that learn and adapt to your strategies."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant AI Feedback",
      description: "AI highlights mistakes and explains security fixes through detailed animations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-cyber-blue/5" id="ai-features">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge badge-blue inline-block mb-3">
            AI-Powered Learning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cyber-dark mb-4">
            Learning with Artificial Intelligence
          </h2>
          <p className="text-cyber-dark/70">
            Our AI-powered platform adapts to your skill level, providing personalized guidance and challenges to accelerate your cybersecurity mastery.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass-card max-w-3xl mx-auto p-8 rounded-xl border border-cyber-blue/20">
            <LineChart className="h-8 w-8 text-cyber-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-cyber-dark mb-2">AI-Driven Performance Analytics</h3>
            <p className="text-cyber-dark/70">
              Track your progress with detailed insights powered by AI. Identify your strengths and areas for improvement with custom learning recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
