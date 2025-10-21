/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';

/* eslint-disable no-unused-vars */
interface AnimationContextType {
  hasAnimated: (id: string) => boolean;
  markAsAnimated: (id: string) => void;
  resetAllAnimations: () => void;
}
/* eslint-enable no-unused-vars */

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const useAnimationState = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      'useAnimationState must be used within an AnimationProvider'
    );
  }
  return context;
};

interface AnimationProviderProps {
  children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({
  children,
}) => {
  const [animatedCards, setAnimatedCards] = useState<Set<string>>(new Set());

  const hasAnimated = useCallback(
    (cardId: string): boolean => {
      return animatedCards.has(cardId);
    },
    [animatedCards]
  );

  const markAsAnimated = useCallback((cardId: string): void => {
    setAnimatedCards((prev) => {
      const newSet = new Set(prev);
      newSet.add(cardId);
      console.log(
        '🎬 Animation state: Marked card as animated',
        cardId,
        'Total animated cards:',
        newSet.size
      );
      return newSet;
    });
  }, []);

  const resetAllAnimations = useCallback((): void => {
    console.log('🎬 Animation state: Resetting all animations');
    setAnimatedCards(new Set());
  }, []);

  const value = {
    hasAnimated,
    markAsAnimated,
    resetAllAnimations,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};
