import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

type FieldBox = {
  x: number;
  y: number;
  width: number;
  height: number;
  depth: number;
  phase: number;
  speed: number;
  alpha: number;
  filled: boolean;
};

type FieldLine = {
  axis: "horizontal" | "vertical";
  position: number;
  start: number;
  end: number;
  depth: number;
  phase: number;
  speed: number;
  alpha: number;
  dashed: boolean;
};

type FieldOrbit = {
  x: number;
  y: number;
  radius: number;
  depth: number;
  phase: number;
  speed: number;
  span: number;
  alpha: number;
  color: string;
};

type FieldNode = {
  x: number;
  y: number;
  radius: number;
  depth: number;
  phase: number;
  speed: number;
  glow: number;
  color: string;
};

type DotMatrix = {
  x: number;
  y: number;
  columns: number;
  rows: number;
  gap: number;
  depth: number;
  phase: number;
  speed: number;
  color: string;
};

type FieldConnection = {
  from: number;
  to: number;
  phase: number;
  speed: number;
  alpha: number;
};

const COLORS = {
  violet: "#c58bea",
  purple: "#8f5bb0",
  amber: "#e3a061",
  warm: "#f1d7bd",
  dim: "#6f557f",
};

function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function createField() {
  const random = createRandom(46291);
  const boxes: FieldBox[] = Array.from({ length: 24 }, (_, index) => ({
    x: random() * 0.94 - 0.02,
    y: random() * 0.96 - 0.02,
    width: 0.035 + random() * 0.1,
    height: 0.035 + random() * 0.12,
    depth: 0.35 + random() * 0.85,
    phase: random() * Math.PI * 2,
    speed: 0.08 + random() * 0.16,
    alpha: 0.08 + random() * 0.16,
    filled: index % 3 === 0,
  }));

  const lines: FieldLine[] = Array.from({ length: 28 }, (_, index) => ({
    axis: index % 2 === 0 ? "horizontal" : "vertical",
    position: random(),
    start: random() * 0.42,
    end: 0.58 + random() * 0.42,
    depth: 0.25 + random() * 0.75,
    phase: random() * Math.PI * 2,
    speed: 0.06 + random() * 0.12,
    alpha: 0.06 + random() * 0.11,
    dashed: index % 4 === 0,
  }));

  const orbits: FieldOrbit[] = Array.from({ length: 18 }, (_, index) => ({
    x: random(),
    y: random(),
    radius: 0.045 + random() * 0.16,
    depth: 0.4 + random() * 0.8,
    phase: random() * Math.PI * 2,
    speed: (index % 2 === 0 ? 1 : -1) * (0.05 + random() * 0.13),
    span: Math.PI * (0.65 + random() * 1.2),
    alpha: 0.12 + random() * 0.22,
    color:
      index % 5 === 0
        ? COLORS.amber
        : index % 3 === 0
          ? COLORS.warm
          : COLORS.violet,
  }));

  const nodes: FieldNode[] = Array.from({ length: 34 }, (_, index) => ({
    x: random(),
    y: random(),
    radius: index % 9 === 0 ? 3.5 + random() * 2.5 : 1.2 + random() * 2.8,
    depth: 0.4 + random() * 0.9,
    phase: random() * Math.PI * 2,
    speed: 0.08 + random() * 0.22,
    glow: index % 7 === 0 ? 16 + random() * 16 : 4 + random() * 9,
    color:
      index % 8 === 0
        ? COLORS.amber
        : index % 5 === 0
          ? COLORS.warm
          : index % 3 === 0
            ? COLORS.purple
            : COLORS.violet,
  }));

  const matrices: DotMatrix[] = Array.from({ length: 10 }, (_, index) => ({
    x: random() * 0.88,
    y: random() * 0.9,
    columns: 4 + Math.floor(random() * 6),
    rows: 3 + Math.floor(random() * 7),
    gap: 6 + random() * 5,
    depth: 0.3 + random() * 0.8,
    phase: random() * Math.PI * 2,
    speed: 0.16 + random() * 0.22,
    color: index % 4 === 0 ? COLORS.amber : COLORS.violet,
  }));

  const connections: FieldConnection[] = Array.from(
    { length: 18 },
    (_, index) => ({
      from: Math.floor(random() * nodes.length),
      to: (Math.floor(random() * nodes.length) + index + 3) % nodes.length,
      phase: random() * Math.PI * 2,
      speed: 0.08 + random() * 0.16,
      alpha: 0.08 + random() * 0.1,
    }),
  );

  return { boxes, lines, orbits, nodes, matrices, connections };
}

const FIELD = createField();

export default function HeroSystemField() {
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

    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let animationFrame = 0;
    let visible = true;
    let previousTimestamp = 0;
    let previousRenderTimestamp = 0;
    const frameInterval =
      1000 / (window.matchMedia("(pointer: coarse)").matches ? 24 : 30);
    const pointer = {
      x: 0.5,
      y: 0.46,
      targetX: 0.5,
      targetY: 0.46,
      influence: 0,
      targetInfluence: 0,
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

    const project = (
      x: number,
      y: number,
      depth: number,
      time: number,
      phase: number,
    ) => {
      const baseX =
        x * width + Math.sin(time * 0.13 + phase) * 3.5 * depth;
      const baseY =
        y * height + Math.cos(time * 0.11 + phase) * 3 * depth;
      const deltaX = baseX / width - pointer.x;
      const deltaY = baseY / height - pointer.y;
      const distance = Math.max(0.001, Math.hypot(deltaX, deltaY));
      const proximity =
        Math.max(0, 1 - distance / 0.3) * pointer.influence;
      const displacement = proximity * 5.5 * depth;

      return {
        x: baseX + (deltaX / distance) * displacement,
        y: baseY + (deltaY / distance) * displacement,
      };
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

      const time = timestamp / 1000;
      const delta = previousTimestamp
        ? Math.min(0.05, (timestamp - previousTimestamp) / 1000)
        : 1 / 60;
      previousTimestamp = timestamp;
      previousRenderTimestamp = timestamp;
      const positionEase = 1 - Math.exp(-delta * 5.5);
      const influenceEase = 1 - Math.exp(-delta * 4);
      pointer.x += (pointer.targetX - pointer.x) * positionEase;
      pointer.y += (pointer.targetY - pointer.y) * positionEase;
      pointer.influence +=
        (pointer.targetInfluence - pointer.influence) * influenceEase;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);

      context.lineWidth = 1;
      FIELD.lines.forEach((line) => {
        const drift = Math.sin(time * line.speed + line.phase) * 0.012;
        const position = line.position + drift;
        context.beginPath();
        context.setLineDash(line.dashed ? [2, 6] : []);
        context.strokeStyle = `rgba(197,139,234,${line.alpha})`;
        if (line.axis === "horizontal") {
          context.moveTo(line.start * width, position * height);
          context.lineTo(line.end * width, position * height);
        } else {
          context.moveTo(position * width, line.start * height);
          context.lineTo(position * width, line.end * height);
        }
        context.stroke();
      });
      context.setLineDash([]);

      FIELD.boxes.forEach((box) => {
        const point = project(
          box.x,
          box.y,
          box.depth,
          time * box.speed,
          box.phase,
        );
        const pulse = 0.78 + Math.sin(time * box.speed + box.phase) * 0.22;
        context.strokeStyle = `rgba(197,139,234,${box.alpha * pulse})`;
        context.fillStyle = `rgba(143,91,176,${box.alpha * 0.38 * pulse})`;
        context.lineWidth = 1;
        if (box.filled) {
          context.fillRect(
            point.x,
            point.y,
            box.width * width,
            box.height * height,
          );
        }
        context.strokeRect(
          point.x,
          point.y,
          box.width * width,
          box.height * height,
        );
      });

      FIELD.matrices.forEach((matrix) => {
        const point = project(
          matrix.x,
          matrix.y,
          matrix.depth,
          time * matrix.speed,
          matrix.phase,
        );
        for (let row = 0; row < matrix.rows; row += 1) {
          for (let column = 0; column < matrix.columns; column += 1) {
            const shimmer =
              0.16 +
              (Math.sin(
                time * matrix.speed * 4 +
                  matrix.phase +
                  row * 0.6 +
                  column * 0.45,
              ) +
                1) *
                0.11;
            context.fillStyle =
              matrix.color === COLORS.amber
                ? `rgba(227,160,97,${shimmer})`
                : `rgba(197,139,234,${shimmer})`;
            context.fillRect(
              point.x + column * matrix.gap,
              point.y + row * matrix.gap,
              2,
              2,
            );
          }
        }
      });

      FIELD.orbits.forEach((orbit) => {
        const center = project(
          orbit.x,
          orbit.y,
          orbit.depth,
          time * orbit.speed,
          orbit.phase,
        );
        const radius = orbit.radius * Math.min(width, height);
        const angle = orbit.phase + time * orbit.speed;
        context.beginPath();
        context.strokeStyle =
          orbit.color === COLORS.amber
            ? `rgba(227,160,97,${orbit.alpha})`
            : orbit.color === COLORS.warm
              ? `rgba(241,215,189,${orbit.alpha})`
              : `rgba(197,139,234,${orbit.alpha})`;
        context.lineWidth = 1;
        context.arc(center.x, center.y, radius, angle, angle + orbit.span);
        context.stroke();

        const satelliteAngle = angle + orbit.span * 0.64;
        const satelliteX = center.x + Math.cos(satelliteAngle) * radius;
        const satelliteY = center.y + Math.sin(satelliteAngle) * radius;
        context.fillStyle = orbit.color;
        context.fillRect(satelliteX - 1.5, satelliteY - 1.5, 3, 3);
      });

      FIELD.connections.forEach((connection) => {
        const source = FIELD.nodes[connection.from];
        const target = FIELD.nodes[connection.to];
        const from = project(
          source.x,
          source.y,
          source.depth,
          time * connection.speed,
          connection.phase,
        );
        const to = project(
          target.x,
          target.y,
          target.depth,
          time * connection.speed,
          connection.phase + 1.2,
        );
        context.beginPath();
        context.strokeStyle = `rgba(197,139,234,${connection.alpha})`;
        context.setLineDash([2, 7]);
        context.moveTo(from.x, from.y);
        context.quadraticCurveTo(
          (from.x + to.x) / 2,
          (from.y + to.y) / 2 +
            Math.sin(time * connection.speed + connection.phase) * 28,
          to.x,
          to.y,
        );
        context.stroke();
      });
      context.setLineDash([]);

      context.globalCompositeOperation = "lighter";
      FIELD.nodes.forEach((node) => {
        const point = project(
          node.x,
          node.y,
          node.depth,
          time * node.speed,
          node.phase,
        );
        const dx = point.x / width - pointer.x;
        const dy = point.y / height - pointer.y;
        const proximity =
          Math.max(0, 1 - Math.hypot(dx, dy) / 0.24) *
          pointer.influence;
        const pulse =
          0.74 + Math.sin(time * (0.8 + node.speed) + node.phase) * 0.26;
        const radius = node.radius * (pulse + proximity * 0.45);
        const repel = proximity * 4 * node.depth;
        const nodeX = point.x + dx * repel;
        const nodeY = point.y + dy * repel;

        context.beginPath();
        context.shadowColor = node.color;
        context.shadowBlur =
          node.glow > 15 || proximity > 0.35
            ? Math.min(18, node.glow * 0.65 + proximity * 10)
            : 0;
        context.fillStyle = node.color;
        context.globalAlpha = 0.42 + pulse * 0.34 + proximity * 0.22;
        context.arc(nodeX, nodeY, radius, 0, Math.PI * 2);
        context.fill();

        if (node.radius > 3) {
          context.beginPath();
          context.globalAlpha = 0.28 + proximity * 0.22;
          context.strokeStyle = node.color;
          context.lineWidth = 1;
          context.arc(
            nodeX,
            nodeY,
            radius * (2.5 + pulse),
            0,
            Math.PI * 2,
          );
          context.stroke();
        }
      });
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      context.shadowBlur = 0;

      if (!reduceMotion && visible) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = host.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;
      pointer.targetInfluence = inside ? 1 : 0;
      if (!inside) return;
      pointer.targetX = (event.clientX - bounds.left) / bounds.width;
      pointer.targetY = (event.clientY - bounds.top) / bounds.height;
    };

    const handlePointerLeave = () => {
      pointer.targetInfluence = 0;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(0);
    });
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio >= 0.28;
        if (visible && !reduceMotion) {
          window.cancelAnimationFrame(animationFrame);
          previousTimestamp = 0;
          previousRenderTimestamp = 0;
          animationFrame = window.requestAnimationFrame(draw);
        } else {
          window.cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: [0, 0.28] },
    );

    resize();
    resizeObserver.observe(host);
    intersectionObserver.observe(host);
    host.addEventListener("pointermove", handlePointerMove, { passive: true });
    host.addEventListener("pointerleave", handlePointerLeave);
    if (reduceMotion) {
      draw(0);
    } else {
      animationFrame = window.requestAnimationFrame(draw);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-auto absolute inset-0 z-0 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0b0710 0%, #08070b 52%, #100a15 100%)",
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
            "radial-gradient(ellipse at 50% 49%, rgba(5,5,8,0.5) 0%, rgba(5,5,8,0.28) 36%, rgba(5,5,8,0.04) 68%, transparent 82%), linear-gradient(180deg, rgba(5,5,8,0.4) 0%, rgba(5,5,8,0.1) 38%, rgba(5,5,8,0.78) 100%)",
        }}
      />
    </div>
  );
}
