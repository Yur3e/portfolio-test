import Container from "./Container";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToSection } from "../../utils/scrollToSection";

export default function SiteHeader() {
  const { content } = useLanguage();
  const { profile, about, stacks, experienceSection, contact } = content;
  const navItems = [
    { href: "#sobre", label: about.eyebrow },
    { href: "#stacks", label: stacks.eyebrow },
    { href: "#experiencia", label: experienceSection.eyebrow },
    { href: "#contato", label: contact.eyebrow }
  ];

  function handleSectionClick(event, href) {
    event.preventDefault();
    scrollToSection(href);
  }

  return (
    <header className="site-header">
      <Container className="site-header-shell">
        <a
          href="/"
          className="site-brand"
          aria-label={profile.name}
          onClick={(event) => handleSectionClick(event, "#topo")}
        >
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
            <a
              key={item.href}
              href="/"
              className="site-nav-link"
              onClick={(event) => handleSectionClick(event, item.href)}
            >
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
