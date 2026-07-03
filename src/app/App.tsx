import { useState, useEffect, useRef } from "react";
import { useHeroParallax, useWorkCardParallax, useAboutParallax, useContactParallax, useProcessParallax, useCaseStudyParallax } from "./components/parallax";
import {
  motion,
  useInView,
  AnimatePresence,
} from "motion/react";
import svgPaths from "@/imports/PortfolioDheoryan-1/svg-t4dtk4ouv6";
import imgThumb0 from "@/imports/PortfolioDheoryan-1/43b0ce12d21a60eb9993e06d77a00cd1268f2008.png";
import imgThumb1 from "@/imports/PortfolioDheoryan-1/5afa8b14b3d4b89cc94f7f4d27af1b446345d65c.png";
import imgThumb2 from "@/imports/PortfolioDheoryan-1/5a423e25c3bf151b49fdebbcd4f8bca1ce4158c1.png";
import imgThumb3 from "@/imports/PortfolioDheoryan-1/c5a8d734c74e5bb1faed601daf6b25204a007425.png";
import imgThumb4 from "@/imports/PortfolioDheoryan-1/6ae195432613bb0670429b2419f2e152f15f03ce.png";
import imgThumb5 from "@/imports/PortfolioDheoryan-1/52ec9a81c233b1ed8c2f248435b4ffac8fa78eba.png";
import imgThumb6 from "@/imports/PortfolioDheoryan-1/6f0259f83281b2b8a8b3723dc90a1a73f92347a8.png";
import imgThumb7 from "@/imports/PortfolioDheoryan-1/7ac6762698247e2cc7db8f3a0ebbacda97a5e747.png";
import imgThumb8 from "@/imports/PortfolioDheoryan-1/413bc02e22083b9f7ab13cd8e136d095b0b976cd.png";
import CaseStudySonar from "@/imports/CaseStudySonar-1/index";
import CaseStudyDesignSystem from "@/imports/CaseStudyDesignSystem-1/index";
import CaseStudyMailtargetWeb from "@/imports/CaseStudyMailtargetWeb-1/index";
import CaseStudyReadsee from "@/imports/CaseStudyReadsee-1/index";
import CaseStudyReadseeDashboard from "@/imports/CaseStudyReadseeDashboard-1/index";
import CaseStudyCmisSuiteImport from "@/imports/CaseStudyCmisSuite/index";
import CaseStudyMailtargetApp from "@/imports/CaseStudyMailtargetApp-1/index";
import CaseStudyKitalabel from "@/imports/CaseStudyKitalabel-1/index";
import CaseStudyKitalabelBos from "@/imports/CaseStudyKitalabelBos-1/index";

// ── Data ──────────────────────────────────────────────────────────────────────

type WorkItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  slug: string | null;
  thumb: string;
};

const WORKS: WorkItem[] = [
  { num: "01", title: "KitaLabel Business OS",      category: "B2B Admin Panel · AI-Assisted Development",           year: "2026",      slug: "kitalabel-bos",    thumb: imgThumb0 },
  { num: "02", title: "KitaLabel Price Calculator", category: "Web Plugin · AI-Assisted Development",                year: "2025",      slug: "kitalabel",        thumb: imgThumb1 },
  { num: "03", title: "Read/See Dashboard",         category: "SaaS · CDP Product Design",                          year: "2022–2023", slug: "readsee-dashboard", thumb: imgThumb8 },
  { num: "04", title: "CMIS — Enterprise Suite",    category: "Enterprise · Document, Invoice & Purchase Flows",     year: "2024–2025", slug: "cmis-suite",       thumb: imgThumb2 },
  { num: "05", title: "SONAR",                      category: "Email tracker Chrome extension — web design & landing page", year: "2024", slug: "sonar",          thumb: imgThumb3 },
  { num: "06", title: "Universal Design System",    category: "Design System · Component Library",                   year: "2023–2024", slug: "design-system",    thumb: imgThumb4 },
  { num: "07", title: "Mailtarget App",             category: "SaaS · Email API",                                    year: "2023–2024", slug: "mailtarget-app",   thumb: imgThumb5 },
  { num: "08", title: "Read/See Website",           category: "Marketing · Customer Data Platform",                  year: "2023",      slug: "readsee-website",  thumb: imgThumb6 },
  { num: "09", title: "Mailtarget Website",         category: "Marketing · Email API",                               year: "2023",      slug: "mailtarget-web",   thumb: imgThumb7 },
];

const CASE_STUDIES: Record<string, React.ComponentType> = {
  "kitalabel-bos":     CaseStudyKitalabelBos,
  "design-system":     CaseStudyDesignSystem,
  "readsee-dashboard": CaseStudyReadseeDashboard,
  "cmis-suite":        CaseStudyCmisSuiteImport,
  "mailtarget-app":    CaseStudyMailtargetApp,
  kitalabel:           CaseStudyKitalabel,
  "readsee-website":   CaseStudyReadsee,
  "mailtarget-web":    CaseStudyMailtargetWeb,
  sonar:               CaseStudySonar,
};

// Problem + Outcome copy for each case study
const CASE_META: Record<string, { problem: string; outcome: string }> = {
  "kitalabel-bos": {
    problem: "KitaLabel's internal operations ran across disconnected tools — no unified view of orders, pricing, customers, or production status. Staff context-switched between spreadsheets, WhatsApp, and ad-hoc dashboards to do basic work.",
    outcome: "Unified operations into a single B2B OS — replacing 4 disconnected tools. Delivered as an AI-assisted development project in 2026. Internal adoption ongoing.",
  },
  "design-system": {
    problem: "The product team was designing the same components repeatedly across products — buttons, inputs, modals — each slightly different, none documented. Every new screen required re-inventing solved problems.",
    outcome: "Component library adopted across product teams. Reduced per-screen design time by eliminating repeated component work. Foundation now used in Mailtarget App and CMIS.",
  },
  "readsee-dashboard": {
    problem: "Read/See needed a full CDP product from zero — no existing design system, no established patterns, and a scope covering authentication through campaign activation across 700+ screens in 4 phases.",
    outcome: "Full product shipped across 700+ screens and 4 phases, covering all CDP modules from sign-up through campaign activation. Delivered with interactive prototype for stakeholder review.",
  },
  "cmis-suite": {
    problem: "Enterprise staff were processing invoices, documents, and purchase requests through email chains and paper approvals — no audit trail, no status visibility, no structured workflow.",
    outcome: "Three enterprise workflows — invoice, document, and purchase request — digitised and shipped. Replaced email-based approvals with a structured, auditable digital flow.",
  },
  "mailtarget-app": {
    problem: "Mailtarget's existing email marketing product lacked a cohesive design system, resulting in inconsistent UI patterns across its campaign builder, contact management, and automation flows.",
    outcome: "SaaS email platform redesigned with a unified component system. Consistent UI patterns shipped across campaign builder, contact management, and automation flows 2023–2024.",
  },
  kitalabel: {
    problem: "Sales teams were manually calculating custom label pricing using spreadsheets shared over WhatsApp — error-prone, slow, and invisible to customers during the quoting process.",
    outcome: "Price calculator deployed as a web plugin in 2025. Removed manual spreadsheet quoting from the sales process and made pricing transparent during customer conversations.",
  },
  "readsee-website": {
    problem: "Read/See had no marketing website to explain its 3-pillar product model (Connect, Collect, Activate) to enterprise buyers — the product had no public presence to drive inbound leads.",
    outcome: "Marketing site shipped with Lo-Fi through Hi-Fi execution, full mobile responsive design, and custom illustrations communicating the Connect → Collect → Activate product model.",
  },
  "mailtarget-web": {
    problem: "Mailtarget needed a marketing site that clearly positioned its email API for developer buyers while remaining accessible to non-technical marketing decision makers.",
    outcome: "Launched marketing site with developer-first positioning and clear API integration messaging. Built with mobile simulation and prototype for stakeholder sign-off.",
  },
  sonar: {
    problem: "Email marketers had no visibility into whether their outreach emails were opened, forwarded, or ignored — tracking was buried inside full ESP platforms and unavailable as a lightweight browser tool.",
    outcome: "Email tracking extension shipped as a Chrome plugin in 2024. Designed a lightweight web presence and extension UI for the solo-user outreach tracking use case.",
  },
};

const PROCESS_STEPS = [
  {
    num: "01 Discover",
    title: "Discover",
    body: "Interviews, audits and data digging until the real problem surfaces — not the one in the brief.",
  },
  {
    num: "02 Define",
    title: "Define",
    body: "Sharp problem statements, flows and success metrics. Align everyone before a pixel moves.",
  },
  {
    num: "03 Design",
    title: "Design",
    body: "Systems first. Wireframes to polished UI, prototyped and pressure-tested with real users.",
  },
  {
    num: "04 Deliver",
    title: "Deliver",
    body: "Tight handoff, documented components, and partnership with engineering through ship.",
  },
];

const EXPERIENCE = [
  {
    period: "2024 — Now",
    role: "Product Designer (UI/UX) & Vibe Coder",
    company: "Cahaya Jakarta Group",
  },
  {
    period: "2022 — 2023",
    role: "Product Designer (UI/UX)",
    company: "Mailtarget.co",
  },
  {
    period: "2022 (9 Month)",
    role: "Graphic Designer",
    company: "MTARGET.CO",
  },
  {
    period: "2021 — 2022",
    role: "Email Marketing Specialist",
    company: "MTARGET.CO",
  },
];

const MARQUEE_ITEMS = [
  "Product Design",
  "✳",
  "Design Systems",
  "✳",
  "SaaS Platforms",
  "✳",
  "Prototyping",
  "✳",
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useCountUp(
  target: number,
  active: boolean,
  duration = 1400,
) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setV(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [active, target, duration]);
  return v;
}

// ── Motion presets ────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth" });
}

const PURPLE = "#cc6ef8";
const FG = "#f2f1ec";
const MUTED = "#9a9a93";
const DIM = "#8a8a83";
const BG = "#0a0a0a";
const BG2 = "#0c0c0b";

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ onHome }: { onHome: () => void }) {
  const sy = useScrollY();
  const scrolled = sy > 50;
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.94)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition:
          "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-6">
        <button
          onClick={onHome}
          className="flex items-center gap-2.5"
        >
          <motion.span
            className="inline-block size-[9px] rounded-full"
            style={{ background: PURPLE }}
            animate={{
              boxShadow: [
                `0 0 0 0 ${PURPLE}99`,
                `0 0 0 9px ${PURPLE}00`,
                `0 0 0 0 ${PURPLE}00`,
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <span className="flex flex-col items-start leading-none">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.14em",
                color: FG,
              }}
            >
              DHEORY
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: 11,
                color: MUTED,
                marginTop: 3,
              }}
            >
              Dheoryan Putra Arsi
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-12">
          {["Work", "Process", "About"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s.toLowerCase())}
              className="transition-colors duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                textTransform: "uppercase",
                color: MUTED,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = FG)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = MUTED)
              }
            >
              {s}
            </button>
          ))}
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ backgroundColor: PURPLE, color: BG }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: PURPLE,
              border: `1px solid ${PURPLE}`,
              borderRadius: 20,
              padding: "8px 20px",
              backgroundColor: "rgba(0,0,0,0)",
            }}
          >
            {"Let's talk"}
          </motion.button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] w-6 p-1 -mr-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-px origin-center"
              style={{ background: FG }}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 6 }
                    : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.22 }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {["Work", "Process", "About", "Contact"].map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => {
                      scrollTo(s.toLowerCase());
                      setOpen(false);
                    }}
                    className="text-left transition-colors duration-200"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      textTransform: "uppercase",
                      color: MUTED,
                    }}
                  >
                    {s}
                  </button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroDigitalTexture() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <style>{`
        @keyframes dpa-hero-beams {
          0%, 100% { transform: translate3d(-1.5%, 1%, 0) scale(1); opacity: 0.78; }
          50% { transform: translate3d(1.5%, -1%, 0) scale(1.04); opacity: 0.96; }
        }
        @keyframes dpa-hero-grid {
          from { transform: translate3d(0, 0, 0) rotateX(62deg); }
          to { transform: translate3d(-64px, 48px, 0) rotateX(62deg); }
        }
        @keyframes dpa-hero-speckles {
          0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.34; }
          50% { transform: translate3d(22px, -16px, 0); opacity: 0.52; }
        }
        @keyframes dpa-hero-scan {
          0% { transform: translate3d(-12%, -80%, 0) rotate(10deg); opacity: 0; }
          18% { opacity: 0.32; }
          70% { opacity: 0.12; }
          100% { transform: translate3d(12%, 120%, 0) rotate(10deg); opacity: 0; }
        }
        .dpa-hero-composite {
          transform: translateZ(0);
          will-change: transform, opacity;
        }
      `}</style>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 54% 18%, rgba(204,110,248,0.16) 0%, transparent 36%), radial-gradient(ellipse at 76% 48%, rgba(98,76,255,0.12) 0%, transparent 34%), linear-gradient(180deg, #070707 0%, #0a0a0a 62%, #050505 100%)",
        }}
      />

      <div
        className="absolute inset-[-22%] dpa-hero-composite"
        style={{
          background:
            "linear-gradient(106deg, transparent 12%, rgba(204,110,248,0.03) 26%, rgba(204,110,248,0.19) 42%, rgba(162,123,255,0.12) 52%, transparent 68%), linear-gradient(72deg, transparent 22%, rgba(200,255,77,0.05) 39%, rgba(204,110,248,0.13) 50%, transparent 66%), radial-gradient(ellipse at 66% 42%, rgba(204,110,248,0.24) 0%, rgba(204,110,248,0.05) 24%, transparent 52%)",
          filter: "blur(22px)",
          mixBlendMode: "screen",
          animation: "dpa-hero-beams 13s ease-in-out infinite",
        }}
      />

      <div
        className="absolute inset-x-[-10%] bottom-[-28%] h-[62%] dpa-hero-composite"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,110,248,0.2) 0%, rgba(90,78,255,0.09) 28%, transparent 68%)",
          filter: "blur(34px)",
          opacity: 0.8,
          animation: "dpa-hero-beams 16s ease-in-out infinite reverse",
        }}
      />

      <div
        className="absolute inset-x-[-18%] bottom-[-34%] h-[78%] dpa-hero-composite"
        style={{
          backgroundImage:
            "linear-gradient(rgba(204,110,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(204,110,248,0.06) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
          maskImage:
            "radial-gradient(ellipse at 50% 34%, black 0%, rgba(0,0,0,0.68) 36%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 34%, black 0%, rgba(0,0,0,0.68) 36%, transparent 72%)",
          opacity: 0.22,
          transformOrigin: "50% 70%",
          animation: "dpa-hero-grid 22s linear infinite",
        }}
      />

      <div
        className="absolute inset-[-8%] dpa-hero-composite"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(204,110,248,0.34) 0 1px, transparent 1.7px), radial-gradient(circle, rgba(242,241,236,0.18) 0 1px, transparent 1.6px), radial-gradient(circle, rgba(200,255,77,0.16) 0 1px, transparent 1.7px)",
          backgroundPosition: "0 0, 42px 58px, 88px 20px",
          backgroundSize: "142px 142px, 214px 214px, 260px 260px",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 14%, black 86%, transparent 100%)",
          mixBlendMode: "screen",
          animation: "dpa-hero-speckles 15s ease-in-out infinite",
        }}
      />

      <div
        className="absolute inset-x-[-10%] top-0 h-2/3 dpa-hero-composite"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(204,110,248,0.08) 50%, transparent 100%)",
          mixBlendMode: "screen",
          animation: "dpa-hero-scan 9s ease-in-out infinite",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0.22) 48%, rgba(10,10,10,0.86) 100%)",
        }}
      />
    </div>
  );
}

function HeroSection() {
  const { headlineRef, metaRef, scrollRef } = useHeroParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 md:px-10 lg:px-16 pt-36 pb-16"
      style={{ background: BG, isolation: "isolate" }}
    >
      <HeroDigitalTexture />

      <motion.div
        ref={metaRef}
        className="relative z-10 flex flex-wrap items-start justify-between gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <motion.span
            className="inline-block size-2 rounded-full"
            style={{ background: "#22C55E" }}
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: DIM,
            }}
          >
            Available for work — 2026
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            color: DIM,
          }}
        >
          Product Designer · Web Apps &amp; Design Systems · Based in Jakarta, Indonesia
        </span>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-12 lg:gap-16"
      >
        <motion.h1
          ref={headlineRef}
          variants={fadeUp}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(48px, 8.5vw, 120px)",
            lineHeight: 0.92,
            color: FG,
          }}
        >
          {"Crafting "}
          <em
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: PURPLE,
            }}
          >
            clarity
          </em>
          {" for complex software."}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start"
        >
          <p
            className="max-w-[580px]"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(16px,1.5vw,20px)",
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            {
              "I'm Dheoryan — a product designer specializing in "
            }
            <strong style={{ fontWeight: 500, color: FG }}>
              SaaS platforms
            </strong>
            {" and "}
            <strong style={{ fontWeight: 500, color: FG }}>
              scalable design systems
            </strong>
            {
              ". I turn dense, ambiguous problems into interfaces that feel obvious."
            }
          </p>

          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <motion.button
              onClick={() => scrollTo("work")}
              whileHover={{
                scale: 1.04,
                backgroundColor: "#d88fff",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                background: PURPLE,
                color: BG,
                borderRadius: 32,
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              View selected work →
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(204,110,248,0.08)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                background: "transparent",
                color: PURPLE,
                borderRadius: 32,
                padding: "12px 24px",
                border: `1px solid ${PURPLE}`,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="relative z-10 flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <div
          className="w-px h-10"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <motion.span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: DIM,
          }}
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll to explore
        </motion.span>
      </motion.div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────

function MarqueeSection() {
  return (
    <div
      className="relative overflow-hidden flex items-center"
      style={{
        height: 100,
        background: BG2,
        boxShadow:
          "0 -1px 0 rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <style>{`
        @keyframes dpa-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .dpa-track { animation: dpa-marquee 32s linear infinite; }
        .dpa-track:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="dpa-track flex items-center gap-12 whitespace-nowrap w-max select-none"
        style={{ paddingRight: 48 }}
      >
        {[
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
        ].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 60,
              lineHeight: 1,
              color:
                item === "✳"
                  ? PURPLE
                  : "rgba(255,255,255,0.18)",
              WebkitTextStroke: item === "✳" ? "0px" : "0px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Work Row ──────────────────────────────────────────────────────────────────

function WorkCard({ item, index, onNavigate }: { item: WorkItem; index: number; onNavigate: (slug: string) => void }) {
  const parallaxRef = useWorkCardParallax(index);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={parallaxRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => item.slug && onNavigate(item.slug)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: item.slug ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 20,
        transition: "background 0.25s, border-color 0.25s",
        borderColor: hovered ? "rgba(204,110,248,0.2)" : "rgba(255,255,255,0.08)",
      }}
    >
      {/* Thumbnail */}
      <div style={{ height: 200, borderRadius: 12, overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <img src={item.thumb} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.25)", transition: "background 0.25s" }} />
      </div>

      {/* Number */}
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: DIM }}>{item.num}</span>

      {/* Title */}
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 28, lineHeight: 1.2, color: FG, flex: 1 }}>
        {item.title}
      </span>

      {/* Category */}
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, lineHeight: 1.5, color: DIM }}>
        {item.category}
      </span>

      {/* Footer: year + arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: FG }}>{item.year}</span>
        {item.slug && (
          <motion.div
            animate={{
              borderColor: hovered ? PURPLE : "rgba(255,255,255,0.08)",
              backgroundColor: hovered ? "rgba(204,110,248,0.12)" : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.22 }}
            style={{ width: 32, height: 32, borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <path d={svgPaths.p1908cf00} stroke={hovered ? PURPLE : FG} strokeLinecap="round" strokeWidth="2" style={{ transition: "stroke 0.22s" }} />
            </motion.svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ── Work Section ──────────────────────────────────────────────────────────────

function WorkSection({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-24 lg:py-32" style={{ background: BG }}>
      <div className="mx-auto max-w-[1280px]">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-12">
          <motion.div variants={fadeUp} className="flex gap-3 items-start mb-10">
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: PURPLE }}>01</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: MUTED, textTransform: "uppercase" }}>Selected Work</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(32px,4.5vw,60px)", lineHeight: 1.1, color: FG }}>
              {"Things I've "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: PURPLE }}>shipped</em>
            </h2>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: DIM }}>
              4 years of products — 2022 to 2026. Click to view.
            </span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKS.map((item, i) => (
            <WorkCard key={item.num} item={item} index={i} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Process Section ───────────────────────────────────────────────────────────

function ProcessCard({
  step,
  index,
}: {
  step: (typeof PROCESS_STEPS)[0];
  index: number;
}) {
  const ref = useProcessParallax(index);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-1 min-w-[180px] flex flex-col gap-8 p-8 lg:p-10"
      style={{
        boxShadow: hovered
          ? `inset 0 0 0 1px rgba(204,110,248,0.3)`
          : "inset 0 0 0 1px rgba(255,255,255,0.08)",
        transition: "box-shadow 0.3s",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          color: PURPLE,
        }}
      >
        {step.num}
      </span>
      <div className="flex flex-col gap-4">
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(20px,2vw,26px)",
            color: FG,
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: MUTED,
          }}
        >
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="process"
      className="px-6 md:px-10 lg:px-16 py-24 lg:py-32"
      style={{
        background: BG2,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex gap-3 items-start mb-4"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: PURPLE,
              }}
            >
              02
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: MUTED,
                textTransform: "uppercase",
              }}
            >
              How I work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-16"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px,4.5vw,60px)",
              lineHeight: 1.1,
              color: FG,
            }}
          >
            {"A process built for "}
            <em
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: PURPLE,
              }}
            >
              ambiguity
            </em>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessCard
              key={step.title}
              step={step}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function StatItem({
  num,
  suffix,
  label,
  active,
}: {
  num: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const v = useCountUp(num, active);
  return (
    <div className="flex flex-col gap-2">
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(36px,3.5vw,48px)",
          lineHeight: 1,
          color: PURPLE,
        }}
      >
        {v}
        {suffix}
      </span>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          textTransform: "uppercase",
          color: DIM,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(ref, { once: true });
  const { portraitRef, contentRef, statsRef } = useAboutParallax();
  const [portraitOk, setPortraitOk] = useState(true);

  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-16 py-24 lg:py-32"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex gap-3 items-start mb-14"
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: PURPLE,
            }}
          >
            03
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            About
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-shrink-0 w-full lg:w-[440px] rounded overflow-hidden"
            style={{
              height: "clamp(280px, 40vw, 550px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {portraitOk ? (
              <img
                src="/portrait.jpg"
                alt="Portrait of Dheoryan Putra Arsi"
                onError={() => setPortraitOk(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 8,
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #0f0f1a 100%)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.15)",
                    fontSize: 14,
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  DHEORYAN
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-14 flex-1"
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(16px,2.2vw,28px)",
                lineHeight: 1.45,
                color: MUTED,
              }}
            >
              {"I've spent "}
              <em
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  color: PURPLE,
                }}
              >
                four years
              </em>
              {
                " designing the unglamorous, high-stakes parts of software — dashboards, data tables, settings, flows nobody notices until they break. I care about systems that "
              }
              <span style={{ color: FG }}>scale</span>
              {" and details that "}
              <span style={{ color: FG }}>earn trust</span>
              {"."}
            </p>

            <div
              ref={statsRef}
              className="flex flex-wrap items-start justify-between gap-8"
            >
              {[
                {
                  num: 4,
                  suffix: "+",
                  label: "Years designing",
                },
                {
                  num: 9,
                  suffix: "+",
                  label: "Projects shipped",
                },
                {
                  num: 5,
                  suffix: "+",
                  label: "Design systems built",
                },
              ].map((s) => (
                <StatItem
                  key={s.label}
                  {...s}
                  active={statsInView}
                />
              ))}
            </div>

            <div className="flex flex-col">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + i * 0.09,
                  }}
                  className="flex gap-6 lg:gap-10 py-6"
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      color: DIM,
                      width: 110,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {exp.period}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily:
                          "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: 15,
                        color: FG,
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        fontFamily:
                          "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        color: MUTED,
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { headlineRef: contactHeadlineRef, glowRef, buttonsRef } = useContactParallax();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex flex-col items-center gap-12 py-36 lg:py-48 px-6 overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <motion.div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse 900px 420px at 50% 72%, rgba(200,255,77,0.045) 0%, transparent 70%)",
            "radial-gradient(ellipse 900px 420px at 50% 72%, rgba(200,255,77,0.095) 0%, transparent 70%)",
            "radial-gradient(ellipse 900px 420px at 50% 72%, rgba(200,255,77,0.045) 0%, transparent 70%)",
          ],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 12,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: PURPLE,
        }}
      >
        {"04 — Let's build something"}
      </motion.p>

      <motion.h2
        ref={contactHeadlineRef}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-10 text-center"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(52px,9vw,120px)",
          lineHeight: 1,
          color: FG,
        }}
      >
        {"Let's "}
        <em
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            color: PURPLE,
          }}
        >
          talk
        </em>
        {" →"}
      </motion.h2>

      <motion.div
        ref={buttonsRef}
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="flex flex-wrap gap-4 justify-center relative z-10"
      >
        {[
          { label: "LinkedIn",  href: "https://www.linkedin.com/in/dheoryanars/",   filled: true  },
          { label: "Email",     href: "mailto:dheoryanputra@gmail.com",              filled: false },
          { label: "WhatsApp",  href: "https://wa.me/6281234567890",                 filled: false },
          { label: "Instagram", href: "https://www.instagram.com/dheeory/",         filled: false },
        ].map((btn) => (
          <motion.a
            key={btn.label}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 14,
              borderRadius: 32,
              padding: "12px 24px",
              textDecoration: "none",
              display: "inline-block",
              cursor: "pointer",
              ...(btn.filled
                ? {
                    background: PURPLE,
                    color: BG,
                    border: "none",
                  }
                : {
                    background: "transparent",
                    color: PURPLE,
                    border: `1px solid ${PURPLE}`,
                  }),
            }}
          >
            {btn.label}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function DeprecatedFooterSection() {
  const slabRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 50, y: 50, tx: 0, ty: 0 });

  const commitPointer = () => {
    const slab = slabRef.current;
    if (!slab) return;
    slab.style.setProperty("--mx", `${pointerRef.current.x}%`);
    slab.style.setProperty("--my", `${pointerRef.current.y}%`);
    slab.style.setProperty("--tx", `${pointerRef.current.tx}px`);
    slab.style.setProperty("--ty", `${pointerRef.current.ty}px`);
    frameRef.current = null;
  };

  const schedulePointer = () => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(commitPointer);
  };

  const handleBrandPointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointerRef.current = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      tx: (x - 50) * 0.16,
      ty: (y - 50) * 0.11,
    };
    schedulePointer();
  };

  const handleBrandPointerLeave = () => {
    pointerRef.current = { x: 50, y: 50, tx: 0, ty: 0 };
    schedulePointer();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-12">
        <div className="mx-auto max-w-[1280px] grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-center justify-center"
              style={{
                width: 28,
                height: 20,
                border: `2px solid ${FG}`,
                color: FG,
              }}
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  lineHeight: 1,
                }}
              >
                ++
              </span>
            </motion.div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#6f6f68",
              }}
            >
              © 2026 Dheoryan Putra Arsi
            </span>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {[
              {
                title: "Work",
                links: ["Selected cases", "Process", "About"],
              },
              {
                title: "Connect",
                links: ["LinkedIn", "Email", "Instagram"],
              },
              {
                title: "Status",
                links: ["Jakarta", "Available", "Design systems"],
              },
            ].map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: DIM,
                  }}
                >
                  {group.title}
                </span>
                {group.links.map((link) => (
                  <span
                    key={link}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      color: FG,
                    }}
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 justify-self-start md:justify-self-end"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#9aa4bc",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = FG)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9aa4bc")
              }
            >
              Back to top
            </span>
            <motion.svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={svgPaths.pa06ac80}
                stroke="#9AA4BC"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <section
        ref={slabRef}
        onPointerMove={handleBrandPointerMove}
        onPointerLeave={handleBrandPointerLeave}
        className="relative isolate overflow-hidden select-none"
        style={
          {
            "--mx": "50%",
            "--my": "50%",
            "--tx": "0px",
            "--ty": "0px",
            minHeight: "clamp(220px, 30vw, 420px)",
            background: "#2ff08a",
            cursor: "crosshair",
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.16) 13%, transparent 27%), linear-gradient(135deg, rgba(255,255,255,0.14), transparent 34%)",
            mixBlendMode: "soft-light",
            transition: "opacity 0.2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(10,10,10,0.98) 0 56px, transparent 58px)",
            mixBlendMode: "normal",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          className="absolute left-1/2 top-[clamp(24px,3vw,58px)] z-10 whitespace-nowrap"
          style={{
            transform:
              "translate(calc(-50% + var(--tx)), var(--ty))",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(112px, 20vw, 420px)",
            lineHeight: 0.72,
            color: BG,
            letterSpacing: 0,
            pointerEvents: "none",
            transition:
              "transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          DHEORY
        </div>
      </section>
    </footer>
  );
}

// ── Portfolio Page ────────────────────────────────────────────────────────────

function FooterSection() {
  const slabRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({
    x: 50,
    y: 50,
    tx: 0,
    ty: 0,
    rx: 0,
    ry: 0,
    depth: 0,
    active: 0,
  });

  const commitPointer = () => {
    const slab = slabRef.current;
    if (!slab) return;
    slab.style.setProperty("--mx", `${pointerRef.current.x}%`);
    slab.style.setProperty("--my", `${pointerRef.current.y}%`);
    slab.style.setProperty("--tx", `${pointerRef.current.tx}px`);
    slab.style.setProperty("--ty", `${pointerRef.current.ty}px`);
    slab.style.setProperty("--rx", `${pointerRef.current.rx}deg`);
    slab.style.setProperty("--ry", `${pointerRef.current.ry}deg`);
    slab.style.setProperty("--depth", `${pointerRef.current.depth}px`);
    slab.style.setProperty("--active", `${pointerRef.current.active}`);
    frameRef.current = null;
  };

  const schedulePointer = () => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(commitPointer);
  };

  const handleBrandPointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointerRef.current = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      tx: (x - 50) * 0.22,
      ty: (y - 50) * 0.14,
      rx: (50 - y) * 0.13,
      ry: (x - 50) * 0.11,
      depth: 36,
      active: 1,
    };
    schedulePointer();
  };

  const handleBrandPointerLeave = () => {
    pointerRef.current = {
      x: 50,
      y: 50,
      tx: 0,
      ty: 0,
      rx: 0,
      ry: 0,
      depth: 0,
      active: 0,
    };
    schedulePointer();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-12">
        <div className="mx-auto max-w-[1280px] flex flex-wrap items-center justify-between gap-6">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#6f6f68",
            }}
          >
            © 2026 Dheoryan Putra Arsi
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#6f6f68",
            }}
          >
            Designed &amp; built with intent
          </span>
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 group"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#6f6f68",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = MUTED)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6f6f68")
              }
            >
              Back to top
            </span>
            <motion.svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={svgPaths.pa06ac80}
                stroke="#6F6F68"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <section
        ref={slabRef}
        onPointerMove={handleBrandPointerMove}
        onPointerLeave={handleBrandPointerLeave}
        className="relative isolate overflow-hidden select-none"
        style={
          {
            "--mx": "50%",
            "--my": "50%",
            "--tx": "0px",
            "--ty": "0px",
            "--rx": "0deg",
            "--ry": "0deg",
            "--depth": "0px",
            "--active": "0",
            minHeight: "clamp(220px, 30vw, 420px)",
            background: BG2,
            cursor: "none",
            perspective: "900px",
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(204,110,248,0.10) 0%, rgba(204,110,248,0.04) 13%, transparent 27%), linear-gradient(135deg, rgba(255,255,255,0.03), transparent 34%)",
            mixBlendMode: "soft-light",
            transition: "opacity 0.2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(204,110,248,0.16) 0 52px, rgba(204,110,248,0.06) 54px, transparent 72px)",
            opacity: "calc(0.2 + (var(--active) * 0.72))",
            transition: "opacity 0.22s ease",
          }}
        />
        <div
          className="absolute z-20 rounded-full"
          style={{
            left: "var(--mx)",
            top: "var(--my)",
            width: "clamp(86px, 8vw, 128px)",
            height: "clamp(86px, 8vw, 128px)",
            border: "1px solid rgba(204,110,248,0.35)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06) inset, 0 18px 48px rgba(10,10,10,0.2)",
            transform:
              "translate(-50%, -50%) scale(calc(0.72 + (var(--active) * 0.28)))",
            opacity: "calc(var(--active) * 0.95)",
            pointerEvents: "none",
            transition:
              "opacity 0.22s ease, transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          aria-label="DHEORY"
          className="absolute left-1/2 top-[clamp(24px,3vw,58px)] z-10 flex whitespace-nowrap"
          style={{
            transform:
              "translate3d(calc(-50% + var(--tx)), var(--ty), 0) rotateX(var(--rx)) rotateY(var(--ry))",
            transformStyle: "preserve-3d",
            transformOrigin: "50% 58%",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(112px, 20vw, 420px)",
            lineHeight: 0.72,
            color: "rgba(204,110,248,0.13)",
            letterSpacing: 0,
            pointerEvents: "none",
            transition:
              "transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {"DHEORY".split("").map((letter, index) => {
            const offset = index - 2.5;
            return (
              <span
                key={letter + index}
                aria-hidden="true"
                style={
                  {
                    display: "inline-block",
                    textShadow:
                      "calc(var(--tx) * -0.08) calc(var(--ty) * -0.08) 0 rgba(204,110,248,0.06)",
                    transform:
                      `translate3d(calc(var(--tx) * ${offset * 0.018}), calc(var(--ty) * ${Math.abs(offset) * 0.012}), calc(var(--depth) * ${1 - Math.abs(offset) * 0.09})) rotateZ(${offset * 0.55}deg)`,
                    transition:
                      `transform 0.22s cubic-bezier(0.22, 1, 0.36, 1) ${index * 12}ms, text-shadow 0.22s ease`,
                    willChange: "transform",
                  } as React.CSSProperties
                }
              >
                {letter}
              </span>
            );
          })}
        </div>
      </section>
    </footer>
  );
}

function PortfolioPage({
  onNavigate,
}: {
  onNavigate: (slug: string) => void;
}) {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <Navbar
        onHome={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      />
      <HeroSection />
      <MarqueeSection />
      <WorkSection onNavigate={onNavigate} />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

// ── Case Study Wrapper ────────────────────────────────────────────────────────

function CaseStudyOutro({
  nextWork,
  onBack,
  onNavigate,
}: {
  nextWork: WorkItem | null;
  onBack: () => void;
  onNavigate: (slug: string) => void;
}) {
  return (
    <section
      className="px-6 md:px-10 lg:px-16"
      style={{
        background: BG,
        borderTop: "1px solid rgba(242,241,236,0.08)",
        borderBottom: "1px solid rgba(242,241,236,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1152px] py-14 md:py-16 lg:py-20">
        {nextWork?.slug && (
          <motion.button
            onClick={() => onNavigate(nextWork.slug!)}
            className="group flex w-full items-start justify-between gap-8 text-left"
            style={{
              background: "transparent",
              border: 0,
              borderBottom: "1px solid rgba(242,241,236,0.08)",
              cursor: "pointer",
              padding: "0 0 clamp(56px, 8vw, 112px)",
            }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <span className="flex min-w-0 flex-col gap-5">
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: DIM,
                  letterSpacing: "0.06em",
                }}
              >
                Next project
              </span>
              <span
                className="max-w-[860px]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(34px, 5vw, 64px)",
                  lineHeight: 1,
                  color: FG,
                  letterSpacing: 0,
                }}
              >
                {nextWork.title}
              </span>
            </span>
            <motion.span
              className="mt-1 flex shrink-0 items-center justify-center rounded-full"
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(242,241,236,0.1)",
                background: BG2,
                color: PURPLE,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
              }}
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↗
            </motion.span>
          </motion.button>
        )}

        <motion.button
          onClick={onBack}
          className="group mt-14 flex w-full items-end justify-between gap-8 text-left md:mt-16"
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: 0,
          }}
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <span className="flex min-w-0 flex-col gap-3">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: PURPLE,
              }}
            >
              ← Back to portfolio
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(34px, 4.8vw, 56px)",
                lineHeight: 1,
                color: FG,
                letterSpacing: 0,
              }}
            >
              View all work
            </span>
          </span>
          <span
            className="hidden shrink-0 text-right sm:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: DIM,
              letterSpacing: "0.04em",
            }}
          >
            Selected cases
          </span>
        </motion.button>
      </div>
    </section>
  );
}

function CaseStudyPage({
  slug,
  onBack,
  onNavigate,
}: {
  slug: string;
  onBack: () => void;
  onNavigate: (slug: string) => void;
}) {
  const Component = CASE_STUDIES[slug];
  const caseStudyParallaxRef = useCaseStudyParallax(slug);

  // Next project in work-grid order (wraps around at the end)
  const workIndex = WORKS.findIndex((w) => w.slug === slug);
  const nextWork =
    workIndex >= 0
      ? WORKS[(workIndex + 1) % WORKS.length]
      : null;

  // The imported case study components are static — delegate clicks
  // on their "Next project" rows and "Back to top" buttons.
  const handleDelegatedClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const target = e.target as HTMLElement;
    const row = target.closest(
      '[data-name="nRow"], [data-name="top"]',
    );
    if (row) {
      const txt = row.textContent || "";
      if (txt.includes("Next project")) {
        if (nextWork?.slug) onNavigate(nextWork.slug);
      } else if (
        txt.includes("Back to portfolio") ||
        txt.includes("View all work")
      ) {
        onBack();
      }
      return;
    }
    const p = target.closest("p");
    if (p?.textContent?.includes("Back to top")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      p?.textContent?.includes("View all work") ||
      p?.textContent?.includes("Back to portfolio")
    ) {
      onBack();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <motion.button
        onClick={onBack}
        className="fixed top-5 left-5 z-50 flex items-center gap-2"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: "8px 16px",
          cursor: "pointer",
        }}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        whileHover={{
          scale: 1.04,
          borderColor: "rgba(204,110,248,0.4)",
        }}
        whileTap={{ scale: 0.97 }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M10 1.5L3.5 8L10 14.5"
            stroke="#9a9a93"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: MUTED,
          }}
        >
          Back to work
        </span>
      </motion.button>

      <style>{`
        [data-name="nRow"], [data-name="top"] { cursor: pointer; }
        [data-name="nRow"]:hover p, [data-name="top"]:hover p { color: #cc6ef8; }
        /* Hide the static per-case-study copyright rows — the shared
           FooterSection below provides the real site footer. */
        [data-name="fw"],
        [data-name="nextWork"],
        [data-name="NextProject"],
        [data-name="Footer"],
        [data-name="footer"],
        [data-name="foot"],
        [data-name="foot-wrap"],
        [data-name="foot-wrap"] [data-name="footer"] { display: none; }
      `}</style>
      <div ref={caseStudyParallaxRef} className="overflow-x-auto">
        <div
          style={{
            minWidth: 1280,
            width: "fit-content",
            margin: "0 auto",
          }}
          onClick={handleDelegatedClick}
        >
          {Component ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Component />
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 14,
                  color: DIM,
                }}
              >
                Case study coming soon
              </span>
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: 14,
                  color: PURPLE,
                  border: `1px solid ${PURPLE}`,
                  borderRadius: 32,
                  padding: "12px 24px",
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                ← Back to portfolio
              </motion.button>
            </div>
          )}
        </div>
      </div>
      <CaseStudyOutro
        nextWork={nextWork}
        onBack={onBack}
        onNavigate={onNavigate}
      />
      <FooterSection />
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<"home" | string>("home");

  const navigateTo = (slug: string) => {
    setPage(slug);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    setPage("home");
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait">
      {page === "home" ? (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioPage onNavigate={navigateTo} />
        </motion.div>
      ) : (
        <motion.div
          key={page}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CaseStudyPage
            slug={page}
            onBack={goHome}
            onNavigate={navigateTo}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
