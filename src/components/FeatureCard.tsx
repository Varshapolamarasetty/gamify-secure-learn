
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-xl transition-all duration-300",
        "hover:shadow-lg hover:shadow-cyber-blue/20 hover:-translate-y-1",
        className
      )}
      style={style}
    >
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 p-3 bg-cyber-blue/10 text-cyber-blue rounded-lg">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
