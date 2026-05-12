import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";
const STACK_BALANCE = [
  { label: "backend", value: 84 },
  { label: "data", value: 82 },
  { label: "database", value: 78 },
  { label: "frontend", value: 76 },
  { label: "devops", value: 72 }
];

function polarPoint(index, total, radius, center = 160) {
  const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / total;

  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius
  };
}

function polygonPoints(radius) {
  return STACK_BALANCE.map((_, index) => {
    const point = polarPoint(index, STACK_BALANCE.length, radius);

    return `${point.x},${point.y}`;
  }).join(" ");
}

function balancePoints() {
  return STACK_BALANCE.map((item, index) => {
    const point = polarPoint(index, STACK_BALANCE.length, item.value * 1.05);

    return `${point.x},${point.y}`;
  }).join(" ");
}

function TechNodeIcon({ kind }) {
  const commonProps = {
    className: "tech-node-icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  if (kind === "backend") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.8v2.1M12 19.1v2.1M21.2 12h-2.1M4.9 12H2.8M18.5 5.5l-1.5 1.5M7 17l-1.5 1.5M18.5 18.5 17 17M7 7 5.5 5.5" />
        <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
      </svg>
    );
  }

  if (kind === "data") {
    return (
      <svg {...commonProps}>
        <path d="M4 19.5V4.5" />
        <path d="M4 19.5h16" />
        <path d="m7 15 3.2-3.6 3 2.4L19 7" />
        <path d="M7 15h.1M10.2 11.4h.1M13.2 13.8h.1M19 7h.1" />
      </svg>
    );
  }

  if (kind === "frontend") {
    return (
      <svg {...commonProps}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    );
  }

  if (kind === "database") {
    return (
      <svg {...commonProps}>
        <ellipse cx="12" cy="6.2" rx="6.6" ry="2.9" />
        <path d="M5.4 6.2v5.8c0 1.6 3 2.9 6.6 2.9s6.6-1.3 6.6-2.9V6.2" />
        <path d="M5.4 12v5.8c0 1.6 3 2.9 6.6 2.9s6.6-1.3 6.6-2.9V12" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 3.2 18.4 5.4v5.7c0 4.2-2.7 7.5-6.4 9.7-3.7-2.2-6.4-5.5-6.4-9.7V5.4L12 3.2Z" />
    </svg>
  );
}

export default function StacksSection() {
  const { content } = useLanguage();
  const { stacks: stacksContent } = content;
  const groups = stacksContent.groups;

  return (
    <SectionShell
      id="stacks"
      eyebrow={stacksContent.eyebrow}
      title={stacksContent.title}
      description={stacksContent.description}
    >
      <div className="tech-core-layout">
        <div className="stack-summary-card tech-visual-panel">
          <div className="tech-radar" aria-hidden="true">
            <svg viewBox="0 0 320 320" className="tech-radar-svg">
              <polygon points={polygonPoints(130)} className="tech-radar-grid tech-radar-grid-outer" />
              <polygon points={polygonPoints(92)} className="tech-radar-grid" />
              <polygon points={polygonPoints(54)} className="tech-radar-grid" />

              {STACK_BALANCE.map((item, index) => {
                const outerPoint = polarPoint(index, STACK_BALANCE.length, 130);
                const labelPoint = polarPoint(index, STACK_BALANCE.length, 150);

                return (
                  <g key={item.label}>
                    <line
                      x1="160"
                      y1="160"
                      x2={outerPoint.x}
                      y2={outerPoint.y}
                      className="tech-radar-axis-line"
                    />
                    <text
                      x={labelPoint.x}
                      y={labelPoint.y}
                      className="tech-radar-label"
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {item.label}
                    </text>
                  </g>
                );
              })}

              <polygon points={balancePoints()} className="tech-radar-shape-fill" />
              <polygon points={balancePoints()} className="tech-radar-shape-stroke" />
            </svg>
          </div>
          <p className="stack-summary-title">{stacksContent.summaryTitle}</p>
        </div>

        <div className="tech-node-grid">
          {groups.map((group) => (
            <article key={group.id} className="stack-group-card tech-node-card">
              <div className="tech-node-head">
                <TechNodeIcon kind={group.id} />
                <p className="tech-node-title">{group.title}</p>
              </div>
              <div className="tech-node-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
