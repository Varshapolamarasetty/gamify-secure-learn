
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-cyber-blue" />
              <span className="font-bold text-xl text-white">HackXtreme</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A gamified, AI-powered cybersecurity learning platform where players progress through levels, earn badges, and master real-world hacking and defense skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Missions</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Learning Paths</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">AI Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Challenges</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Leaderboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Community</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">Support</a></li>
              <li><a href="#" className="text-white/70 hover:text-cyber-blue transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} HackXtreme. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
