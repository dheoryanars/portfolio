import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Hero parallax: headline + meta drift up as user scrolls ──────────────────

export function useHeroParallax() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (metaRef.current) {
        gsap.to(metaRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: metaRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (scrollRef.current) {
        gsap.to(scrollRef.current, {
          y: -20,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: scrollRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 0.8,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return { headlineRef, metaRef, scrollRef };
}

// ── Work cards: staggered depth as grid scrolls into view ────────────────────

export function useWorkCardParallax(index: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Each card row shifts by a different initial Y offset, then lands on 0
    const rowOffset = Math.floor(index / 3); // 0, 1, 2 for three rows
    const colOffset = (index % 3) * 8;      // subtle lateral stagger per column

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 30 + rowOffset * 20 + colOffset, rotateX: 4 },
        {
          y: 0,
          rotateX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return ref;
}

// ── About section: portrait and content at different scroll speeds ────────────

export function useAboutParallax() {
  const portraitRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (portraitRef.current) {
        gsap.to(portraitRef.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: portraitRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        });
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        });
      }

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return { portraitRef, contentRef, statsRef };
}

// ── Contact: headline scale + slow vertical drift ────────────────────────────

export function useContactParallax() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { y: 40, scale: 0.96 },
          {
            y: -30,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 1.4,
            },
          }
        );
      }

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: glowRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
          },
        });
      }

      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return { headlineRef, glowRef, buttonsRef };
}

// ── Process cards: fan in from bottom at staggered depths ────────────────────

export function useProcessParallax(index: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 40 + index * 12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "top 45%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [index]);

  return ref;
}

// Case studies: shared depth pass for imported Figma sections.
export function useCaseStudyParallax(slug: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const skipNames = new Set([
      "nav",
      "nrow",
      "nextwork",
      "nextproject",
      "footer",
      "foot",
      "fw",
      "foot-wrap",
    ]);

    const ctx = gsap.context(() => {
      const caseRoot = ref.current?.querySelector<HTMLElement>(
        '[data-name^="case-study"]',
      );
      if (!caseRoot) return;

      const sections = Array.from(caseRoot.children).filter(
        (child): child is HTMLElement => {
          if (!(child instanceof HTMLElement)) return false;
          const name = child.dataset.name || "";
          const normalizedName = name.toLowerCase();
          if (!name || skipNames.has(normalizedName)) return false;
          const rect = child.getBoundingClientRect();
          return rect.width >= 900 && rect.height >= 120;
        },
      );

      sections.forEach((section, index) => {
        const normalizedName = (section.dataset.name || "").toLowerCase();
        const isHero = normalizedName.includes("hero");
        gsap.set(section, { willChange: "transform, opacity" });
        gsap.fromTo(
          section,
          {
            y: isHero ? 0 : 42,
            opacity: isHero ? 1 : 0.72,
          },
          {
            y: isHero ? -34 : 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: isHero ? "top top" : "top 88%",
              end: isHero ? "bottom top" : "top 42%",
              scrub: isHero ? 1.4 : 1,
            },
            delay: index * 0.015,
          },
        );
      });

      const mediaCandidates = Array.from(
        caseRoot.querySelectorAll<HTMLElement>(
          [
            "img",
            "[data-name]",
          ].join(","),
        ),
      ).filter((el) => {
        const name = (
          el.getAttribute("data-name") ||
          el.tagName ||
          ""
        ).toLowerCase();
        const looksLikeMedia =
          el.tagName.toLowerCase() === "img" ||
          /(image|cover|thumb|screen|dashboard|viewport|clip|mockup|rectangle)/.test(
            name,
          );
        const rect = el.getBoundingClientRect();
        return looksLikeMedia && rect.width >= 320 && rect.height >= 160;
      });

      mediaCandidates.slice(0, 18).forEach((media, index) => {
        gsap.set(media, { willChange: "transform" });
        gsap.fromTo(
          media,
          {
            y: index % 2 === 0 ? 20 : 10,
            scale: 1.01,
          },
          {
            y: index % 2 === 0 ? -34 : -22,
            scale: 1.025,
            ease: "none",
            scrollTrigger: {
              trigger: media,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.6,
            },
          },
        );
      });

      window.setTimeout(() => ScrollTrigger.refresh(), 120);
    }, ref);

    return () => ctx.revert();
  }, [slug]);

  return ref;
}
