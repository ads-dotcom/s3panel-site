'use client';

import { cn } from '@/src/utils/cn';
import React, { ReactElement, Ref, cloneElement, useCallback, useRef } from 'react';

interface RevealAnimationProps {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    'data-ns-animate'?: boolean;
  }>;
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

const RevealAnimation = ({ children, className = '' }: RevealAnimationProps) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const setRef = useCallback((el: HTMLElement | null) => {
    elementRef.current = el;
  }, []);

  if (!children || !React.isValidElement(children)) {
    return null;
  }

  return cloneElement(children, {
    ref: setRef,
    className: cn(children.props.className, className),
  });
};

export default RevealAnimation;
