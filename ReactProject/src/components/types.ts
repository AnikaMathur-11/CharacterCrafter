/**
 * Avatar state interface defining the structure for avatar customization
 * Each property corresponds to a different avatar feature that can be customized
 */
export interface AvatarState {
  body: string;  // e.g., 'body1', 'body2'
  hair: string;  // e.g., 'hair1', 'hair2', 'hair3'
  eyes: string;  // e.g., 'eyes1', 'eyes2', 'eyes3'
  mouth: string; // e.g., 'mouth1', 'mouth2'
}

/**
 * Feature configuration for controls panel
 * Defines available options for each avatar feature
 */
export interface FeatureConfig {
  [key: string]: {
    label: string;
    options: Array<{
      id: string;
      label: string;
    }>;
  };
}