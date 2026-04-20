export default function SectionTitle({ eyebrow, title, description = "" }) {
  return (
    <div className="section-title">
      <div className="section-title-row">
        <h2>{title}</h2>
        <p className="section-eyebrow">// {eyebrow}</p>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
