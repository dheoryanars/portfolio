import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type Mood = "idle" | "curious" | "happy" | "sleepy";

const PURPLE = "#cc6ef8";
const FG = "#f2f1ec";
const BG = "#0a0a0a";
const INTRO_MESSAGE = "Hi, I'm Equinox. Dheoryan's virtual pet.";
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
const SLEEPY_MESSAGES = [
  "Equinox is resting. Wake me with a tap.",
  "Low battery, high style.",
  "I am dreaming in purple pixels.",
  "Quiet mode active. Still adorable.",
];

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function pickMessage(list: string[], seed: number) {
  return list[Math.abs(seed) % list.length];
}

export default function VirtualPet() {
  const [mood, setMood] = useState<Mood>("idle");
  const [blink, setBlink] = useState(false);
  const [charge, setCharge] = useState(0);
  const [message, setMessage] = useState(INTRO_MESSAGE);
  const lastPointerRef = useRef(Date.now());
  const lastMessageRef = useRef(Date.now());
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
    const handlePointerMove = (event: PointerEvent) => {
      lastPointerRef.current = Date.now();
      setMood((current) => (current === "happy" ? current : "curious"));
      if (Date.now() - lastMessageRef.current > 5200) {
        setMessage(
          pickMessage(CURIOUS_MESSAGES, Math.floor(Date.now() / 1000)),
        );
        lastMessageRef.current = Date.now();
      }

      const anchorX = window.innerWidth - 72;
      const anchorY = window.innerHeight - 72;
      x.set(clamp((event.clientX - anchorX) * 0.08, -18, 18));
      y.set(clamp((event.clientY - anchorY) * 0.08, -18, 18));
    };

    const pointerInterval = window.setInterval(() => {
      if (Date.now() - lastPointerRef.current > 9000) {
        setMood("sleepy");
        if (Date.now() - lastMessageRef.current > 5000) {
          setMessage(
            pickMessage(SLEEPY_MESSAGES, Math.floor(Date.now() / 2200)),
          );
          lastMessageRef.current = Date.now();
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
  }, [x, y]);

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
    if (mood === "happy") return "#d98aff";
    if (mood === "sleepy") return "#8061a8";
    if (mood === "curious") return PURPLE;
    return "#a86be9";
  }, [mood]);

  const eyeHeight = mood === "sleepy" || blink ? 2 : mood === "happy" ? 8 : 6;
  const chargeLevel = charge % 4;

  const handlePet = () => {
    setCharge((value) => {
      const nextCharge = value + 1;
      setMessage(pickMessage(HAPPY_MESSAGES, nextCharge));
      return nextCharge;
    });
    setMood("happy");
    lastMessageRef.current = Date.now();
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

    if (messageTimerRef.current !== null) {
      window.clearTimeout(messageTimerRef.current);
    }
    messageTimerRef.current = window.setTimeout(() => {
      setMessage(INTRO_MESSAGE);
    }, 3600);
  };

  return (
    <motion.button
      type="button"
      aria-label="Pet the DHEORY companion"
      onClick={handlePet}
      className="fixed bottom-5 right-5 z-[70] hidden size-[74px] items-center justify-center overflow-visible md:flex"
      style={{
        x: springX,
        y: springY,
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
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: mood === "happy" ? 1.05 : 1,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        aria-live="polite"
        className="absolute bottom-[86px] right-0 w-[224px] text-left"
        style={{
          border: "1px solid rgba(242,241,236,0.1)",
          borderRadius: 10,
          background:
            "linear-gradient(180deg, rgba(18,18,18,0.9), rgba(10,10,10,0.82))",
          boxShadow:
            "0 18px 48px rgba(0,0,0,0.32), 0 0 34px rgba(204,110,248,0.1)",
          padding: "12px 14px",
          color: FG,
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          lineHeight: 1.5,
          letterSpacing: 0,
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, y: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
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
          scale: mood === "happy" ? [1, 1.14, 1] : [1, 1.06, 1],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        aria-hidden
        className="relative flex size-[48px] items-center justify-center"
        animate={{
          y: mood === "sleepy" ? [2, 5, 2] : [0, -3, 0],
          rotate: mood === "happy" ? [-3, 3, -3] : 0,
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="absolute inset-0"
          style={{
            borderRadius: 12,
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
        <span className="relative flex items-center gap-[7px]">
          {[0, 1].map((eye) => (
            <motion.span
              key={eye}
              style={{
                width: 7,
                height: eyeHeight,
                borderRadius: 3,
                background: mood === "sleepy" ? "#d6c3e8" : FG,
                boxShadow:
                  mood === "happy"
                    ? "0 0 10px rgba(242,241,236,0.75)"
                    : "none",
              }}
              animate={{
                y: mood === "curious" ? (eye === 0 ? -1 : 1) : 0,
              }}
              transition={{ duration: 0.24 }}
            />
          ))}
        </span>
      </motion.span>

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
  );
}
