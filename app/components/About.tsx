import styles from './About.module.css';

const principles = [
  { title: 'Practical Over Hype', description: 'I build systems that work, not concepts that sound impressive.' },
  { title: 'Human-Centered AI', description: 'Technology amplifies human capability, not replaces it.' },
  { title: 'Modular Systems', description: 'Flexible, reusable components that adapt to your workflow.' },
  { title: 'Security Conscious', description: 'Defense-first architecture from day one.' },
  { title: 'Open Innovation', description: 'Transparent processes and knowledge sharing.' },
];

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>About LA Builds</h2>
          <p className={styles.bio}>
            LA Builds is an independent AI research and systems engineering studio focused on practical AI infrastructure, workflow automation, adversarial testing, and human-centered tooling.
          </p>
          <p className={styles.bio}>
            I believe technology should reduce friction, not add it. Every system I build is designed to scale, integrate cleanly, and empower your team.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.principles}>
            {principles.map((principle) => (
              <div key={principle.title} className={styles.card}>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
