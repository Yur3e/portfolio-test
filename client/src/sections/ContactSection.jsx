import { useState } from "react";
import ButtonLink from "../components/common/ButtonLink";
import Container from "../components/layout/Container";
import { useLanguage } from "../context/LanguageContext";

const API_URL = "http://localhost:3001/api/contact";

export default function ContactSection() {
  const { content } = useLanguage();
  const { profile, contact } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || contact.sendError);
      }

      setStatus({ type: "success", text: data.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        text: error.message || contact.genericError
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="content-section contact-section">
      <div className="contact-terminal-shell">
        <Container>
          <div className="contact-terminal-copy">
            <span className="contact-terminal-kicker">system_ready</span>
            <h2 className="contact-terminal-title">
              <span>Initialize</span>
              <span className="contact-terminal-accent">contact.</span>
            </h2>
            <p className="contact-terminal-description">{contact.description}</p>

            <div className="contact-links contact-links-terminal">
              <ButtonLink href={`mailto:${profile.email}`}>{contact.contactButton}</ButtonLink>
              <ButtonLink href={profile.github} variant="secondary" target="_blank" rel="noreferrer">
                {contact.github}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="contact-layout">
          <div className="contact-panel">
            <div className="contact-note-card">
              <span>{profile.title}</span>
              <p>{profile.subtitle}</p>
            </div>

            <div className="contact-detail-list">
              <div className="contact-detail-item">
                <span>{contact.email}</span>
                <strong>{profile.email}</strong>
              </div>

              <div className="contact-detail-item">
                <span>{contact.github}</span>
                <strong>@Yur3e</strong>
              </div>

              <div className="contact-detail-item">
                <span>location</span>
                <strong>{profile.location}</strong>
              </div>
            </div>

            <div className="contact-links">
              <ButtonLink
                href={profile.resume}
                variant="secondary"
                target="_blank"
                rel="noreferrer"
              >
                {contact.resume}
              </ButtonLink>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              {contact.name}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={contact.namePlaceholder}
              />
            </label>

            <label>
              {contact.email}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={contact.emailPlaceholder}
              />
            </label>

            <label>
              {contact.message}
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder={contact.messagePlaceholder}
              />
            </label>

            <button type="submit" className="button submit-button" disabled={isSubmitting}>
              {isSubmitting ? contact.submitting : contact.submit}
            </button>

            {status.text ? (
              <p className={status.type === "success" ? "form-status success" : "form-status error"}>
                {status.text}
              </p>
            ) : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
