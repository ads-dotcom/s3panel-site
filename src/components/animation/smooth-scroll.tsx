'use client';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  const pathname = usePathname();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: Event) => {
      const element = event.currentTarget as HTMLAnchorElement;
      const href = element.getAttribute('href');
      if (!href?.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    const elements = document.querySelectorAll('.lenis-scroll-to');
    elements.forEach((ele) => {
      ele.addEventListener('click', handleClick);
    });

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', handleClick);
      });
    };
  }, [pathname]);

  return <>{children}</>;
};

export default SmoothScrollProvider;
