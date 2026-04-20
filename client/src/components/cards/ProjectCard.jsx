import { useLanguage } from "../../context/LanguageContext";

export default function ProjectCard({ project, index = 0 }) {
  const { content } = useLanguage();
  const { projectsSection } = content;
  const projectIndex = String(index + 1).padStart(2, "0");
  const hasDemo = project.demo && project.demo !== "#";
  const hasRepo = project.repo && project.repo !== "#";

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span className="project-index">{projectIndex}</span>
        <span className="project-card-label">system_node</span>
      </div>

      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tech.map((item) => (
          <span key={item} className="project-tech">
            {item}
          </span>
        ))}
      </div>

      <div className="project-links">
        {hasDemo ? (
          <a href={project.demo} className="button small-button" target="_blank" rel="noreferrer">
            {projectsSection.demo}
          </a>
        ) : null}
        {hasRepo ? (
          <a
            href={project.repo}
            className="button button-secondary small-button"
            target="_blank"
            rel="noreferrer"
          >
            {projectsSection.repo}
          </a>
        ) : null}
      </div>
    </article>
  );
}
