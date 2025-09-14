import { useState } from 'react';
import Avatar from '@/components/Avatar';
import ControlsPanel from '@/components/ControlsPanel';
import { AvatarState } from '@/components/types';

/**
 * Main Avatar Creator application component
 * Manages the avatar state and renders the avatar display and controls
 */
const Index = () => {
  // Initialize avatar state with default selections
  const [avatarState, setAvatarState] = useState<AvatarState>({
    body: 'body1',    // Default: White T-Shirt
    hair: 'hair1',    // Default: Brown Wavy
    eyes: 'eyes1',    // Default: Blue Eyes
    mouth: 'mouth1'   // Default: Happy Smile
  });

  /**
   * Handler for updating individual avatar features
   * @param feature - The avatar feature to update (body, hair, eyes, mouth)
   * @param value - The new value for the feature
   */
  const handleFeatureChange = (feature: keyof AvatarState, value: string) => {
    setAvatarState(prev => ({
      ...prev,
      [feature]: value
    }));
  };

  return (
    <div className="min-h-screen bg-app-gradient">
      {/* Header */}
      <header className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-foreground mb-2">
            Avatar Creator
          </h1>
          <p className="text-center text-muted-foreground text-lg">
            Create your perfect avatar with our interactive customization tool
          </p>
        </div>
      </header>

      {/* Main application layout */}
      <main className="container mx-auto px-4 pb-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          
          {/* Avatar display section - Left side */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6 text-foreground/90">
                Your Avatar
              </h2>
              <Avatar avatarState={avatarState} />
            </div>
          </div>

          {/* Controls panel section - Right side */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <ControlsPanel
                avatarState={avatarState}
                onFeatureChange={handleFeatureChange}
              />
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Click the options above to customize your avatar's appearance
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
