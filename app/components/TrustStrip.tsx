'use client';

import { useEffect, useRef } from 'react';
import styles from './TrustStrip.module.css';

const items = [
  'AI Automation',
  'Workflow Systems',
  'LLM Red Teaming',
  'Custom Tooling',
  'Research & Development',
];

export default function TrustStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Disable animation if user prefers reduced motion
      return;
    }

    let scrollPosition = 0;
    const speed = 0.3;
    const maxScroll = 50; // Half the total width since content is duplicated

    // Set initial transform to avoid layout shift
    scrollElement.style.transform = `translateX(0%)`;

    const animate = () => {
      scrollPosition = (scrollPosition + speed) % maxScroll;
      scrollElement.style.transform = `translateX(-${scrollPosition}%)`;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current !== undefined) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.strip}>
      <div ref={scrollRef} className={styles.scroll}>
        {[...items, ...items].map((item, idx) => (
          <div key={`${item}-${Math.floor(idx / items.length)}`} className={styles.item}>
            <span>{item}</span>
            <span className={styles.separator}>•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
