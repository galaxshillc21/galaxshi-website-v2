"use client";

import { MousePointer2, MousePointerClick } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type CursorPosition = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const featureEnabled = useMemo(() => process.env.NEXT_PUBLIC_CUSTOM_CURSOR !== "false", []);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (!featureEnabled || typeof window === "undefined") {
      return;
    }

    const canUseCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateSupport = () => {
      setIsActive(canUseCustomCursor.matches && !prefersReducedMotion.matches);
    };

    updateSupport();

    canUseCustomCursor.addEventListener("change", updateSupport);
    prefersReducedMotion.addEventListener("change", updateSupport);

    return () => {
      canUseCustomCursor.removeEventListener("change", updateSupport);
      prefersReducedMotion.removeEventListener("change", updateSupport);
    };
  }, [featureEnabled]);

  useEffect(() => {
    if (!isActive || typeof window === "undefined") {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };

    const handleLeave = () => {
      setIsVisible(false);
    };

    const handleEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleWindowBlur = () => {
      setIsClicking(false);
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseout", handleLeave);
    window.addEventListener("mouseover", handleEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
      window.removeEventListener("mouseover", handleEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [isActive]);

  if (!featureEnabled || !isActive) {
    return null;
  }

  return (
    <>
      <style>{`
        html, body, a, button, [role="button"] {
          cursor: none !important;
        }

        input, textarea, select, [contenteditable="true"] {
          cursor: text !important;
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-150"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      >
        {isClicking ? <MousePointerClick className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.60)]" strokeWidth={2.2} /> : <MousePointer2 className="h-5 w-5 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]" strokeWidth={2.2} />}
      </div>
    </>
  );
}
