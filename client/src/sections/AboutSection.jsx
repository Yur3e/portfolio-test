import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <SectionShell
      id="sobre"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
    >
      <div className="about-grid">
        <div className="content-card about-copy-card">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="profile-summary-card bio-grid-shell">
          <div>
            <p className="summary-card-title">{about.summaryTitle}</p>
            <div className="summary-card-list">
              {about.summaryItems.map((item) => (
                <div key={item.label} className="summary-card-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="focus-panel">
            <p className="summary-card-title">{about.statsTitle}</p>
            {about.stats.map((item) => (
              <div key={item.label} className="focus-row">
                <div className="focus-row-head">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
                <div className="focus-track" aria-hidden="true">
                  <span className="focus-fill" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}
