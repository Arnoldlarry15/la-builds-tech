import styles from './Services.module.css';

const services = [
  {
    title: 'AI Workflow Automation',
    description: 'Automate repetitive tasks using modern AI systems and lightweight integrations. Reduce manual work and scale operations without bloat.',
    icon: '⚙️',
  },
  {
    title: 'Custom AI Tools',
    description: 'Purpose-built internal tools designed around your operations. From chatbots to data processors, tailored for your team.',
    icon: '🔧',
  },
  {
    title: 'AI Red Teaming',
    description: 'Stress-test language models and AI workflows for vulnerabilities and failure modes. Identify risks before they matter.',
    icon: '🛡️',
  },
  {
    title: 'Operational Efficiency Audits',
    description: 'Identify friction, wasted labor, and automation opportunities. Data-driven recommendations for system improvements.',
    icon: '📊',
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
