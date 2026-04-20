export default function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel
}) {
  const className = variant === "secondary" ? "button button-secondary" : "button";

  return (
    <a href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
}
