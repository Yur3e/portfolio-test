import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const FULL_NAME = "YURE FERNANDES";
const SCROLL_THRESHOLD = 420;

export default function IntroOverlay({ onComplete }) {
  const { content } = useLanguage();
  const { intro } = content;
  const [typedName, setTypedName] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [touchStartY, setTouchStartY] = useState(null);

  useEffect(() => {
    let index = 0;

    const typingTimer = window.setInterval(() => {
      index += 1;
      setTypedName(FULL_NAME.slice(0, index));

      if (index >= FULL_NAME.length) {
        window.clearInterval(typingTimer);
      }
    }, 95);

    return () => {
      window.clearInterval(typingTimer);
    };
  }, []);

  useEffect(() => {
    if (typedName.length !== FULL_NAME.length || isLeaving) {
      return undefined;
    }

    function finishIntro() {
      setIsLeaving(true);
      window.setTimeout(() => {
        onComplete();
      }, 650);
    }

    function increaseProgress(delta) {
      if (delta <= 0) {
        return;
      }

      setScrollProgress((current) => {
        const next = Math.min(current + delta, SCROLL_THRESHOLD);

        if (next >= SCROLL_THRESHOLD && current < SCROLL_THRESHOLD) {
          finishIntro();
        }

        return next;
      });
    }

    function handleWheel(event) {
      increaseProgress(event.deltaY);
    }

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [typedName, isLeaving, onComplete]);

  function handleTouchStart(event) {
    setTouchStartY(event.touches[0]?.clientY ?? null);
  }

  function handleTouchMove(event) {
    if (touchStartY === null || typedName.length !== FULL_NAME.length || isLeaving) {
      return;
    }

    const currentY = event.touches[0]?.clientY ?? touchStartY;
    const delta = touchStartY - currentY;

    if (delta > 0) {
      setScrollProgress((current) => {
        const next = Math.min(current + delta, SCROLL_THRESHOLD);

        if (next >= SCROLL_THRESHOLD && current < SCROLL_THRESHOLD) {
          setIsLeaving(true);
          window.setTimeout(() => {
            onComplete();
          }, 650);
        }

        return next;
      });
    }

    setTouchStartY(currentY);
  }

  function handleTouchEnd() {
    setTouchStartY(null);
  }

  const progressPercent = Math.round((scrollProgress / SCROLL_THRESHOLD) * 100);
  const isReady = typedName.length === FULL_NAME.length;

  return (
    <div
      className={`intro-overlay${isLeaving ? " intro-overlay-leaving" : ""}`}
      role="presentation"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="intro-background">
        <span className="intro-orb intro-orb-1" />
        <span className="intro-orb intro-orb-2" />
        <span className="intro-orb intro-orb-3" />
      </div>

      <div className="intro-overlay-inner">
        <div className="scroll-mouse intro-mouse" aria-hidden="true">
          <span className="scroll-wheel" />
        </div>

        <p className="intro-kicker">{isReady ? intro.ready : intro.loading}</p>

        <h1 className="intro-name">
          {typedName}
          <span className="typing-cursor" />
        </h1>

        <p className="intro-helper">{isReady ? intro.helperReady : intro.helperLoading}</p>

        <div className="intro-progress-track" aria-hidden="true">
          <div className="intro-progress-fill" style={{ width: `${progressPercent}%` }} />
        </div>

        <span className="intro-progress-text">
          {isReady ? `${progressPercent}%` : intro.wait}
        </span>
      </div>
    </div>
  );
}
