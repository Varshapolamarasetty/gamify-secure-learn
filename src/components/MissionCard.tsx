
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface MissionCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  className?: string;
}

const MissionCard = ({ number, title, description, icon, imageSrc, className }: MissionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl group cursor-pointer",
        "transition-all duration-500 transform",
        "border border-white/20",
        "bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md",
        "hover:shadow-xl",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-100 opacity-20 group-hover:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-white/30" />
      </div>

      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyber-blue/10 text-cyber-blue mr-3">
            {icon}
          </div>
          <span className="text-sm font-semibold text-cyber-blue">Mission {number}</span>
        </div>
        
        <h3 className="text-xl font-bold text-cyber-dark mb-2">{title}</h3>
        <p className="text-cyber-dark/70 mb-6 flex-grow">{description}</p>
        
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            className="group p-0 h-auto hover:bg-transparent"
          >
            <span className="text-cyber-blue font-medium">Begin Mission</span>
            <ArrowRight 
              className={cn(
                "ml-2 h-4 w-4 text-cyber-blue transition-transform duration-300",
                isHovered ? "translate-x-1" : ""
              )} 
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
