import Container from "../layout/Container";
import SectionTitle from "../common/SectionTitle";

export default function QuestSectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}) {
  return (
    <section id={id} className={`content-section section-shell-wrap ${className}`.trim()}>
      <Container>
        <div className="section-shell">
          <div className="section-shell-header">
            <SectionTitle eyebrow={eyebrow} title={title} description={description} />
            <span className="section-shell-mark" aria-hidden="true" />
          </div>
          <div className="section-shell-body">{children}</div>
        </div>
      </Container>
    </section>
  );
}
