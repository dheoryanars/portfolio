import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  ChevronRight,
  Compass,
  Contact,
  Home,
  Mail,
  MessageCircleQuestion,
  Minimize2,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";

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

export type EquinoxCaseStudy = {
  slug: string;
  title: string;
  category: string;
  year: string;
  problem: string;
  outcome: string;
};

type ContactLink = {
  label: string;
  href: string;
  hint: string;
};

type GuideView = "guide" | "ask" | "contact";

type Question = {
  id: string;
  label: string;
  answer: string;
  mood: Mood;
};

const PURPLE = "#cc6ef8";
const FG = "#f2f1ec";
const PANEL_BG =
  "linear-gradient(145deg, rgba(31,22,37,0.94) 0%, rgba(7,7,10,0.95) 46%, rgba(14,9,18,0.94) 100%)";
const READING_SURFACE = "rgba(4,4,7,0.54)";
const MUTED = "rgba(242,241,236,0.72)";

const CONTACT_LINKS: ContactLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dheoryanars/",
    hint: "Professional profile",
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
    hint: "Social profile",
  },
];

const HAPPY_MESSAGES = [
  "Boop received. Energy restored.",
  "Tiny signal received. Excellent timing.",
  "I found a loose pixel. I am keeping it.",
  "Dheoryan feeds me clean components.",
  "Portfolio sparkle restored.",
  "Tiny pet, premium hover states.",
  "I just polished one corner radius.",
  "I guard the purple glow while you browse.",
];

const CURIOUS_MESSAGES = [
  "I am following the cursor very professionally.",
  "I saw that hover. Smooth.",
  "Tiny radar online.",
  "I can explain this page whenever you need me.",
];

const SLEEPY_MESSAGES = [
  "Quiet shift. Tap me when you need a guide.",
  "Low activity, high style.",
  "I am dreaming in purple pixels.",
];

const PETTING_MESSAGES = [
  "Oh. Premium cursor scratches.",
  "Tiny head pats detected. I approve.",
  "Okay, okay. My pixels are blushing.",
  "You found the premium petting zone.",
  "Prrr... that is probably just my cooling fan.",
  "That was a very good digital head pat.",
];

const CASE_STUDY_MESSAGES: Record<string, { intro: string; note: string }> = {
  "kitalabel-bos": {
    intro:
      "This is KitaLabel Business OS: one operating surface for orders, pricing, customers, and production.",
    note:
      "The key move was replacing daily tool-switching with one shared operational view.",
  },
  kitalabel: {
    intro:
      "This is the KitaLabel Price Calculator: standard label quotes without waiting in the estimator queue.",
    note:
      "The guided flow turns production variables into a price customers can understand before checkout.",
  },
  "readsee-dashboard": {
    intro:
      "This is Read/See: a CDP product scaled across onboarding, campaigns, and activation with one pattern system.",
    note:
      "The system carried more than 700 screens, so each new module did not restart the design process.",
  },
  "cmis-suite": {
    intro:
      "This is CMIS Workflow Improvements: focused work across DMS Phase 2, Purchase Request, and Invoice Delivery.",
    note:
      "The work improves workflows people already relied on instead of presenting CMIS as a new product.",
  },
  sonar: {
    intro:
      "This is SONAR: a deliberately small email tracker built around one job - visibility after send.",
    note:
      "The design stayed useful by refusing the weight of a full email platform.",
  },
  "design-system": {
    intro:
      "This is the Universal Design System: reusable decisions for foundations, components, and product patterns.",
    note:
      "The value is not a component count. It is fewer repeated decisions across real product work.",
  },
  "mailtarget-app": {
    intro:
      "This is Mailtarget App: one working language across campaign builder, contacts, and automation.",
    note:
      "The redesign reduces relearning when users move between core email workflows.",
  },
};

const CASE_ROLES: Record<string, string> = {
  "kitalabel-bos":
    "Dheoryan shaped the product and interface, then used AI-assisted development to help deliver the working internal system.",
  kitalabel:
    "Dheoryan designed the pricing experience and translated label-production rules into a guided customer flow.",
  "readsee-dashboard":
    "Dheoryan owned the design side within the Read/See team, from reusable patterns to stakeholder-ready prototypes.",
  "cmis-suite":
    "Dheoryan improved three existing CMIS workflows as part of the project team: DMS, Purchase Request, and Invoice Delivery.",
  "design-system":
    "Dheoryan owned the design foundation and reusable component language used across multiple products.",
  "mailtarget-app":
    "Dheoryan owned the product-design work within the Mailtarget team and connected the application to its public story.",
  sonar:
    "Dheoryan designed the extension and its web presence, keeping the experience focused on a deliberately narrow job.",
};

const HOME_QUESTIONS: Question[] = [
  {
    id: "specialty",
    label: "What does Dheoryan specialize in?",
    answer:
      "Dheoryan is a product designer based in Bekasi, focused on SaaS platforms, operational tools, scalable design systems, and AI-assisted product delivery.",
    mood: "proud",
  },
  {
    id: "recruiter",
    label: "Give me the recruiter version",
    answer:
      "Dheoryan turns dense workflows into clear product interfaces. His work spans zero-to-one SaaS, enterprise workflow improvements, design systems, and products he helped carry into working software.",
    mood: "proud",
  },
  {
    id: "equinox",
    label: "Who are you?",
    answer:
      "I am Equinox, Dheoryan's virtual portfolio companion. I remember what you explore, explain the work in plain language, and help you find the right route to contact him.",
    mood: "happy",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function isSmallViewport() {
  return typeof window !== "undefined" && window.innerWidth < 768;
}

function pickMessage(list: string[], seed: number) {
  return list[Math.abs(seed) % list.length];
}

function readBoolean(key: string) {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(key) === "true";
}

function readSeenCases() {
  if (typeof window === "undefined") return new Set<string>();
  try {
    const saved = JSON.parse(
      window.localStorage.getItem("dheory-equinox-seen-cases") || "[]",
    );
    return new Set<string>(Array.isArray(saved) ? saved : []);
  } catch {
    return new Set<string>();
  }
}

function caseQuestions(caseStudy: EquinoxCaseStudy): Question[] {
  return [
    {
      id: "summary",
      label: "Give me the short version",
      answer:
        CASE_STUDY_MESSAGES[caseStudy.slug]?.intro ??
        `${caseStudy.title} is a ${caseStudy.year} ${caseStudy.category} case study.`,
      mood: "proud",
    },
    {
      id: "problem",
      label: "What problem was being solved?",
      answer: caseStudy.problem,
      mood: "thinking",
    },
    {
      id: "outcome",
      label: "What changed after the work?",
      answer: caseStudy.outcome,
      mood: "excited",
    },
    {
      id: "role",
      label: "What was Dheoryan's role?",
      answer:
        CASE_ROLES[caseStudy.slug] ??
        `Dheoryan contributed product-design decisions across this ${caseStudy.category} project.`,
      mood: "proud",
    },
  ];
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex size-10 items-center justify-center"
      style={{
        border: "1px solid rgba(242,241,236,0.14)",
        borderRadius: 8,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
        boxShadow: "0 8px 20px rgba(0,0,0,0.16), inset 0 1px rgba(255,255,255,0.055)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        color: FG,
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

function ActionRow({
  icon,
  title,
  detail,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 text-left"
      style={{
        minHeight: 58,
        border: 0,
        borderTop: "1px solid rgba(242,241,236,0.08)",
        background: "transparent",
        color: FG,
        cursor: "pointer",
        padding: "10px 2px",
      }}
    >
      <span
        className="flex size-9 shrink-0 items-center justify-center"
        style={{
          borderRadius: 8,
          background: "rgba(204,110,248,0.1)",
          color: PURPLE,
        }}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className="block"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {title}
        </span>
        <span
          className="mt-0.5 block"
          style={{
            color: MUTED,
            fontFamily: "'Space Mono', monospace",
            fontSize: 9.5,
            lineHeight: 1.4,
          }}
        >
          {detail}
        </span>
      </span>
      <ChevronRight
        aria-hidden
        size={16}
        style={{ color: "rgba(242,241,236,0.36)" }}
      />
    </button>
  );
}

export default function VirtualPet({
  caseStudy,
  portfolioCases = [],
  onNavigate,
  onHome,
}: {
  caseStudy?: EquinoxCaseStudy | null;
  portfolioCases?: EquinoxCaseStudy[];
  onNavigate?: (slug: string) => void;
  onHome?: () => void;
}) {
  const reduceMotion = useReducedMotion();
  const [mood, setMood] = useState<Mood>("idle");
  const [blink, setBlink] = useState(false);
  const [isPetting, setIsPetting] = useState(false);
  const [energy, setEnergy] = useState(72);
  const [reactionKey, setReactionKey] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [response, setResponse] = useState(
    "I can explain the work, recommend a case, or help you contact Dheoryan.",
  );
  const [questionInput, setQuestionInput] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelView, setPanelView] = useState<GuideView>("guide");
  const [muted, setMuted] = useState(() =>
    readBoolean("dheory-equinox-muted"),
  );
  const [minimized, setMinimized] = useState(() =>
    readBoolean("dheory-equinox-minimized"),
  );
  const [mobileViewport, setMobileViewport] = useState(() =>
    isSmallViewport(),
  );
  const [seenCases, setSeenCases] = useState<Set<string>>(() =>
    readSeenCases(),
  );
  const [visitCount, setVisitCount] = useState(1);
  const [recommendedCase, setRecommendedCase] =
    useState<EquinoxCaseStudy | null>(null);

  const lastPointerRef = useRef(Date.now());
  const lastMessageRef = useRef(Date.now());
  const readCaseRef = useRef<Set<string>>(new Set());
  const messageTimerRef = useRef<number | null>(null);
  const moodTimerRef = useRef<number | null>(null);
  const pettingTimerRef = useRef<number | null>(null);
  const pettingPathRef = useRef({
    lastX: 0,
    lastY: 0,
    lastAngle: null as number | null,
    lastAt: 0,
    angleTravel: 0,
    distance: 0,
    cooldownUntil: 0,
  });
  const panelOpenRef = useRef(panelOpen);
  const mutedRef = useRef(muted);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 82, damping: 19, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 82, damping: 19, mass: 0.4 });

  useEffect(() => {
    panelOpenRef.current = panelOpen;
  }, [panelOpen]);

  useEffect(() => {
    mutedRef.current = muted;
    window.localStorage.setItem("dheory-equinox-muted", String(muted));
    if (muted) setMessage(null);
  }, [muted]);

  useEffect(() => {
    window.localStorage.setItem(
      "dheory-equinox-minimized",
      String(minimized),
    );
  }, [minimized]);

  useEffect(() => {
    const savedEnergy = Number(
      window.localStorage.getItem("dheory-equinox-energy"),
    );
    if (Number.isFinite(savedEnergy) && savedEnergy > 0) {
      setEnergy(clamp(savedEnergy, 4, 100));
    }

    const sessionKey = "dheory-equinox-session-counted";
    const previousVisits = Number(
      window.localStorage.getItem("dheory-equinox-visits") || "0",
    );
    const nextVisits = window.sessionStorage.getItem(sessionKey)
      ? Math.max(previousVisits, 1)
      : previousVisits + 1;
    window.sessionStorage.setItem(sessionKey, "true");
    window.localStorage.setItem("dheory-equinox-visits", String(nextVisits));
    window.localStorage.setItem(
      "dheory-equinox-last-seen",
      new Date().toISOString(),
    );
    setVisitCount(nextVisits);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dheory-equinox-energy", String(energy));
  }, [energy]);

  useEffect(() => {
    window.localStorage.setItem(
      "dheory-equinox-seen-cases",
      JSON.stringify(Array.from(seenCases)),
    );
  }, [seenCases]);

  useEffect(() => {
    const handleResize = () => setMobileViewport(isSmallViewport());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const speak = useCallback(
    (nextMessage: string, nextMood: Mood, duration = 4200, manual = false) => {
      if (mutedRef.current && !manual) return;
      setMood(nextMood);
      if (manual || panelOpenRef.current) {
        setResponse(nextMessage);
      }
      setReactionKey((value) => value + 1);
      lastMessageRef.current = Date.now();

      if (!panelOpenRef.current) {
        setMessage(nextMessage);
        if (messageTimerRef.current !== null) {
          window.clearTimeout(messageTimerRef.current);
        }
        messageTimerRef.current = window.setTimeout(() => {
          setMessage(null);
        }, duration);
      }
    },
    [],
  );

  const settleMood = useCallback((delay = 1800) => {
    if (moodTimerRef.current !== null) {
      window.clearTimeout(moodTimerRef.current);
    }
    moodTimerRef.current = window.setTimeout(() => setMood("idle"), delay);
  }, []);

  const openPanel = useCallback((view: GuideView = "guide") => {
    setPanelView(view);
    setPanelOpen(true);
    setMessage(null);
    setMinimized(false);
    setMood("curious");
  }, []);

  const closePanel = useCallback(() => {
    setPanelOpen(false);
    setPanelView("guide");
    setMood("idle");
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && panelOpen) closePanel();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePanel, panelOpen]);

  useEffect(() => {
    if (reduceMotion || minimized) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      lastPointerRef.current = Date.now();
      if (!panelOpenRef.current) {
        setMood((current) =>
          ["idle", "sleepy"].includes(current) ? "curious" : current,
        );
      }

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const mobile = isSmallViewport();
        const anchorX = window.innerWidth - (mobile ? 44 : 62);
        const anchorY = window.innerHeight - (mobile ? 44 : 62);
        x.set(clamp((event.clientX - anchorX) * 0.06, -14, 14));
        y.set(clamp((event.clientY - anchorY) * 0.06, -14, 14));
      });

      if (
        !panelOpenRef.current &&
        Date.now() - lastMessageRef.current > 30000
      ) {
        speak(
          pickMessage(CURIOUS_MESSAGES, Math.floor(Date.now() / 2000)),
          "curious",
          3200,
        );
      }
    };

    const idleInterval = window.setInterval(() => {
      if (Date.now() - lastPointerRef.current > 30000) {
        setMood((current) =>
          ["idle", "curious"].includes(current) ? "sleepy" : current,
        );
        setEnergy((current) => clamp(current - 1, 4, 100));
        x.set(0);
        y.set(4);
        if (
          !panelOpenRef.current &&
          Date.now() - lastMessageRef.current > 52000
        ) {
          speak(
            pickMessage(SLEEPY_MESSAGES, Math.floor(Date.now() / 3000)),
            "sleepy",
            3400,
          );
        }
      }
    }, 60000);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.clearInterval(idleInterval);
    };
  }, [minimized, reduceMotion, speak, x, y]);

  useEffect(() => {
    if (!caseStudy) {
      setResponse(
        visitCount > 1
          ? `Welcome back. I remember ${seenCases.size} project${seenCases.size === 1 ? "" : "s"} from your visits.`
          : "I can explain the work, recommend a case, or help you contact Dheoryan.",
      );
      return;
    }

    setSeenCases((current) => {
      const next = new Set(current);
      next.add(caseStudy.slug);
      return next;
    });

    const intro =
      CASE_STUDY_MESSAGES[caseStudy.slug]?.intro ??
      `Now viewing ${caseStudy.title}.`;
    setResponse(intro);
    const timer = window.setTimeout(
      () => speak(intro, "proud", mobileViewport ? 5000 : 6800),
      mobileViewport ? 2600 : 900,
    );
    return () => window.clearTimeout(timer);
  }, [caseStudy?.slug, mobileViewport, speak, visitCount]);

  useEffect(() => {
    if (!caseStudy) return;
    const handleScroll = () => {
      if (readCaseRef.current.has(caseStudy.slug)) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      if (progress > (mobileViewport ? 0.46 : 0.3)) {
        readCaseRef.current.add(caseStudy.slug);
        const note =
          CASE_STUDY_MESSAGES[caseStudy.slug]?.note ?? caseStudy.outcome;
        speak(note, "thinking", mobileViewport ? 4800 : 6200);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [caseStudy?.slug, mobileViewport, speak]);

  useEffect(() => {
    if (reduceMotion) return;
    const blinkInterval = window.setInterval(() => {
      setBlink(true);
      window.setTimeout(() => setBlink(false), 140);
    }, mood === "sleepy" ? 2400 : 3800);
    return () => window.clearInterval(blinkInterval);
  }, [mood, reduceMotion]);

  useEffect(() => {
    return () => {
      if (messageTimerRef.current !== null) {
        window.clearTimeout(messageTimerRef.current);
      }
      if (moodTimerRef.current !== null) {
        window.clearTimeout(moodTimerRef.current);
      }
      if (pettingTimerRef.current !== null) {
        window.clearTimeout(pettingTimerRef.current);
      }
    };
  }, []);

  const questions = useMemo(
    () => (caseStudy ? caseQuestions(caseStudy) : HOME_QUESTIONS),
    [caseStudy],
  );

  const suggestedCases = useMemo(() => {
    const unread = portfolioCases.filter(
      (item) => item.slug !== caseStudy?.slug && !seenCases.has(item.slug),
    );
    const fallback = portfolioCases.filter(
      (item) => item.slug !== caseStudy?.slug,
    );
    return (unread.length ? unread : fallback).slice(0, 3);
  }, [caseStudy?.slug, portfolioCases, seenCases]);

  const petTone = useMemo(() => {
    if (mood === "excited") return "#f0a7ff";
    if (mood === "happy") return "#d98aff";
    if (mood === "proud") return PURPLE;
    if (mood === "surprised") return FG;
    if (mood === "shy") return "#b986f1";
    if (mood === "thinking") return "#a990ff";
    if (mood === "sleepy") return "#8061a8";
    return "#a86be9";
  }, [mood]);

  const activityLabel =
    mood === "sleepy"
      ? "Resting"
      : panelOpen
        ? "Guide online"
        : caseStudy
          ? "Reading with you"
          : "Tiny radar online";

  const handleQuestion = (question: Question) => {
    speak(question.answer, question.mood, 7000, true);
    setResponse(question.answer);
  };

  const recommendProject = () => {
    const next = suggestedCases[0] ?? portfolioCases[0] ?? null;
    if (!next) {
      speak("You have already explored every available project.", "proud", 5000, true);
      return;
    }
    setRecommendedCase(next);
    speak(
      `Try ${next.title} next. It adds a different view of Dheoryan's ${next.category.toLowerCase()} work.`,
      "excited",
      6500,
      true,
    );
  };

  const handleTypedQuestion = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = questionInput.trim().toLowerCase();
    if (!query) return;

    let answer =
      "I can answer about the problem, outcome, Dheoryan's role, his specialties, project recommendations, or contact routes.";
    let nextMood: Mood = "thinking";

    if (query.includes("contact") || query.includes("email") || query.includes("hire")) {
      setQuestionInput("");
      setResponse("Here are the direct routes to Dheoryan.");
      setMood("excited");
      setPanelView("contact");
      return;
    }

    if (
      query.includes("recommend") ||
      query.includes("which project") ||
      query.includes("what project")
    ) {
      setQuestionInput("");
      recommendProject();
      setPanelView("guide");
      return;
    }

    if (caseStudy) {
      if (
        query.includes("problem") ||
        query.includes("challenge") ||
        query.includes("before")
      ) {
        answer = caseStudy.problem;
      } else if (
        query.includes("outcome") ||
        query.includes("result") ||
        query.includes("impact") ||
        query.includes("after")
      ) {
        answer = caseStudy.outcome;
        nextMood = "excited";
      } else if (
        query.includes("role") ||
        query.includes("contribution") ||
        query.includes("responsible")
      ) {
        answer =
          CASE_ROLES[caseStudy.slug] ??
          `Dheoryan contributed product-design decisions across this ${caseStudy.category} project.`;
        nextMood = "proud";
      } else if (
        query.includes("summary") ||
        query.includes("short") ||
        query.includes("what is") ||
        query.includes("explain")
      ) {
        answer =
          CASE_STUDY_MESSAGES[caseStudy.slug]?.intro ??
          `${caseStudy.title} is a ${caseStudy.year} ${caseStudy.category} case study.`;
        nextMood = "proud";
      }
    } else if (
      query.includes("special") ||
      query.includes("skill") ||
      query.includes("experience") ||
      query.includes("designer")
    ) {
      answer = HOME_QUESTIONS[0].answer;
      nextMood = "proud";
    } else if (
      query.includes("recruiter") ||
      query.includes("summary") ||
      query.includes("background")
    ) {
      answer = HOME_QUESTIONS[1].answer;
      nextMood = "proud";
    } else if (
      query.includes("equinox") ||
      query.includes("who are you")
    ) {
      answer = HOME_QUESTIONS[2].answer;
      nextMood = "happy";
    }

    setQuestionInput("");
    speak(answer, nextMood, 7200, true);
  };

  const navigateToCase = (item: EquinoxCaseStudy) => {
    setRecommendedCase(null);
    closePanel();
    onNavigate?.(item.slug);
  };

  const scrollHomeSection = (sectionId: string) => {
    closePanel();
    window.setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    }, 40);
  };

  const handlePetClick = () => {
    const nextEnergy = clamp(energy + 7, 4, 100);
    setEnergy(nextEnergy);
    setReactionKey((value) => value + 1);
    setMood(nextEnergy >= 90 ? "excited" : "happy");
    settleMood();

    if (minimized) {
      setMinimized(false);
      openPanel("guide");
      return;
    }
    if (panelOpen) {
      closePanel();
    } else {
      openPanel("guide");
    }
  };

  const handleMinimize = () => {
    setPanelOpen(false);
    setMessage(null);
    setMinimized(true);
    setMood("sleepy");
    x.set(0);
    y.set(0);
  };

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
  const petSize = minimized ? 46 : mobileViewport ? 64 : 74;
  const faceSize = minimized ? 31 : mobileViewport ? 42 : 48;

  const resetPettingPath = () => {
    const path = pettingPathRef.current;
    path.lastX = 0;
    path.lastY = 0;
    path.lastAngle = null;
    path.lastAt = 0;
    path.angleTravel = 0;
    path.distance = 0;
  };

  const handlePetPointerMove = (
    event: React.PointerEvent<HTMLButtonElement>,
  ) => {
    if (minimized || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - (bounds.left + bounds.width / 2);
    const pointerY = event.clientY - (bounds.top + bounds.height / 2);
    const radius = Math.hypot(pointerX, pointerY);
    const now = Date.now();
    const path = pettingPathRef.current;

    if (radius < faceSize * 0.16 || radius > petSize * 0.52) {
      resetPettingPath();
      return;
    }

    if (now - path.lastAt > 1800) {
      resetPettingPath();
    }

    const angle = Math.atan2(pointerY, pointerX);
    if (path.lastAt > 0) {
      path.distance += Math.hypot(
        pointerX - path.lastX,
        pointerY - path.lastY,
      );
      if (path.lastAngle !== null) {
        let angleDelta = angle - path.lastAngle;
        while (angleDelta > Math.PI) angleDelta -= Math.PI * 2;
        while (angleDelta < -Math.PI) angleDelta += Math.PI * 2;
        if (Math.abs(angleDelta) < 1.25) {
          path.angleTravel += Math.abs(angleDelta);
        }
      }
    }

    path.lastX = pointerX;
    path.lastY = pointerY;
    path.lastAngle = angle;
    path.lastAt = now;

    setIsPetting(true);
    setMood((current) =>
      ["idle", "curious", "sleepy"].includes(current) ? "shy" : current,
    );
    if (pettingTimerRef.current !== null) {
      window.clearTimeout(pettingTimerRef.current);
    }
    pettingTimerRef.current = window.setTimeout(
      () => setIsPetting(false),
      340,
    );

    const completedCircle =
      path.angleTravel > Math.PI * 1.1 && path.distance > 52;
    const completedStrokes = path.distance > 118;
    if (
      (completedCircle || completedStrokes) &&
      now >= path.cooldownUntil
    ) {
      path.cooldownUntil = now + 5200;
      path.angleTravel = 0;
      path.distance = 0;
      setEnergy((current) => clamp(current + 6, 4, 100));
      speak(
        pickMessage(PETTING_MESSAGES, Math.floor(now / 1200)),
        "happy",
        3600,
        true,
      );
      settleMood(2500);
    }
  };

  const handlePetPointerLeave = () => {
    resetPettingPath();
    setIsPetting(false);
    settleMood(700);
  };

  return (
    <>
      <AnimatePresence>
        {panelOpen && !minimized && (
          <motion.aside
            role="complementary"
            aria-label="Equinox portfolio guide"
            className="fixed z-[72] overflow-y-auto"
            style={{
              right: mobileViewport ? 12 : 20,
              left: mobileViewport ? 12 : "auto",
              bottom: mobileViewport ? 88 : 108,
              width: mobileViewport ? "auto" : 372,
              maxHeight: mobileViewport
                ? "calc(100svh - 112px)"
                : "min(650px, calc(100vh - 132px))",
              border: "1px solid rgba(242,241,236,0.16)",
              borderRadius: 10,
              background: PANEL_BG,
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.58), 0 0 54px rgba(204,110,248,0.12), inset 0 1px rgba(255,255,255,0.075), inset 1px 0 rgba(255,255,255,0.025)",
              backdropFilter: "blur(28px) saturate(135%)",
              WebkitBackdropFilter: "blur(28px) saturate(135%)",
              padding: mobileViewport ? 14 : 16,
              color: FG,
              isolation: "isolate",
            }}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.24 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="size-2"
                    style={{
                      borderRadius: 2,
                      background: petTone,
                      boxShadow: `0 0 12px ${petTone}`,
                    }}
                  />
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15,
                      fontWeight: 700,
                      letterSpacing: 0,
                    }}
                  >
                    Equinox
                  </h2>
                </div>
                <p
                  className="mt-1"
                  style={{
                    color: MUTED,
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9.5,
                    letterSpacing: 0,
                  }}
                >
                  {activityLabel} / {energy}% energy
                </p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <IconButton
                  label={muted ? "Enable automatic messages" : "Mute automatic messages"}
                  onClick={() => setMuted((value) => !value)}
                >
                  {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </IconButton>
                <IconButton label="Minimize Equinox" onClick={handleMinimize}>
                  <Minimize2 size={16} />
                </IconButton>
                <IconButton label="Close guide" onClick={closePanel}>
                  <X size={16} />
                </IconButton>
              </div>
            </div>

            <div
              className="mt-4 overflow-hidden"
              style={{
                height: 4,
                borderRadius: 2,
                background: "rgba(242,241,236,0.08)",
              }}
            >
              <motion.div
                style={{ height: "100%", background: petTone }}
                animate={{ width: `${energy}%` }}
                transition={{ duration: reduceMotion ? 0 : 0.35 }}
              />
            </div>

            {panelView !== "guide" && (
              <button
                type="button"
                onClick={() => setPanelView("guide")}
                className="mt-4 flex min-h-10 items-center gap-2"
                style={{
                  border: 0,
                  background: "transparent",
                  color: MUTED,
                  cursor: "pointer",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  padding: 0,
                }}
              >
                <ArrowLeft size={14} /> Back to guide
              </button>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={panelView}
                initial={{ opacity: 0, x: reduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.18 }}
              >
                {panelView === "guide" && (
                  <>
                    <div
                      className="mt-4"
                      aria-live="polite"
                      style={{
                        borderLeft: `2px solid ${petTone}`,
                        borderRadius: "0 8px 8px 0",
                        background: READING_SURFACE,
                        boxShadow: "inset 0 1px rgba(255,255,255,0.025)",
                        padding: "10px 12px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          lineHeight: 1.35,
                        }}
                      >
                        {caseStudy ? caseStudy.title : "Portfolio guide"}
                      </p>
                      <p
                        className="mt-1.5"
                        style={{
                          color: "rgba(242,241,236,0.8)",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10.5,
                          lineHeight: 1.55,
                          letterSpacing: 0,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {response}
                      </p>
                    </div>

                    {recommendedCase && (
                      <button
                        type="button"
                        onClick={() => navigateToCase(recommendedCase)}
                        className="mt-3 flex min-h-11 w-full items-center justify-between gap-3 text-left"
                        style={{
                          border: `1px solid ${PURPLE}78`,
                          borderRadius: 8,
                          background:
                            "linear-gradient(135deg, rgba(204,110,248,0.14), rgba(204,110,248,0.055))",
                          boxShadow: "inset 0 1px rgba(255,255,255,0.04)",
                          color: FG,
                          cursor: "pointer",
                          padding: "9px 11px",
                        }}
                      >
                        <span>
                          <span
                            className="block"
                            style={{
                              color: PURPLE,
                              fontFamily: "'Space Mono', monospace",
                              fontSize: 9,
                              textTransform: "uppercase",
                            }}
                          >
                            Recommended next
                          </span>
                          <span
                            className="mt-0.5 block"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            {recommendedCase.title}
                          </span>
                        </span>
                        <ArrowUpRight size={17} style={{ color: PURPLE }} />
                      </button>
                    )}

                    <div className="mt-4">
                      <ActionRow
                        icon={<MessageCircleQuestion size={17} />}
                        title={caseStudy ? "Ask about this case" : "Ask about Dheoryan"}
                        detail="Plain-language answers from the portfolio"
                        onClick={() => setPanelView("ask")}
                      />
                      <ActionRow
                        icon={<Compass size={17} />}
                        title="Recommend a project"
                        detail={`${seenCases.size} of ${portfolioCases.length} projects explored`}
                        onClick={recommendProject}
                      />
                      <ActionRow
                        icon={<Briefcase size={17} />}
                        title="Recruiter summary"
                        detail="A quick read on role, range, and strengths"
                        onClick={() => {
                          const recruiter = HOME_QUESTIONS.find(
                            (item) => item.id === "recruiter",
                          );
                          if (recruiter) handleQuestion(recruiter);
                        }}
                      />
                      <ActionRow
                        icon={<Contact size={17} />}
                        title="Contact Dheoryan"
                        detail="LinkedIn, email, WhatsApp, or Instagram"
                        onClick={() => setPanelView("contact")}
                      />
                    </div>

                    {caseStudy ? (
                      <button
                        type="button"
                        onClick={() => {
                          closePanel();
                          onHome?.();
                        }}
                        className="mt-3 flex min-h-11 w-full items-center justify-center gap-2"
                        style={{
                          border: "1px solid rgba(242,241,236,0.13)",
                          borderRadius: 8,
                          background:
                            "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.018))",
                          color: FG,
                          cursor: "pointer",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      >
                        <Home size={15} /> Back to portfolio
                      </button>
                    ) : (
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        {[
                          ["work", "Work"],
                          ["about", "About"],
                          ["contact", "Contact"],
                        ].map(([id, label]) => (
                          <button
                            key={id}
                            type="button"
                            onClick={() => scrollHomeSection(id)}
                            className="min-h-11"
                            style={{
                              border: "1px solid rgba(242,241,236,0.13)",
                              borderRadius: 8,
                              background:
                                "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.018))",
                              color: FG,
                              cursor: "pointer",
                              fontFamily: "'Space Mono', monospace",
                              fontSize: 10,
                            }}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {panelView === "ask" && (
                  <div className="mt-3">
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      {caseStudy ? "Understand this case" : "Ask Equinox"}
                    </p>
                    <p
                      className="mt-1"
                      style={{
                        color: MUTED,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10,
                        lineHeight: 1.5,
                      }}
                    >
                      Choose a question. Answers stay on-device and come from the portfolio content.
                    </p>
                    <form
                      onSubmit={handleTypedQuestion}
                      className="mt-3 flex items-center gap-2"
                    >
                      <input
                        value={questionInput}
                        onChange={(event) => setQuestionInput(event.target.value)}
                        aria-label="Ask Equinox a question"
                        placeholder={
                          caseStudy
                            ? "Ask about the problem, role, or outcome"
                            : "Ask about skills, projects, or contact"
                        }
                        style={{
                          minWidth: 0,
                          minHeight: 42,
                          flex: 1,
                          border: "1px solid rgba(242,241,236,0.16)",
                          borderRadius: 8,
                          outline: "none",
                          background: READING_SURFACE,
                          color: FG,
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          letterSpacing: 0,
                          padding: "10px 11px",
                        }}
                      />
                      <button
                        type="submit"
                        aria-label="Send question"
                        title="Send question"
                        className="flex size-[42px] shrink-0 items-center justify-center"
                        style={{
                          border: 0,
                          borderRadius: 8,
                          background: PURPLE,
                          color: "#0a0a0a",
                          cursor: "pointer",
                        }}
                      >
                        <ArrowUpRight size={17} />
                      </button>
                    </form>
                    <div
                      aria-live="polite"
                      className="my-4"
                      style={{
                        borderLeft: `2px solid ${petTone}`,
                        borderRadius: "0 8px 8px 0",
                        background: READING_SURFACE,
                        color: "rgba(242,241,236,0.86)",
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10.5,
                        lineHeight: 1.55,
                        padding: "10px 12px",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {response}
                    </div>
                    {questions.map((question) => (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => handleQuestion(question)}
                        className="flex min-h-12 w-full items-center justify-between gap-3 text-left"
                        style={{
                          border: 0,
                          borderTop: "1px solid rgba(242,241,236,0.08)",
                          background: "transparent",
                          color: FG,
                          cursor: "pointer",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 12.5,
                          fontWeight: 500,
                          padding: "10px 2px",
                        }}
                      >
                        {question.label}
                        <ChevronRight size={15} style={{ color: PURPLE }} />
                      </button>
                    ))}
                  </div>
                )}

                {panelView === "contact" && (
                  <div className="mt-3">
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      Contact Dheoryan
                    </p>
                    <p
                      className="mt-1 mb-3"
                      style={{
                        color: MUTED,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10,
                        lineHeight: 1.5,
                      }}
                    >
                      Pick the route that fits your message.
                    </p>
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
                        onClick={() => {
                          setMood("excited");
                          setResponse(`Opening ${link.label}. Nice choice.`);
                          settleMood(2200);
                        }}
                        className="flex min-h-14 items-center justify-between gap-3"
                        style={{
                          borderTop: "1px solid rgba(242,241,236,0.08)",
                          color: FG,
                          textDecoration: "none",
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className="flex size-9 items-center justify-center"
                            style={{
                              borderRadius: 8,
                              background: "rgba(204,110,248,0.1)",
                              color: PURPLE,
                            }}
                          >
                            {link.label === "Email" ? (
                              <Mail size={17} />
                            ) : (
                              <ArrowUpRight size={17} />
                            )}
                          </span>
                          <span>
                            <span
                              className="block"
                              style={{
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: 13,
                                fontWeight: 600,
                              }}
                            >
                              {link.label}
                            </span>
                            <span
                              className="block"
                              style={{
                                color: MUTED,
                                fontFamily: "'Space Mono', monospace",
                                fontSize: 9.5,
                              }}
                            >
                              {link.hint}
                            </span>
                          </span>
                        </span>
                        <ArrowUpRight size={15} style={{ color: PURPLE }} />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {message && !panelOpen && !minimized && !muted && (
          <motion.div
            key={message}
            aria-live="polite"
            className="fixed z-[71] text-left"
            style={{
              right: mobileViewport ? 78 : 104,
              bottom: mobileViewport ? 17 : 24,
              width: mobileViewport
                ? "min(232px, calc(100vw - 94px))"
                : 300,
              maxHeight: mobileViewport ? "min(30vh, 220px)" : 300,
              overflowY: "auto",
              border: "1px solid rgba(242,241,236,0.15)",
              borderRadius: 9,
              background: PANEL_BG,
              boxShadow:
                "0 18px 52px rgba(0,0,0,0.48), 0 0 30px rgba(204,110,248,0.08), inset 0 1px rgba(255,255,255,0.065)",
              backdropFilter: "blur(24px) saturate(130%)",
              WebkitBackdropFilter: "blur(24px) saturate(130%)",
              color: FG,
              fontFamily: "'Space Mono', monospace",
              fontSize: mobileViewport ? 10 : 10.5,
              lineHeight: 1.5,
              letterSpacing: 0,
              padding: mobileViewport ? "10px 11px" : "11px 13px",
              overflowWrap: "anywhere",
              pointerEvents: "none",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
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
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-label="Equinox portfolio companion"
        className="fixed bottom-4 right-4 z-[73] flex items-center justify-center overflow-visible md:bottom-5 md:right-5"
        style={{
          width: petSize,
          height: petSize,
          x: reduceMotion || minimized ? 0 : springX,
          y: reduceMotion || minimized ? 0 : springY,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.45 }}
      >
        <motion.button
          type="button"
          aria-label={
            minimized
              ? "Restore Equinox portfolio guide"
              : panelOpen
                ? "Close Equinox portfolio guide"
                : "Open Equinox portfolio guide"
          }
          title={minimized ? "Restore Equinox" : "Open Equinox guide"}
          onClick={handlePetClick}
          onPointerEnter={() => {
            if (
              !panelOpen &&
              !minimized &&
              Date.now() - lastMessageRef.current > 16000
            ) {
              speak("Oh hi. I can help with this page.", "shy", 2600);
            }
          }}
          onPointerMove={handlePetPointerMove}
          onPointerLeave={handlePetPointerLeave}
          className="relative flex items-center justify-center overflow-visible focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cc6ef8]"
          style={{
            width: petSize,
            height: petSize,
            border: 0,
            borderRadius: minimized ? 14 : 18,
            background: "transparent",
            boxShadow: "none",
            cursor: "pointer",
          }}
          whileHover={reduceMotion ? undefined : { scale: 1.04 }}
          whileTap={reduceMotion ? undefined : { scale: 0.94 }}
        >
          <motion.span
            aria-hidden
            className="absolute"
            style={{
              inset: minimized ? -6 : -10,
              borderRadius: minimized ? 18 : 24,
              background: `radial-gradient(circle, ${petTone}24 0%, transparent 60%)`,
              filter: "blur(6px)",
            }}
            animate={
              reduceMotion
                ? { opacity: 0.5 }
                : {
                    opacity:
                      mood === "sleepy"
                        ? 0.28
                        : isPetting
                          ? [0.55, 0.82, 0.55]
                          : [0.42, 0.7, 0.42],
                    scale:
                      isPetting
                        ? [1, 1.16, 1]
                        : mood === "excited" || mood === "surprised"
                        ? [1, 1.2, 1]
                        : [1, 1.06, 1],
                  }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.span
            aria-hidden
            className="relative flex items-center justify-center"
            style={{ width: faceSize, height: faceSize }}
            animate={
              reduceMotion
                ? undefined
                : isPetting
                  ? {
                      y: [0, -3, 0],
                      rotate: [-5, 6, -3, 4, 0],
                      scale: [1, 1.07, 1.02],
                    }
                  : {
                    y: mood === "sleepy" ? [2, 4, 2] : [0, -2, 0],
                    rotate:
                      mood === "excited"
                        ? [-5, 5, -5]
                        : mood === "shy"
                          ? -4
                          : 0,
                  }
            }
            transition={{
              duration: isPetting ? 0.62 : 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="absolute inset-0"
              style={{
                borderRadius:
                  mood === "surprised" ? 16 : mood === "proud" ? 10 : 12,
                background: `linear-gradient(135deg, ${petTone}, #4f286c 72%)`,
                boxShadow: `0 0 0 1px rgba(242,241,236,0.12) inset, 0 0 24px ${petTone}52`,
              }}
            />
            <span
              className="absolute inset-[5px]"
              style={{
                borderRadius: 8,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.17), transparent 58%)",
              }}
            />
            <span className="relative flex flex-col items-center gap-[7px]">
              {(mood === "proud" ||
                mood === "surprised" ||
                mood === "thinking") && (
                <span className="flex gap-[7px]">
                  {[0, 1].map((brow) => (
                    <motion.span
                      key={brow}
                      style={{
                        width: minimized ? 7 : 9,
                        height: 2,
                        borderRadius: 2,
                        background: "rgba(242,241,236,0.68)",
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
                      width: minimized ? 5 : eyeWidth,
                      height: minimized ? 5 : eyeHeight,
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
                    }}
                    transition={{ duration: 0.25 }}
                  />
                ))}
              </span>
            </span>
          </motion.span>

          {!minimized && (
            <span
              aria-hidden
              className="absolute bottom-1 left-1/2 h-1 -translate-x-1/2 overflow-hidden"
              style={{
                width: 30,
                borderRadius: 2,
                background: "rgba(242,241,236,0.13)",
              }}
            >
              <span
                className="block h-full"
                style={{ width: `${energy}%`, background: petTone }}
              />
            </span>
          )}

          <span
            aria-hidden
            className="absolute right-1.5 top-1.5 size-1.5"
            style={{
              borderRadius: 2,
              background: muted ? "rgba(242,241,236,0.3)" : "#57d88a",
              boxShadow: muted ? "none" : "0 0 8px rgba(87,216,138,0.8)",
            }}
          />

          <AnimatePresence>
            {!minimized &&
              ["happy", "excited", "proud", "surprised"].includes(mood) &&
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
                  initial={{ opacity: 0, y: 8, scale: 0.4 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-2, -16 - spark * 4],
                    x: (spark - 1.5) * 7,
                    scale: [0.4, 1, 0.55],
                    rotate: 90 + spark * 24,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.85 }}
                />
              ))}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </>
  );
}
