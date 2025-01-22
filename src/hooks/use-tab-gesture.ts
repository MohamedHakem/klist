import { useMotionValue, useTransform, PanInfo, MotionValue } from 'framer-motion';
import { useState } from 'react';

export interface TabGestureReturn {
  dragProps: {
    drag: 'x';
    dragConstraints: { left: number; right: number };
    dragElastic: number;
    dragDirectionLock: boolean;
    dragMomentum: boolean;
    style: { x: MotionValue<number>; opacity: MotionValue<number> };
    onDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  };
  swipeDirection: 'left' | 'right' | null;
  dragX: MotionValue<number>;
}

export const useTabGesture = (
  tabs: string[],
  currentTab: string,
  setActiveTab: (tab: string) => void
): TabGestureReturn => {
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const dragX = useMotionValue(0);
  const opacity = useTransform(dragX, [-100, 0, 100], [0.5, 1, 0.5]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const currentIndex = tabs.indexOf(currentTab);
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold && currentIndex > 0) {
      setSwipeDirection('right');
      setActiveTab(tabs[currentIndex - 1]);
    } else if (info.offset.x < -swipeThreshold && currentIndex < tabs.length - 1) {
      setSwipeDirection('left');
      setActiveTab(tabs[currentIndex + 1]);
    }

    // Reset dragX immediately after setting the new tab
    dragX.set(0);
  };

  return {
    dragProps: {
      drag: 'x',
      dragConstraints: { left: 0, right: 0 },
      dragElastic: 0.3,
      dragDirectionLock: true,
      dragMomentum: false,
      style: {
        x: dragX,
        opacity: opacity
      },
      onDragEnd: handleDragEnd
    },
    swipeDirection,
    dragX
  };
};
