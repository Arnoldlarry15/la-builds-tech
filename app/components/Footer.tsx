'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>();

  useEffect(() => {
    // Compute year on client side to avoid static generation mismatches
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.branding}>
            <h3>LA Builds</h3>
            <p>AI Systems Engineering Studio</p>
          </div>
          <div className={styles.links}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:contact@labuilds.com">Email</a>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear ?? new Date().getFullYear()} LA Builds. All rights reserved.</p>
          <p className={styles.tagline}>Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
