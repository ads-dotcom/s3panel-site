'use client';

import { ReactNode } from 'react';

interface RevealAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  instant?: boolean;
  start?: string;
  end?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  useSpring?: boolean;
  rotation?: number;
  animationType?: 'from' | 'to';
}

const RevealAnimation = ({ children }: RevealAnimationProps) => <>{children}</>;

export default RevealAnimation;
