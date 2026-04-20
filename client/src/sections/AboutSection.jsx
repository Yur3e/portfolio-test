import QuestSectionShell from "../components/game/QuestSectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <QuestSectionShell
      id="sobre"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
    >
      <div className="about-quest-grid">
        <div className="content-card about-copy-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="codex-card bio-grid-shell">
          <div>
            <p className="codex-card-title">{about.codexTitle}</p>
            <div className="codex-card-list">
              {about.codexItems.map((item) => (
                <div key={item.label} className="codex-card-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="attribute-panel">
            <p className="codex-card-title">{about.statsTitle}</p>
            {about.stats.map((item) => (
              <div key={item.label} className="attribute-row">
                <div className="attribute-row-head">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <div className="attribute-track" aria-hidden="true">
                  <span className="attribute-fill" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </QuestSectionShell>
  );
}
