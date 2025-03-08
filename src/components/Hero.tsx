
import { useEffect, useRef } from 'react';
import { ArrowRight, Bot, Shield, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particle system
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      directionX: number;
      directionY: number;
      connected: number;
    }
    
    const particles: Particle[] = [];
    const particleCount = 50;
    const connectionDistance = 100;
    const colors = ['rgba(30, 144, 255, 0.4)', 'rgba(32, 201, 151, 0.4)', 'rgba(108, 99, 255, 0.4)'];
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.1,
        directionX: Math.random() * 2 - 1,
        directionY: Math.random() * 2 - 1,
        connected: 0
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Move particles
        p.x += p.directionX * p.speed;
        p.y += p.directionY * p.speed;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.directionX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.directionY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(30, 144, 255, ${0.2 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section className="relative h-screen pt-24 overflow-hidden" id="home">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 -z-10 w-full h-full"
      />
      <div className="absolute inset-0 -z-10 bg-cyber-grid bg-cyber-light"></div>
      
      <div className="container mx-auto px-6 h-full flex flex-col">
        <div className="flex flex-col items-center justify-center text-center h-full max-w-5xl mx-auto">
          <div className="badge badge-blue animate-fade-in [animation-delay:100ms]">
            AI-Powered Cybersecurity
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 animate-fade-in [animation-delay:200ms]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-cyber-purple">
              HackXtreme
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-cyber-dark/80 mt-4 animate-fade-in [animation-delay:300ms]">
            Gamified, AI-Powered Cybersecurity Learning Platform
          </p>
          
          <p className="text-cyber-dark/70 max-w-3xl mt-6 animate-fade-in [animation-delay:400ms]">
            Switch roles between hackers and defenders, earn badges, and master cybersecurity through interactive, AI-guided learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in [animation-delay:500ms]">
            <Button className="cyber-button group" size="lg">
              <span>Start Your Journey</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/5">
              View Curriculum
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-16 animate-fade-in [animation-delay:600ms]">
            <div className="flex items-center">
              <Bot className="h-5 w-5 text-cyber-blue mr-2" />
              <span>AI-Guided Learning</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-cyber-teal mr-2" />
              <span>Hands-on Simulations</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-5 w-5 text-cyber-purple mr-2" />
              <span>Real-world Scenarios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
