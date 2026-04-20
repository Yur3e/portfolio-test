import { useState } from "react";
import IntroOverlay from "./components/IntroOverlay";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem("portfolio-intro-seen") !== "true";
  });

  function handleIntroComplete() {
    window.localStorage.setItem("portfolio-intro-seen", "true");
    setShowIntro(false);
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        {showIntro ? <IntroOverlay onComplete={handleIntroComplete} /> : <Home />}
      </LanguageProvider>
    </ThemeProvider>
  );
}
