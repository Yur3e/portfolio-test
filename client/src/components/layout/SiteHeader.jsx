import Container from "./Container";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";

export default function SiteHeader() {
  const { content } = useLanguage();
  const { profile, about, stacks, experienceSection, contact } = content;
  const navItems = [
    { href: "#sobre", label: about.eyebrow },
    { href: "#stacks", label: stacks.eyebrow },
    { href: "#experiencia", label: experienceSection.eyebrow },
    { href: "#contato", label: contact.eyebrow }
  ];

  return (
    <header className="site-header">
      <Container className="site-header-shell">
        <a href="#topo" className="site-brand" aria-label={profile.name}>
          <img
            src="/brand/yure-logo-mark.png"
            alt=""
            className="site-brand-logo site-brand-logo-dark"
          />
          <img
            src="/brand/yure-logo-light-mark.png"
            alt=""
            className="site-brand-logo site-brand-logo-light"
          />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-nav-link">
              <span>{"//"}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher />
      </Container>
    </header>
  );
}
