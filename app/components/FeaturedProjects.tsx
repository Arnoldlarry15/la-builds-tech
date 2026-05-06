import styles from './FeaturedProjects.module.css';

const projects = [
  {
    name: 'Red Set ProtoCell',
    summary: 'Advanced molecular simulation framework with AI-powered analysis',
    stack: ['Python', 'React', 'TensorFlow', 'FastAPI'],
  },
  {
    name: 'ARES Dashboard',
    summary: 'Real-time AI system monitoring and optimization platform',
    stack: ['Next.js', 'PostgreSQL', 'WebSocket', 'D3.js'],
  },
  {
    name: 'AI Control Plane',
    summary: 'Centralized orchestration system for multi-model AI workflows',
    stack: ['Go', 'Kubernetes', 'gRPC', 'React'],
  },
  {
    name: 'CaptureFlow',
    summary: 'Intelligent data extraction and workflow automation suite',
    stack: ['Python', 'OpenCV', 'LLMs', 'Node.js'],
  },
];

export default function FeaturedProjects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.name} className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{project.name}</h3>
                <p className={styles.summary}>{project.summary}</p>
                <div className={styles.stack}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.actions}>
                <button className="btn btn-secondary" disabled>
                  Live Demo
                </button>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
