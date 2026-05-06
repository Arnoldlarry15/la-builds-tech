import SystemVisualization from './SystemVisualization';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            AI Systems That Save Time, Reduce Chaos, and Scale Operations.
          </h1>
          <p className={styles.subtitle}>
            Custom AI workflows, automation systems, and intelligent tooling for modern businesses and builders.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className="btn btn-primary">
              Book a Consultation
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <SystemVisualization />
        </div>
      </div>
    </section>
  );
}
