import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type HyperspaceStar = {
  x: number;
  y: number;
  z: number;
  speed: number;
  size: number;
  color: "violet" | "warm" | "amber";
};

function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function resetStar(
  star: HyperspaceStar,
  random: () => number,
  initial = false,
) {
  const angle = random() * Math.PI * 2;
  const radius = 0.08 + Math.pow(random(), 0.7) * 0.82;
  star.x = Math.cos(angle) * radius;
  star.y = Math.sin(angle) * radius * 0.58;
  star.z = initial ? 0.12 + random() * 1.18 : 0.92 + random() * 0.38;
  star.speed = 0.72 + random() * 0.72;
  star.size = 0.55 + random() * 1.15;
}

export default function HyperspaceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!context) return;

    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const random = createRandom(73019);
    const starCount = coarsePointer ? 54 : 92;
    const stars: HyperspaceStar[] = Array.from(
      { length: starCount },
      (_, index) => {
        const star: HyperspaceStar = {
          x: 0,
          y: 0,
          z: 1,
          speed: 1,
          size: 1,
          color:
            index % 17 === 0
              ? "amber"
              : index % 5 === 0
                ? "warm"
                : "violet",
        };
        resetStar(star, random, true);
        return star;
      },
    );

    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let animationFrame = 0;
    let visible = false;
    let wasVisible = false;
    let previousTimestamp = 0;
    let previousRenderTimestamp = 0;
    let burst = 0;
    const frameInterval = 1000 / (coarsePointer ? 24 : 30);
    const vanishingPoint = {
      x: 0.5,
      y: 0.48,
      targetX: 0.5,
      targetY: 0.48,
    };

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (timestamp: number) => {
      if (
        !reduceMotion &&
        previousRenderTimestamp > 0 &&
        timestamp - previousRenderTimestamp < frameInterval
      ) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      const delta = previousTimestamp
        ? Math.min(0.05, (timestamp - previousTimestamp) / 1000)
        : 1 / 30;
      previousTimestamp = timestamp;
      previousRenderTimestamp = timestamp;

      const pointEase = 1 - Math.exp(-delta * 3.2);
      vanishingPoint.x +=
        (vanishingPoint.targetX - vanishingPoint.x) * pointEase;
      vanishingPoint.y +=
        (vanishingPoint.targetY - vanishingPoint.y) * pointEase;
      burst = Math.max(0, burst - delta * 0.58);

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      const centerX = vanishingPoint.x * width;
      const centerY = vanishingPoint.y * height;
      const projectionScale = Math.min(width, height) * 0.58;
      const travelSpeed = reduceMotion ? 0 : 0.12 + burst * 0.48;

      context.globalCompositeOperation = "lighter";
      stars.forEach((star) => {
        const previousZ = star.z;
        if (!reduceMotion) {
          star.z -= delta * travelSpeed * star.speed;
        }

        const project = (z: number) => ({
          x: centerX + (star.x / z) * projectionScale,
          y: centerY + (star.y / z) * projectionScale,
        });
        const current = project(Math.max(0.04, star.z));
        const previous = project(Math.max(0.04, previousZ));
        const outside =
          current.x < -80 ||
          current.x > width + 80 ||
          current.y < -80 ||
          current.y > height + 80;

        if (star.z <= 0.045 || outside) {
          resetStar(star, random);
          return;
        }

        const proximity = Math.max(0, Math.min(1, 1 - star.z / 1.3));
        const streakBoost = 1 + burst * 2.4;
        const tailX = current.x - (current.x - previous.x) * streakBoost;
        const tailY = current.y - (current.y - previous.y) * streakBoost;
        const alpha = 0.16 + proximity * 0.56;
        const color =
          star.color === "amber"
            ? `rgba(227,160,97,${alpha * 0.72})`
            : star.color === "warm"
              ? `rgba(241,215,189,${alpha * 0.72})`
              : `rgba(204,110,248,${alpha})`;

        context.beginPath();
        context.moveTo(tailX, tailY);
        context.lineTo(current.x, current.y);
        context.strokeStyle = color;
        context.lineWidth = star.size + proximity * 0.8;
        context.stroke();

        if (proximity > 0.4) {
          context.beginPath();
          context.fillStyle = color;
          context.arc(
            current.x,
            current.y,
            star.size * (0.65 + proximity * 0.55),
            0,
            Math.PI * 2,
          );
          context.fill();
        }
      });
      context.globalCompositeOperation = "source-over";

      if (!reduceMotion && visible) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (coarsePointer || event.pointerType === "touch") return;
      const bounds = host.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        vanishingPoint.targetX = 0.5;
        vanishingPoint.targetY = 0.48;
        return;
      }

      const localX = (event.clientX - bounds.left) / bounds.width;
      const localY = (event.clientY - bounds.top) / bounds.height;
      vanishingPoint.targetX = 0.5 + (localX - 0.5) * 0.24;
      vanishingPoint.targetY = 0.48 + (localY - 0.5) * 0.18;
    };

    const handlePointerLeave = () => {
      vanishingPoint.targetX = 0.5;
      vanishingPoint.targetY = 0.48;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.12;
        if (visible && !wasVisible) {
          burst = 1;
        }
        wasVisible = visible;

        if (visible && !reduceMotion) {
          window.cancelAnimationFrame(animationFrame);
          previousTimestamp = 0;
          previousRenderTimestamp = 0;
          animationFrame = window.requestAnimationFrame(draw);
        } else {
          window.cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: [0, 0.12] },
    );

    resize();
    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerLeave);

    if (reduceMotion) {
      draw(0);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 48%, rgba(74,35,96,0.28) 0%, rgba(12,12,11,0.2) 42%, rgba(10,10,10,0.92) 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,0.28) 0%, transparent 36%, rgba(10,10,10,0.36) 100%)",
        }}
      />
    </div>
  );
}
