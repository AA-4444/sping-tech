import { MapPin } from 'lucide-react';
import { Card } from './ui/card';

interface LocationCardProps {
  city: string;
  country: string;
  address: string;
  isActive?: boolean;
}

const LocationCard = ({ city, country, address, isActive = false }: LocationCardProps) => {
  return (
    <Card
      className={`p-6 transition-all duration-300 hover:scale-105 ${
        isActive
          ? 'bg-gradient-to-br from-secondary/20 to-accent/10 border-accent/50'
          : 'bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30'
      }`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-1 ${
            isActive ? 'text-accent' : 'text-primary'
          }`}
        >
          <MapPin className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold mb-1 ${
              isActive ? 'text-accent' : 'text-foreground'
            }`}
          >
            {city}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{country}</p>
          <p className="text-sm text-foreground/80">{address}</p>
        </div>
      </div>
    </Card>
  );
};

export default LocationCard;
