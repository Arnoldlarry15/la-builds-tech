'use client';

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
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
            <a href="https://github.com/Arnoldlarry15" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/larry-arnold" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://linkedin.com/company/labuilds" target="_blank" rel="noopener noreferrer">
              LinkedIn (LA Builds)
            </a>
            <a href="https://x.com/labuilds" target="_blank" rel="noopener noreferrer">
              X
            </a>
            <a href="https://youtube.com/@labuilds" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://instagram.com/labuilds" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="mailto:labuilds@proton.me">Email</a>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {currentYear} LA Builds. All rights reserved.</p>
          <p className={styles.tagline}>Built with intention.</p>
        </div>
      </div>
    </footer>
  );
}
