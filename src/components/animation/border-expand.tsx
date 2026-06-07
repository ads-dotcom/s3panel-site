'use client';

import { ReactNode } from 'react';

export interface BorderExpandProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scrollTrigger?: boolean;
  start?: string;
  end?: string;
  className?: string;
}

const BorderExpand = ({ children }: BorderExpandProps) => <>{children}</>;

export { BorderExpand };
