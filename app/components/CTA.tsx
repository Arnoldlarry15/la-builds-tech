import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <h2>Build Smarter Systems.</h2>
        <p>
          Whether you need automation, AI infrastructure, or operational tooling, I help transform complexity into scalable systems.
        </p>
        <div className={styles.buttons}>
          <a href="mailto:labuilds@proton.me" className="btn btn-primary">
            Schedule Consultation
          </a>
          <a href="mailto:labuilds@proton.me" className="btn btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
