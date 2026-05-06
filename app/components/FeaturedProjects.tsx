import styles from './FeaturedProjects.module.css';

const projects = [
  {
    name: 'Red Set ProtoCell',
    summary: 'Advanced molecular simulation framework with AI-powered analysis',
    stack: ['Python', 'React', 'TensorFlow', 'FastAPI'],
    demoUrl: 'https://redset.app',
    githubUrl: 'https://github.com/Arnoldlarry15/red-set-protocell',
  },
  {
    name: 'ARES Dashboard',
    summary: 'Real-time AI system monitoring and optimization platform',
    stack: ['Next.js', 'PostgreSQL', 'WebSocket', 'D3.js'],
    demoUrl: 'https://ares-dashboard.mauve.vercel.app',
    githubUrl: 'https://github.com/Arnoldlarry15/ARES-Dashboard',
  },
  {
    name: 'AI Control Plane',
    summary: 'Centralized orchestration system for multi-model AI workflows',
    stack: ['Go', 'Kubernetes', 'gRPC', 'React'],
    demoUrl: '',
    githubUrl: 'https://github.com/Arnoldlarry15/ai-control-plane',
  },
  {
    name: 'CaptureFlow',
    summary: 'Intelligent data extraction and workflow automation suite',
    stack: ['Python', 'OpenCV', 'LLMs', 'Node.js'],
    demoUrl: '',
    githubUrl: 'https://github.com/Arnoldlarry15/capture-flow',
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
                {project.demoUrl ? (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                ) : (
                  <span className={styles.comingSoon}>Coming Soon</span>
                )}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    GitHub
                  </a>
                ) : (
                  <span className={styles.comingSoon}>Private Repo</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
