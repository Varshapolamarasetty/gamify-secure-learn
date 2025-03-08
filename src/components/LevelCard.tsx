
import { ChevronRight, Award } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';

interface LevelCardProps {
  level: number;
  title: string;
  learningAreas: string[];
  badge: string;
  className?: string;
  isActive?: boolean;
}

const LevelCard = ({ level, title, learningAreas, badge, className, isActive = false }: LevelCardProps) => {
  const activeClasses = isActive 
    ? "border-cyber-blue/40 shadow-lg shadow-cyber-blue/5 bg-gradient-to-br from-white to-cyber-blue/5" 
    : "border-white/20 hover:border-cyber-blue/20 hover:shadow-lg hover:shadow-cyber-blue/5";

  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300",
        "rounded-xl",
        activeClasses,
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-cyber-blue/10 text-cyber-blue rounded-full text-xs font-medium mr-2">
              {level}
            </span>
            <h3 className="font-bold text-lg text-cyber-dark">{title}</h3>
          </div>
          
          <div className="mt-3">
            <h4 className="text-xs uppercase text-cyber-dark/50 font-semibold mb-2">Key Learning Areas</h4>
            <ul className="space-y-1.5">
              {learningAreas.map((area, index) => (
                <li key={index} className="flex items-center text-sm text-cyber-dark/70">
                  <ChevronRight className="h-3 w-3 mr-1 text-cyber-blue flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col items-center ml-4">
          <Badge className="bg-gradient-to-r from-cyber-blue/20 to-cyber-teal/20 text-cyber-blue border border-cyber-blue/20 mb-2">
            {badge}
          </Badge>
          <Award className={`w-10 h-10 ${isActive ? "text-cyber-blue animate-pulse-subtle" : "text-gray-300"}`} />
        </div>
      </div>
    </div>
  );
};

export default LevelCard;
