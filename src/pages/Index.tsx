
import { useEffect } from 'react';
import { Cpu, Lock, Shield, Zap, Award, Braces, Terminal, Flag } from 'lucide-react';
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionCard from "@/components/MissionCard";
import LevelCard from "@/components/LevelCard";
import AISection from "@/components/AISection";
import Footer from "@/components/Footer";

const Index = () => {
  // Simulated images for missions
  const missionImages = [
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544890225-2f3faec4cd60?q=80&w=1000&auto=format&fit=crop"
  ];

  // AOS-style animation on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Missions Section */}
      <section className="py-20" id="missions">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-teal inline-block mb-3">
              Mission-Based Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-dark mb-4">
              Complete Critical Missions
            </h2>
            <p className="text-cyber-dark/70">
              Apply your cybersecurity skills in real-world scenarios through immersive, AI-guided missions that adapt to your skill level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MissionCard 
              number={1}
              title="Hospital Ransomware Defense"
              description="Stop an AI-powered ransomware attack targeting critical hospital systems while maintaining essential services."
              icon={<Lock className="h-5 w-5" />}
              imageSrc={missionImages[0]}
              className="animate-on-scroll opacity-0"
            />
            
            <MissionCard 
              number={2}
              title="Deepfake Phishing Investigation"
              description="Investigate a sophisticated deepfake phishing scam targeting executives in a virtual corporate environment."
              icon={<Cpu className="h-5 w-5" />}
              imageSrc={missionImages[1]}
              className="animate-on-scroll opacity-0"
            />
            
            <MissionCard 
              number={3}
              title="Criminal Network Infiltration"
              description="Ethically hack a simulated criminal network to protect sensitive data and expose vulnerabilities."
              icon={<Terminal className="h-5 w-5" />}
              imageSrc={missionImages[2]}
              className="animate-on-scroll opacity-0"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button className="cyber-button group" size="lg">
              <span>View All Missions</span>
              <Zap className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Levels Section */}
      <section className="py-20 bg-gradient-to-b from-cyber-blue/5 to-white" id="levels">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-purple inline-block mb-3">
              Progressive Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-cyber-dark mb-4">
              Level-Based Learning Journey
            </h2>
            <p className="text-cyber-dark/70">
              Progress through 10 challenging levels, from Cyber Explorer to Cyber Legend, earning badges and mastering essential cybersecurity skills along the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <LevelCard 
              level={1}
              title="Cyber Explorer"
              learningAreas={["Basics of cybersecurity", "Ethical hacking introduction", "Security fundamentals"]}
              badge="Explorer Badge"
              isActive={true}
              className="animate-on-scroll opacity-0"
            />
            
            <LevelCard 
              level={2}
              title="Bug Hunter"
              learningAreas={["Basic vulnerability scanning", "Weak password attacks", "Security reconnaissance"]}
              badge="Novice Bug Hunter Badge"
              className="animate-on-scroll opacity-0"
            />
            
            <LevelCard 
              level={3}
              title="Code Defender"
              learningAreas={["AI-guided coding exercises", "Secure programming practices", "Code vulnerability analysis"]}
              badge="Secure Coder Badge"
              className="animate-on-scroll opacity-0"
            />
            
            <LevelCard 
              level={4}
              title="Firewall Guardian"
              learningAreas={["Hands-on firewall configuration", "Network traffic monitoring", "Intrusion prevention"]}
              badge="Network Defender Badge"
              className="animate-on-scroll opacity-0"
            />
          </div>
          
          <div className="text-center">
            <Button className="bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20" size="lg">
              <Award className="mr-2 h-4 w-4" />
              <span>View All 10 Levels</span>
            </Button>
          </div>
        </div>
      </section>
      
      {/* AI Section */}
      <AISection />
      
      {/* Learning Modes Section */}
      <section className="py-20 bg-cyber-dark" id="learning-modes">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/20 inline-block mb-3">
              Interactive Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Gamified Learning Modes
            </h2>
            <p className="text-white/70">
              Choose from multiple engaging learning modes that combine AI guidance with gamification to make cybersecurity learning fun and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
              <Cpu className="h-10 w-10 text-cyber-blue mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">AI vs. Player Mode</h3>
              <p className="text-white/70 mb-6">
                Challenge the AI in dynamic cybersecurity duels where it acts as a hacker or defender, adjusting tactics in real-time based on your skill level.
              </p>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20">
                Try AI vs. Player
              </Button>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
              <Braces className="h-10 w-10 text-cyber-teal mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Code Flow Visualizer</h3>
              <p className="text-white/70 mb-6">
                Watch as AI animates security code execution, highlighting vulnerabilities in real-time so you can understand exact points of exploitation.
              </p>
              <Button variant="outline" className="border-cyber-teal text-cyber-teal hover:bg-cyber-teal/20">
                Explore Visualizer
              </Button>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
              <Flag className="h-10 w-10 text-cyber-purple mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">AI-Generated CTF Challenges</h3>
              <p className="text-white/70 mb-6">
                Test your skills with AI-tailored Capture The Flag puzzles that adapt to your skill level, providing the perfect balance of challenge and achievability.
              </p>
              <Button variant="outline" className="border-cyber-purple text-cyber-purple hover:bg-cyber-purple/20">
                Start CTF Challenge
              </Button>
            </div>
            
            <div className="glass-card bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
              <Shield className="h-10 w-10 text-cyber-blue mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Co-op AI Guide Mode</h3>
              <p className="text-white/70 mb-6">
                Team up with friends while AI provides real-time hints and feedback, guiding your team through complex cybersecurity scenarios and collaborative challenges.
              </p>
              <Button variant="outline" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20">
                Try Co-op Mode
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue to-cyber-purple">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master Cybersecurity?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of learners who are becoming cybersecurity experts through our AI-powered, gamified learning platform.
            </p>
            <Button className="bg-white text-cyber-blue hover:bg-white/90 text-lg px-8 py-6" size="lg">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
