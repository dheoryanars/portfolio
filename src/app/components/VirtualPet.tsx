import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

type Mood =
  | "idle"
  | "curious"
  | "happy"
  | "sleepy"
  | "excited"
  | "proud"
  | "surprised"
  | "shy"
  | "thinking";
type CaseStudySignal = {
  slug: string;
  title: string;
  category: string;
  year: string;
  problem: string;
  outcome: string;
} | null;
type ContactLink = {
  label: string;
  href: string;
  hint: string;
};

const PURPLE = "#cc6ef8";
const FG = "#f2f1ec";
const BG = "#0a0a0a";
const CONTACT_LINKS: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dheoryanars/",
    hint: "Professional updates",
  },
  {
    label: "Email",
    href: "mailto:dheoryanputra@gmail.com",
    hint: "Project inquiry",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    hint: "Quick message",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dheeory/",
    hint: "Social contact",
  },
];
const HAPPY_MESSAGES = [
  "Boop received. Mood upgraded to extra cute.",
  "Equinox says hi. Tiny signal received.",
  "I found a loose pixel. I am keeping it.",
  "Dheoryan feeds me clean components.",
  "Tap accepted. Portfolio sparkle restored.",
  "Tiny pet, premium hover states.",
  "I just polished one corner radius.",
  "Equinox charged. I keep the portfolio alive.",
  "Your click has excellent timing.",
  "I guard the purple glow while you browse.",
  "Interaction logged. Cuteness increased by 7 percent.",
  "I am small, but my vibe budget is unlimited.",
];
const CURIOUS_MESSAGES = [
  "I am tracking your cursor very professionally.",
  "I saw that hover. Smooth.",
  "Equinox is inspecting the pixels.",
  "Tiny radar online.",
  "Cursor nearby. Preparing tiny dramatic entrance.",
];
const SURPRISED_MESSAGES = [
  "Whoa. A visitor with taste.",
  "Signal spike detected. I am awake now.",
  "That click had excellent dramatic timing.",
  "New interaction just landed on my tiny dashboard.",
];
const SHY_MESSAGES = [
  "Oh hi. I was just aligning pixels.",
  "You found me. I will act normal.",
  "Tiny companion reporting for portfolio duty.",
];
const SLEEPY_MESSAGES = [
  "Equinox is resting. Wake me with a tap.",
  "Low battery, high style.",
  "I am dreaming in purple pixels.",
  "Quiet mode active. Still adorable.",
];
const CASE_STUDY_MESSAGES: Record<
  string,
  { intro: string; note: string }
> = {
  "kitalabel-bos": {
    intro:
      "Now viewing KitaLabel Business OS. Dheoryan turned scattered orders, pricing, customers, and production status into one B2B admin system.",
    note:
      "Reading note: this case shows AI-assisted delivery and a cleaner workflow replacing spreadsheets plus chat.",
  },
  kitalabel: {
    intro:
      "Now viewing KitaLabel Price Calculator. Dheoryan made custom label pricing easier to understand during sales conversations.",
    note:
      "Reading note: the work replaces manual spreadsheet quoting with a customer-facing web plugin.",
  },
  "readsee-dashboard": {
    intro:
      "Now viewing Read/See Dashboard. Dheoryan designed a full CDP product across onboarding, campaigns, and activation flows.",
    note:
      "Reading note: this case covers a large product system with 700 plus screens and stakeholder-ready prototypes.",
  },
  "cmis-suite": {
    intro:
      "Now viewing CMIS Workflow Improvements. Dheoryan improved the DMS, purchase request, and invoice delivery workflows inside an existing platform.",
    note:
      "Reading note: the case moves approval work from email chains into structured digital flows.",
  },
  sonar: {
    intro:
      "Now viewing SONAR. Dheoryan designed a lightweight email tracking extension and its web presence.",
    note:
      "Reading note: this case focuses on making open, forward, and outreach signals easier to see.",
  },
  "design-system": {
    intro:
      "Now viewing Universal Design System. Dheoryan organized repeated UI patterns into a reusable component foundation.",
    note:
      "Reading note: the design system reduces repeated screen work and keeps Mailtarget and CMIS interfaces consistent.",
  },
  "mailtarget-app": {
    intro:
      "Now viewing Mailtarget App. Dheoryan redesigned a SaaS email platform with a more consistent product system.",
    note:
      "Reading note: this case connects campaign builder, contact management, and automation flows under one UI language.",
  },
  "readsee-website": {
    intro:
      "Now viewing Read/See Website. Dheoryan built a marketing site around Connect, Collect, and Activate.",
    note:
      "Reading note: this case turns the CDP product model into a clearer public-facing story.",
  },
  "mailtarget-web": {
    intro:
      "Now viewing Mailtarget Website. Dheoryan positioned the email API for developer buyers and marketing teams.",
    note:
      "Reading note: this case balances technical API messaging with accessible product communication.",
  },
};
const EXPRESSIVE_MOODS: Mood[] = [
  "happy",
  "excited",
  "proud",
  "surprised",
  "shy",
  "thinking",
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function isSmallViewport() {
  return window.innerWidth < 768;
}

function pickMessage(list: string[], seed: number) {
  return list[Math.abs(seed) % list.length];
}

function firstSentence(text: string) {
  const [sentence] = text.split(/(?<=\.)\s+/);
  return sentence || text;
}

function buildCaseIntro(
  caseStudy: NonNullable<CaseStudySignal>,
  compact = false,
) {
  if (compact) {
    return `Now viewing ${caseStudy.title}. ${firstSentence(caseStudy.outcome)}`;
  }

  const message = CASE_STUDY_MESSAGES[caseStudy.slug]?.intro;

  return (
    message ??
    `Now viewing ${caseStudy.title}. Dheoryan worked on this ${caseStudy.year} ${caseStudy.category} case study.`
  );
}

function buildReadingNote(caseStudy: NonNullable<CaseStudySignal>) {
  const message = CASE_STUDY_MESSAGES[caseStudy.slug]?.note;

  return (
    message ??
    `${caseStudy.title} note: this project connects the original problem to a clearer shipped product outcome.`
  );
}

export default function VirtualPet({
  caseStudy,
}: {
  caseStudy?: CaseStudySignal;
}) {
  const [mood, setMood] = useState<Mood>("idle");
  const [blink, setBlink] = useState(false);
  const [charge, setCharge] = useState(0);
  const [reactionKey, setReactionKey] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileViewport, setMobileViewport] = useState(() => isSmallViewport());
  const lastPointerRef = useRef(Date.now());
  const lastMessageRef = useRef(Date.now());
  const readCaseRef = useRef<Set<string>>(new Set());
  const happyTimerRef = useRef<number | null>(null);
  const messageTimerRef = useRef<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 80, damping: 18, mass: 0.4 });

  useEffect(() => {
    const savedCharge = window.localStorage.getItem("dheory-pet-charge");
    if (savedCharge) setCharge(Number(savedCharge) || 0);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dheory-pet-charge", String(charge));
  }, [charge]);

  useEffect(() => {
    const handleResize = () => setMobileViewport(isSmallViewport());

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speak = useCallback((nextMessage: string, duration = 4200) => {
    setContactOpen(false);
    setMessage(nextMessage);
    lastMessageRef.current = Date.now();

    if (messageTimerRef.current !== null) {
      window.clearTimeout(messageTimerRef.current);
    }
    messageTimerRef.current = window.setTimeout(() => {
      setMessage(null);
    }, duration);
  }, []);

  const react = useCallback(
    (nextMood: Mood, nextMessage?: string, duration = 4200) => {
      setMood(nextMood);
      setReactionKey((value) => value + 1);
      if (nextMessage) speak(nextMessage, duration);
    },
    [speak],
  );

  const openContactHelper = useCallback(() => {
    setContactOpen(true);
    setMessage("Want to contact Dheoryan? Pick a route and I will send you there.");
    setMood("proud");
    setReactionKey((value) => value + 1);
    lastMessageRef.current = Date.now();

    if (messageTimerRef.current !== null) {
      window.clearTimeout(messageTimerRef.current);
    }
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      lastPointerRef.current = Date.now();
      setMood((current) =>
        EXPRESSIVE_MOODS.includes(current) ? current : "curious",
      );
      if (Date.now() - lastMessageRef.current > 11000) {
        speak(
          pickMessage(CURIOUS_MESSAGES, Math.floor(Date.now() / 1000)),
          3200,
        );
      }

      const mobile = isSmallViewport();
      const anchorX = window.innerWidth - (mobile ? 48 : 72);
      const anchorY = window.innerHeight - (mobile ? 48 : 72);
      x.set(clamp((event.clientX - anchorX) * 0.08, -18, 18));
      y.set(clamp((event.clientY - anchorY) * 0.08, -18, 18));
    };

    const pointerInterval = window.setInterval(() => {
      if (Date.now() - lastPointerRef.current > 9000) {
        setMood((current) =>
          EXPRESSIVE_MOODS.includes(current) ? current : "sleepy",
        );
        if (Date.now() - lastMessageRef.current > 18000) {
          speak(
            pickMessage(SLEEPY_MESSAGES, Math.floor(Date.now() / 2200)),
            3600,
          );
        }
        x.set(0);
        y.set(5);
      }
    }, 1200);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearInterval(pointerInterval);
    };
  }, [speak, x, y]);

  useEffect(() => {
    if (!caseStudy) return;

    const mobile = isSmallViewport();

    const timer = window.setTimeout(() => {
      react(
        "proud",
        buildCaseIntro(caseStudy, mobile),
        mobile ? 5000 : 7600,
      );
      x.set(mobile ? -4 : -6);
      y.set(mobile ? -14 : -8);
    }, mobile ? 3200 : 900);

    return () => window.clearTimeout(timer);
  }, [
    caseStudy?.category,
    caseStudy?.slug,
    caseStudy?.title,
    caseStudy?.year,
    react,
    x,
    y,
  ]);

  useEffect(() => {
    if (!caseStudy) return;

    const mobile = isSmallViewport();

    const handleScroll = () => {
      if (readCaseRef.current.has(caseStudy.slug)) return;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      if (progress > (mobile ? 0.42 : 0.28)) {
        readCaseRef.current.add(caseStudy.slug);
        react("thinking", buildReadingNote(caseStudy), mobile ? 5200 : 7200);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    caseStudy?.slug,
    caseStudy?.title,
    react,
  ]);

  useEffect(() => {
    const blinkInterval = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 140);
    }, mood === "sleepy" ? 2200 : 3600);

    return () => window.clearInterval(blinkInterval);
  }, [mood]);

  useEffect(() => {
    return () => {
      if (happyTimerRef.current !== null) {
        window.clearTimeout(happyTimerRef.current);
      }
      if (messageTimerRef.current !== null) {
        window.clearTimeout(messageTimerRef.current);
      }
    };
  }, []);

  const petTone = useMemo(() => {
    if (mood === "excited") return "#f0a7ff";
    if (mood === "happy") return "#d98aff";
    if (mood === "proud") return "#cc6ef8";
    if (mood === "surprised") return "#f2f1ec";
    if (mood === "shy") return "#b986f1";
    if (mood === "thinking") return "#a990ff";
    if (mood === "sleepy") return "#8061a8";
    if (mood === "curious") return PURPLE;
    return "#a86be9";
  }, [mood]);

  const isBlinking = blink && !["surprised", "excited"].includes(mood);
  const eyeHeight =
    mood === "sleepy" || isBlinking
      ? 2
      : mood === "surprised"
        ? 10
        : mood === "excited"
          ? 9
          : mood === "happy" || mood === "proud"
            ? 8
            : 6;
  const eyeWidth = mood === "surprised" ? 9 : mood === "shy" ? 6 : 7;
  const eyeGap = mood === "surprised" ? 9 : 7;
  const chargeLevel = charge % 4;

  const handlePetEnter = () => {
    if (Date.now() - lastMessageRef.current > 3600) {
      react(
        "shy",
        pickMessage(SHY_MESSAGES, Math.floor(Date.now() / 900)),
        2600,
      );
    } else {
      setMood((current) => (current === "sleepy" ? "curious" : current));
    }
  };

  const handlePetLeave = () => {
    if (!message && !contactOpen) setMood("idle");
  };

  const handlePet = () => {
    if (!contactOpen) {
      openContactHelper();
      x.set(-4);
      y.set(-12);
      return;
    }

    const nextCharge = charge + 1;
    setCharge(nextCharge);
    const nextMood: Mood =
      nextCharge % 5 === 0
        ? "surprised"
        : nextCharge % 3 === 0
          ? "excited"
          : "happy";
    const nextMessage =
      nextMood === "surprised"
        ? pickMessage(SURPRISED_MESSAGES, nextCharge)
        : pickMessage(HAPPY_MESSAGES, nextCharge);
    react(nextMood, nextMessage, 4200);
    x.set(-4);
    y.set(-12);

    if (happyTimerRef.current !== null) {
      window.clearTimeout(happyTimerRef.current);
    }
    happyTimerRef.current = window.setTimeout(() => {
      setMood("idle");
      x.set(0);
      y.set(0);
    }, 1800);
  };

  const handleContactSelect = (label: string) => {
    react("excited", `Opening ${label}. Nice choice.`, 2200);
  };

  return (
    <motion.div
      aria-label="Equinox contact helper"
      className="fixed bottom-4 right-4 z-[70] flex size-[64px] items-center justify-center overflow-visible md:bottom-5 md:right-5 md:size-[74px]"
      style={{
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale:
          mood === "excited"
            ? 1.08
            : mood === "happy" || mood === "proud"
              ? 1.05
              : mood === "shy"
                ? 0.98
                : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <AnimatePresence>
        {message && (
          <motion.span
            key={message}
            aria-live="polite"
            className={
              mobileViewport && !contactOpen
                ? "absolute bottom-0 right-[72px] text-left"
                : "absolute bottom-[76px] right-0 text-left md:bottom-[86px]"
            }
            style={{
              width: mobileViewport && !contactOpen
                ? "min(248px, calc(100vw - 72px))"
                : mobileViewport
                ? "min(272px, calc(100vw - 32px))"
                : "min(320px, calc(100vw - 32px))",
              maxWidth: "calc(100vw - 32px)",
              maxHeight: contactOpen
                ? "min(68vh, 520px)"
                : mobileViewport
                  ? "min(32vh, 260px)"
                  : "min(44vh, 360px)",
              border: "1px solid rgba(242,241,236,0.1)",
              borderRadius: 10,
              background:
                "linear-gradient(180deg, rgba(18,18,18,0.9), rgba(10,10,10,0.82))",
              boxShadow:
                "0 18px 48px rgba(0,0,0,0.32), 0 0 34px rgba(204,110,248,0.1)",
              padding: mobileViewport ? "10px 12px" : "12px 14px",
              color: FG,
              fontFamily: "'Space Mono', monospace",
              fontSize: mobileViewport ? 10.5 : 11,
              lineHeight: mobileViewport ? 1.42 : 1.5,
              letterSpacing: 0,
              whiteSpace: "normal",
              overflowY: contactOpen ? "auto" : "visible",
              overflowWrap: "break-word",
              pointerEvents: contactOpen ? "auto" : "none",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="mb-1 block"
              style={{
                color: petTone,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              Equinox
            </span>
            {message}
            {contactOpen && (
              <span className="mt-3 grid gap-2">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    onClick={() => handleContactSelect(link.label)}
                    className="group flex items-center justify-between gap-3"
                    style={{
                      border: "1px solid rgba(242,241,236,0.1)",
                      borderRadius: 8,
                      padding: "9px 10px",
                      background: "rgba(242,241,236,0.035)",
                      color: FG,
                      textDecoration: "none",
                    }}
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                          color: FG,
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        style={{
                          color: "rgba(242,241,236,0.56)",
                          fontSize: 10,
                        }}
                      >
                        {link.hint}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      style={{
                        color: PURPLE,
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 14,
                      }}
                    >
                      ↗
                    </span>
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setContactOpen(false);
                    setMessage(null);
                    setMood("idle");
                  }}
                  style={{
                    border: 0,
                    background: "transparent",
                    color: "rgba(242,241,236,0.55)",
                    cursor: "pointer",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    padding: "4px 0 0",
                    textAlign: "left",
                  }}
                >
                  Close helper
                </button>
              </span>
            )}
            <span
              aria-hidden
              className="absolute -bottom-[6px] right-7 size-3 rotate-45"
              style={{
                borderBottom: "1px solid rgba(242,241,236,0.1)",
                borderRight: "1px solid rgba(242,241,236,0.1)",
                background: "rgba(10,10,10,0.86)",
              }}
            />
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Ask Equinox for contact options"
        onClick={handlePet}
        onPointerEnter={handlePetEnter}
        onPointerLeave={handlePetLeave}
        className="relative flex size-[64px] items-center justify-center overflow-visible md:size-[74px]"
        style={{
          border: "1px solid rgba(242,241,236,0.11)",
          background:
            "linear-gradient(180deg, rgba(18,18,18,0.82), rgba(10,10,10,0.72))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "0 18px 48px rgba(0,0,0,0.34), 0 0 36px rgba(204,110,248,0.12)",
          cursor: "pointer",
          borderRadius: 18,
        }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.94 }}
      >
      <motion.span
        aria-hidden
        className="absolute inset-[-10px]"
        style={{
          borderRadius: 24,
          background: `radial-gradient(circle, ${petTone}24 0%, transparent 58%)`,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: mood === "sleepy" ? 0.28 : [0.44, 0.72, 0.44],
          scale:
            mood === "excited" || mood === "surprised"
              ? [1, 1.22, 1]
              : mood === "happy" || mood === "proud"
                ? [1, 1.14, 1]
                : [1, 1.06, 1],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        aria-hidden
        className="relative flex size-[42px] items-center justify-center md:size-[48px]"
        animate={{
          y: mood === "sleepy" ? [2, 5, 2] : [0, -3, 0],
          rotate:
            mood === "excited"
              ? [-6, 6, -6]
              : mood === "happy"
                ? [-3, 3, -3]
                : mood === "shy"
                  ? -4
                  : 0,
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="absolute inset-0"
          style={{
            borderRadius: mood === "surprised" ? 16 : mood === "proud" ? 10 : 12,
            background: `linear-gradient(135deg, ${petTone}, #4f286c 72%)`,
            boxShadow: `0 0 0 1px rgba(242,241,236,0.12) inset, 0 0 26px ${petTone}55`,
          }}
        />
        <span
          className="absolute inset-[5px]"
          style={{
            borderRadius: 8,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.16), transparent 58%)",
          }}
        />
        <span
          className="relative flex flex-col items-center gap-[7px]"
          style={{
            transform:
              mood === "shy"
                ? "translateY(2px)"
                : mood === "surprised"
                  ? "translateY(1px)"
                  : "none",
          }}
        >
          {(mood === "proud" || mood === "surprised" || mood === "thinking") && (
            <span
              className="flex gap-[7px]"
              style={{
                transform:
                  mood === "thinking" ? "translateY(1px)" : "translateY(0)",
              }}
            >
              {[0, 1].map((brow) => (
                <motion.span
                  key={brow}
                  style={{
                    width: 9,
                    height: 2,
                    borderRadius: 2,
                    background: "rgba(242,241,236,0.66)",
                  }}
                  animate={{
                    rotate:
                      mood === "proud"
                        ? brow === 0
                          ? -12
                          : 12
                        : mood === "thinking"
                          ? brow === 0
                            ? 12
                            : -12
                          : 0,
                  }}
                />
              ))}
            </span>
          )}
          <span className="flex items-center" style={{ gap: eyeGap }}>
          {[0, 1].map((eye) => (
            <motion.span
              key={eye}
              style={{
                width: eyeWidth,
                height: eyeHeight,
                borderRadius: mood === "surprised" ? 8 : 3,
                background: mood === "sleepy" ? "#d6c3e8" : FG,
                boxShadow:
                  mood === "happy" || mood === "excited"
                    ? "0 0 10px rgba(242,241,236,0.75)"
                    : "none",
              }}
              animate={{
                y:
                  mood === "curious" || mood === "thinking"
                    ? eye === 0
                      ? -1
                      : 1
                    : 0,
                scaleY: mood === "excited" ? [1, 0.72, 1] : 1,
              }}
              transition={{ duration: 0.28 }}
            />
          ))}
          </span>
        </span>
      </motion.span>

      <AnimatePresence>
        {["happy", "excited", "proud", "surprised"].includes(mood) &&
          [0, 1, 2, 3].map((spark) => (
            <motion.span
              key={`${reactionKey}-${spark}`}
              aria-hidden
              className="absolute size-[5px]"
              style={{
                left: `${18 + spark * 13}px`,
                top: `${spark % 2 === 0 ? -4 : 2}px`,
                borderRadius: spark % 2 === 0 ? 2 : 999,
                background: petTone,
                boxShadow: `0 0 14px ${petTone}`,
              }}
              initial={{ opacity: 0, y: 10, scale: 0.4, rotate: 0 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-2, -18 - spark * 4],
                x: (spark - 1.5) * 8,
                scale: [0.4, 1, 0.55],
                rotate: 90 + spark * 24,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          ))}
      </AnimatePresence>

      <span
        aria-hidden
        className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 gap-[3px]"
      >
        {[0, 1, 2, 3].map((dot) => (
          <span
            key={dot}
            style={{
              width: 4,
              height: 4,
              borderRadius: 1,
              background:
                dot <= chargeLevel ? petTone : "rgba(242,241,236,0.18)",
              boxShadow:
                dot <= chargeLevel ? `0 0 8px ${petTone}` : "none",
            }}
          />
        ))}
      </span>

      {mood === "happy" && (
        <motion.span
          aria-hidden
          className="absolute -top-2 right-0 size-2"
          style={{
            borderRadius: 2,
            background: petTone,
            boxShadow: `0 0 16px ${petTone}`,
          }}
          initial={{ opacity: 0, y: 8, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], y: -18, scale: [0.5, 1, 0.8] }}
          transition={{ duration: 0.9 }}
        />
      )}
      </motion.button>
    </motion.div>
  );
}
