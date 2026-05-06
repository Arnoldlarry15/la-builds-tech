import styles from './Process.module.css';

const steps = [
  {
    number: 1,
    title: 'Discovery',
    description: 'Understand workflows and pain points. I map your current systems and identify opportunities.',
  },
  {
    number: 2,
    title: 'System Design',
    description: 'Map operational logic and automation opportunities. Design solutions that fit your infrastructure.',
  },
  {
    number: 3,
    title: 'Build & Integration',
    description: 'Develop and deploy solutions. Seamless integration with existing tools and workflows.',
  },
  {
    number: 4,
    title: 'Optimization',
    description: 'Refine based on real-world usage. Continuous improvement and scaling.',
  },
];

export default function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Process</h2>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>
                <div className={styles.number}>{step.number}</div>
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
