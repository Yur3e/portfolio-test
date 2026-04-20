import Container from "../components/layout/Container";
import ButtonLink from "../components/common/ButtonLink";
import { useLanguage } from "../context/LanguageContext";
import { stacks } from "../data/stacks";

export default function HeroSection() {
  const { content } = useLanguage();
  const { profile, hero, contact, projects, experience } = content;
  const metrics = [
    { value: String(projects.length).padStart(2, "0"), label: "active_projects" },
    { value: String(experience.length).padStart(2, "0"), label: "career_logs" },
    { value: String(stacks.length).padStart(2, "0"), label: "stack_items" },
    { value: "PT/EN", label: "language_mode" }
  ];

  return (
    <section id="topo" className="hero-section">
      <Container className="hero-grid">
        <div className="hero-surface">
          <div className="hero-frame hero-frame-top">
            <span>{`COORD: ${profile.location.toUpperCase()}`}</span>
            <span>{`STATUS: ${hero.available.toUpperCase()}`}</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-kicker">system_status: online</p>
              <h1 className="hero-title">
                <span>Building</span>
                <span className="hero-title-accent">resilient software.</span>
              </h1>
              <p className="hero-role">{profile.title}</p>
              <p className="hero-text hero-text-lead">{hero.lead}</p>
              <p className="hero-text">{profile.subtitle}</p>

              <div className="hero-actions">
                <ButtonLink href={profile.linkedin} target="_blank" rel="noreferrer">
                  {hero.linkedin}
                </ButtonLink>
                <ButtonLink href="#experiencia" variant="secondary">
                  Logs
                </ButtonLink>
              </div>

              <div className="hero-tag-row" aria-label={hero.pillarsLabel}>
                {hero.pillars.map((item) => (
                  <span key={item} className="hero-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-metrics-shell">
              <div className="hero-metrics-grid" aria-label={hero.sheetTitle}>
                {metrics.map((item) => (
                  <article key={item.label} className="hero-metric-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>

              <div className="hero-inline-panel">
                <span>{contact.github}</span>
                <strong>@Yur3e</strong>
              </div>
            </div>
          </div>

          <div className="hero-watermark" aria-hidden="true">
            YURE
          </div>

          <div className="hero-frame hero-frame-bottom">
            <span>transmission_from: joao_pessoa_brazil</span>
            <a href={`mailto:${profile.email}`} className="hero-inline-link">
              {profile.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
