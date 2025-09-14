import { AvatarState } from './types';

// Import avatar assets
import body1 from '@/assets/body/body1.png';
import body2 from '@/assets/body/body2.png';
import hair1 from '@/assets/hair/hair1.png';
import hair2 from '@/assets/hair/hair2.png';
import hair3 from '@/assets/hair/hair3.png';
import eyes1 from '@/assets/eyes/eyes1.png';
import eyes2 from '@/assets/eyes/eyes2.png';
import eyes3 from '@/assets/eyes/eyes3.png';
import mouth1 from '@/assets/mouth/mouth1.png';
import mouth2 from '@/assets/mouth/mouth2.png';

// Asset mapping for dynamic rendering
const assets = {
  body: { body1, body2 },
  hair: { hair1, hair2, hair3 },
  eyes: { eyes1, eyes2, eyes3 },
  mouth: { mouth1, mouth2 }
};

interface AvatarProps {
  avatarState: AvatarState;
}

/**
 * Avatar component that renders the layered avatar
 * Uses absolute positioning to stack avatar parts with proper z-index
 */
const Avatar = ({ avatarState }: AvatarProps) => {
  return (
    <div className="relative w-80 h-96 mx-auto bg-avatar-bg rounded-3xl shadow-elegant overflow-hidden border border-border/20">
      {/* Avatar container with layered positioning */}
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="relative w-56 h-80">
          
          {/* Body layer - base layer positioned to show complete torso (z-index: 1) */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2" style={{ zIndex: 1 }}>
            <img
              src={assets.body[avatarState.body as keyof typeof assets.body]}
              alt="Avatar body"
              className="w-52 h-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Hair layer - positioned to frame the head naturally (z-index: 2) */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2" style={{ zIndex: 2 }}>
            <img
              src={assets.hair[avatarState.hair as keyof typeof assets.hair]}
              alt="Avatar hair"
              className="w-36 h-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Eyes layer - positioned in proper face area (z-index: 3) */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2" style={{ zIndex: 3 }}>
            <img
              src={assets.eyes[avatarState.eyes as keyof typeof assets.eyes]}
              alt="Avatar eyes"
              className="w-16 h-auto object-contain transition-all duration-300"
            />
          </div>

          {/* Mouth layer - positioned naturally below eyes (z-index: 4) */}
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2" style={{ zIndex: 4 }}>
            <img
              src={assets.mouth[avatarState.mouth as keyof typeof assets.mouth]}
              alt="Avatar mouth"
              className="w-8 h-auto object-contain transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default Avatar;