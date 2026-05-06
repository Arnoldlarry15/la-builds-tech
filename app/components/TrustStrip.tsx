'use client';

import { useEffect, useState } from 'react';
import styles from './TrustStrip.module.css';

const items = [
  'AI Automation',
  'Workflow Systems',
  'LLM Red Teaming',
  'Custom Tooling',
  'Research & Development',
];

export default function TrustStrip() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      setScrollPosition((prev) => (prev + 0.3) % 100);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className={styles.strip}>
      <div className={styles.scroll} style={{ transform: `translateX(-${scrollPosition}%)` }}>
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className={styles.item}>
            <span>{item}</span>
            <span className={styles.separator}>•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
