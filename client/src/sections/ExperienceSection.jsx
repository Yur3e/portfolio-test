import QuestSectionShell from "../components/game/QuestSectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { content } = useLanguage();
  const { experienceSection, experience } = content;

  return (
    <QuestSectionShell
      id="experiencia"
      eyebrow={experienceSection.eyebrow}
      title={experienceSection.title}
      description={experienceSection.description}
    >
      <div className="experience-timeline">
        {experience.map((item, index) => (
          <article key={`${item.title}-${item.company}`} className="experience-log-card">
            <div className="experience-log-rail" aria-hidden="true">
              <span className="experience-log-dot" />
            </div>

            <div className="experience-log-meta">
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
                {item.location} Â· {item.mode}
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
    </QuestSectionShell>
  );
}
