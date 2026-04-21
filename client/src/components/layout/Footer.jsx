import Container from "./Container";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { content } = useLanguage();
  const { profile } = content;

  return (
    <footer className="site-footer">
      <Container className="site-footer-shell">
        <p>{`${profile.location} // v2.0.0 [stable]`}</p>
      </Container>
    </footer>
  );
}
