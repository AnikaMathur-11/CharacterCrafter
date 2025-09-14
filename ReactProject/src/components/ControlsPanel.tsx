import { Button } from '@/components/ui/button';
import { AvatarState, FeatureConfig } from './types';

interface ControlsPanelProps {
  avatarState: AvatarState;
  onFeatureChange: (feature: keyof AvatarState, value: string) => void;
}

// Configuration for all avatar features and their available options
const featureConfig: FeatureConfig = {
  body: {
    label: 'Body Style',
    options: [
      { id: 'body1', label: 'White T-Shirt' },
      { id: 'body2', label: 'Blue Hoodie' }
    ]
  },
  hair: {
    label: 'Hair Style',
    options: [
      { id: 'hair1', label: 'Brown Wavy' },
      { id: 'hair2', label: 'Blonde Straight' },
      { id: 'hair3', label: 'Red Curly' }
    ]
  },
  eyes: {
    label: 'Eye Color',
    options: [
      { id: 'eyes1', label: 'Blue Eyes' },
      { id: 'eyes2', label: 'Green Eyes' },
      { id: 'eyes3', label: 'Brown Eyes' }
    ]
  },
  mouth: {
    label: 'Expression',
    options: [
      { id: 'mouth1', label: 'Happy Smile' },
      { id: 'mouth2', label: 'Neutral' }
    ]
  }
};

/**
 * Controls panel component for avatar customization
 * Renders sections for each feature with selection buttons
 */
const ControlsPanel = ({ avatarState, onFeatureChange }: ControlsPanelProps) => {
  return (
    <div className="bg-control-bg rounded-3xl p-8 shadow-control border border-border/20">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
        Customize Avatar
      </h2>

      <div className="space-y-8">
        {Object.entries(featureConfig).map(([featureKey, config]) => (
          <div key={featureKey} className="space-y-4">
            {/* Feature section heading */}
            <h3 className="text-lg font-semibold text-foreground/90 border-b border-border/30 pb-2">
              {config.label}
            </h3>

            {/* Feature option buttons */}
            <div className="grid grid-cols-1 gap-3">
              {config.options.map((option) => {
                const isSelected = avatarState[featureKey as keyof AvatarState] === option.id;
                
                return (
                  <Button
                    key={option.id}
                    variant={isSelected ? "default" : "secondary"}
                    size="lg"
                    onClick={() => onFeatureChange(featureKey as keyof AvatarState, option.id)}
                    className={`
                      w-full justify-start h-12 font-medium transition-smooth
                      ${isSelected 
                        ? 'bg-control-hover text-primary-foreground shadow-md' 
                        : 'hover:bg-control-hover/20 hover:scale-105'
                      }
                    `}
                  >
                    {option.label}
                  </Button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Additional styling for premium feel */}
      <div className="mt-8 pt-6 border-t border-border/30">
        <p className="text-sm text-muted-foreground text-center">
          Mix and match to create your perfect avatar!
        </p>
      </div>
    </div>
  );
};

export default ControlsPanel;