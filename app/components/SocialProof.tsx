import styles from './SocialProof.module.css';

const proofPoints = [
  {
    label: 'Open-Source AI Systems',
    description: 'Active contributor to modern AI infrastructure projects.',
  },
  {
    label: 'Automation-First Workflows',
    description: 'Designed systems that reduce manual work by 70%+.',
  },
  {
    label: 'Security-Conscious Architecture',
    description: 'Built with threat modeling and defense-in-depth principles.',
  },
  {
    label: 'Human-Centered Design',
    description: 'Tools that empower teams, not replace them.',
  },
];

export default function SocialProof() {
  return (
    <section className={styles.proof}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Why LA Builds</h2>
        <div className={styles.grid}>
          {proofPoints.map((point) => (
            <div key={point.label} className={styles.card}>
              <div className={styles.badge}>✓</div>
              <h3>{point.label}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
