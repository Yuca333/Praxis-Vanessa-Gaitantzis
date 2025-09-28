
import React, { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    inactiveZone = 0.7,
    proximity = 80,
    spread = 150,
    glow = true,
    className,
    disabled = false,
    borderWidth = 1,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        const element = containerRef.current;
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
        }

        const center = [rect.left + rect.width * 0.5, rect.top + rect.height * 0.5];
        const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
        }

        const isActive =
            mouseX > rect.left - proximity &&
            mouseX < rect.left + rect.width + proximity &&
            mouseY > rect.top - proximity &&
            mouseY < rect.top + rect.height + proximity;

        element.style.setProperty("--active", isActive ? "1" : "0");
        
        if (isActive) {
            const x = mouseX - rect.left;
            const y = mouseY - rect.top;
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        }

      },
      [inactiveZone, proximity]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      handleMove(); // Initial call

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <div
        ref={containerRef}
        style={{
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          // FIX: Replaced template literal with string concatenation to avoid parsing errors.
          '--glow-size': spread + 'px',
          '--glow-color-1': '#dd7bbb',
          '--glow-color-2': '#d79f1e',
          '--glow-color-3': '#5a922c',
          '--glow-color-4': '#4c7894',
          // FIX: Replaced template literal with string concatenation to avoid parsing errors.
          '--glow-border-width': borderWidth + 'px',
          '--active': glow ? '1' : '0',
        } as React.CSSProperties}
        className={cn(
          "pointer-events-none absolute inset-[calc(-1*var(--glow-border-width))] rounded-[inherit]",
          "opacity-[var(--active)] transition-opacity duration-500",
          "before:content-[''] before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-[conic-gradient(from_90deg_at_50%_50%,var(--glow-color-1),var(--glow-color-2),var(--glow-color-3),var(--glow-color-4),var(--glow-color-1))]",
          "before:[mask:radial-gradient(farthest-side_at_var(--mouse-x)_var(--mouse-y),#000,transparent),linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]",
          "before:[mask-composite:intersect]",
          "before:[mask-size:var(--glow-size)_var(--glow-size),auto,auto]",
          "before:[mask-repeat:no-repeat,no-repeat,no-repeat]",
          className,
          disabled && "!hidden"
        )}
      />
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
