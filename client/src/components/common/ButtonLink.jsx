import { scrollToSection } from "../../utils/scrollToSection";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel
}) {
  const isSectionLink = href?.startsWith("#");
  const className = variant === "secondary" ? "button button-secondary" : "button";

  function handleClick(event) {
    if (!isSectionLink) {
      return;
    }

    event.preventDefault();
    scrollToSection(href);
  }

  return (
    <a
      href={isSectionLink ? "/" : href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
