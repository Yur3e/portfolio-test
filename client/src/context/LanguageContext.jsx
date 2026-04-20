import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { siteContent } from "../content/siteContent";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");

    if (stored === "pt" || stored === "en") {
      setLanguage(stored);
    }
  }, []);

  function handleSetLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage: handleSetLanguage,
      content: siteContent[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider.");
  }

  return context;
}
