import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const languages = [
  { value: "pt", short: "PT", labelKey: "pt" },
  { value: "en", short: "EN", labelKey: "en" }
];

export default function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();
  const { isDarkTheme, toggleTheme } = useTheme();
  const nextThemeLabel = isDarkTheme ? "WHITE" : "BLACK";
  const nextThemeTitle = isDarkTheme ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <div className="language-switcher" aria-label="Language switcher">
      {languages.map((item) => (
        <button
          key={item.value}
          type="button"
          className={`language-button${language === item.value ? " active" : ""}`}
          onClick={() => setLanguage(item.value)}
          aria-pressed={language === item.value}
          aria-label={content.languageSwitcher[item.labelKey]}
          title={content.languageSwitcher[item.labelKey]}
        >
          <span aria-hidden="true">{item.short}</span>
        </button>
      ))}

      <button
        type="button"
        className="language-button theme-toggle"
        onClick={toggleTheme}
        aria-label={nextThemeTitle}
        title={nextThemeTitle}
      >
        <span aria-hidden="true">{nextThemeLabel}</span>
      </button>
    </div>
  );
}
