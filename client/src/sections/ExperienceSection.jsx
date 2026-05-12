import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { content } = useLanguage();
  const { experienceSection, experience } = content;

  return (
    <SectionShell
      id="experiencia"
      eyebrow={experienceSection.eyebrow}
      title={experienceSection.title}
      description={experienceSection.description}
    >
      <div className="experience-timeline">
        {experience.map((item, index) => (
          <article key={`${item.title}-${item.company}`} className="experience-entry">
            <div className="experience-entry-rail" aria-hidden="true">
              <span className="experience-entry-dot" />
            </div>

            <div className="experience-entry-meta">
              <span>{item.period.toUpperCase()}</span>
              <strong>{item.company}</strong>
            </div>

            <div className="experience-card">
              <div className="experience-card-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.duration}</strong>
              </div>

              <div className="experience-header">
                <h3>{item.title}</h3>
                <p className="experience-company">{item.employmentType}</p>
              </div>

              <p className="experience-meta">
                {item.location} · {item.mode}
              </p>

              {item.note ? <p className="experience-note">{item.note}</p> : null}

              {item.bullets.length ? (
                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {item.tech.length ? (
                <div className="experience-tech-list">
                  {item.tech.map((tech) => (
                    <span key={tech} className="experience-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
