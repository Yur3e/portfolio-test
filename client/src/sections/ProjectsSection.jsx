import SectionShell from "../components/common/SectionShell";
import ProjectCard from "../components/cards/ProjectCard";
import { useLanguage } from "../context/LanguageContext";

export default function ProjectsSection() {
  const { content } = useLanguage();
  const { projectsSection, projects } = content;

  return (
    <SectionShell
      id="projetos"
      eyebrow={projectsSection.eyebrow}
      title={projectsSection.title}
      description={projectsSection.description}
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
