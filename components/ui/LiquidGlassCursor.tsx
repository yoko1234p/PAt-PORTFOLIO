'use client';

import React, { useEffect, useRef, useState } from 'react';

// Utility functions
function smoothStep(a: number, b: number, t: number): number {
  t = Math.max(0, Math.min(1, (t - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function length(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}

function roundedRectSDF(
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
): number {
  const qx = Math.abs(x) - width + radius;
  const qy = Math.abs(y) - height + radius;
  return Math.min(Math.max(qx, qy), 0) + length(Math.max(qx, 0), Math.max(qy, 0)) - radius;
}

function texture(x: number, y: number) {
  return { type: 't', x, y };
}

export const LiquidGlassCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const feDisplacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  const baseDisplacementScaleRef = useRef(1);

  // Use static ID to avoid hydration mismatch
  const [filterId] = useState('liquid-glass-filter');
  const [mounted, setMounted] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const width = 64;
  const height = 64;
  const canvasDPI = 1;
  const interactiveSelector =
    'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const feImage = feImageRef.current;
    const feDisplacementMap = feDisplacementMapRef.current;

    if (!container || !canvas || !feImage || !feDisplacementMap) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Setup canvas
    canvas.width = width * canvasDPI;
    canvas.height = height * canvasDPI;

    // Fragment shader function
    const fragment = (uv: { x: number; y: number }) => {
      const ix = uv.x - 0.5;
      const iy = uv.y - 0.5;
      const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
      const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
      const scaled = smoothStep(0, 1, displacement);
      return texture(ix * scaled + 0.5, iy * scaled + 0.5);
    };

    // Update shader
    const updateShader = () => {
      const w = width * canvasDPI;
      const h = height * canvasDPI;
      const data = new Uint8ClampedArray(w * h * 4);

      let maxScale = 0;
      const rawValues: number[] = [];

      for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % w;
        const y = Math.floor(i / 4 / w);
        const pos = fragment({ x: x / w, y: y / h });
        const dx = pos.x * w - x;
        const dy = pos.y * h - y;
        maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
        rawValues.push(dx, dy);
      }

      maxScale *= 0.5;

      let index = 0;
      for (let i = 0; i < data.length; i += 4) {
        const r = rawValues[index++] / maxScale + 0.5;
        const g = rawValues[index++] / maxScale + 0.5;
        data[i] = r * 255;
        data[i + 1] = g * 255;
        data[i + 2] = 0;
        data[i + 3] = 255;
      }

      context.putImageData(new ImageData(data, w, h), 0, 0);
      feImage.setAttributeNS('http://www.w3.org/1999/xlink', 'href', canvas.toDataURL());
      const baseScale = (maxScale / canvasDPI) * 1.35;
      baseDisplacementScaleRef.current = baseScale;
      feDisplacementMap.setAttribute('scale', baseScale.toString());
    };

    updateShader();

    // Mouse tracking for cursor following
    const updateHoverState = (clientX: number, clientY: number) => {
      const hoveredElement = document.elementFromPoint(clientX, clientY);
      const isInteractive = hoveredElement ? hoveredElement.closest(interactiveSelector) !== null : false;

      setIsHoveringInteractive((prev) => {
        if (prev === isInteractive) {
          return prev;
        }
        return isInteractive;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      container.style.left = `${e.clientX}px`;
      container.style.top = `${e.clientY}px`;
      updateHoverState(e.clientX, e.clientY);
    };

    const handlePointerDown = () => {
      setIsClicking(true);
    };

    const handlePointerUp = () => {
      setIsClicking(false);
    };

    const handlePointerLeave = () => {
      setIsHoveringInteractive(false);
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('blur', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('blur', handlePointerUp);
    };
  }, [mounted, interactiveSelector]);

  useEffect(() => {
    const feDisplacementMap = feDisplacementMapRef.current;
    if (!feDisplacementMap) return;

    const hoverMultiplier = isHoveringInteractive ? 1.45 : 1;
    const clickMultiplier = isClicking ? 1.2 : 1;
    const scale = baseDisplacementScaleRef.current * hoverMultiplier * clickMultiplier;
    feDisplacementMap.setAttribute('scale', scale.toString());
  }, [isHoveringInteractive, isClicking]);

  const hoverScale = isHoveringInteractive ? 1.08 : 1;
  const clickScale = isClicking ? 0.96 : 1;
  const cursorScale = hoverScale * clickScale;
  const cursorOpacity = isHoveringInteractive ? 0.95 : 0.85;

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* SVG Filter */}
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="0"
        height="0"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      >
        <defs>
          <filter
            id={filterId}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width={width}
            height={height}
          >
            <feImage
              ref={feImageRef}
              id={`${filterId}-map`}
              width={width}
              height={height}
            />
            <feDisplacementMap
              ref={feDisplacementMapRef}
              in="SourceGraphic"
              in2={`${filterId}-map`}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Hidden canvas */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Cursor container */}
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'hidden',
          borderRadius: '50%',
          boxShadow: isHoveringInteractive
            ? '0 4px 16px rgba(12, 69, 102, 0.35), 0 -6px 16px inset rgba(255, 255, 255, 0.22)'
            : '0 2px 8px rgba(0, 0, 0, 0.15), 0 -5px 15px inset rgba(0, 0, 0, 0.08)',
          backdropFilter: `url(#${filterId}) blur(0.6px) contrast(1.2) brightness(1.12) saturate(1.2)`,
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: cursorOpacity,
          background: isHoveringInteractive
            ? 'radial-gradient(circle at 28% 28%, rgba(255, 255, 255, 0.25), transparent 60%)'
            : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), transparent 60%)',
          transition: 'transform 0.18s ease, opacity 0.18s ease, box-shadow 0.28s ease, background 0.28s ease',
        }}
      />
    </>
  );
};
