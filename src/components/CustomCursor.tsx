import { useEffect, useRef, useState, useCallback } from 'react';

export const CustomCursor = () => {
    const ringRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });
    const rafId = useRef<number>(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            );
        };
        checkTouch();
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const onMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);

            // Dot follows instantly via direct DOM manipulation (no React re-render)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }

            // Check hover state
            const target = e.target as HTMLElement;
            const interactive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.classList.contains('cursor-interactive');
            setIsHovering(!!interactive);
        };

        const onEnter = () => setIsVisible(true);
        const onLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', onMove, { passive: true });
        document.body.addEventListener('mouseenter', onEnter);
        document.body.addEventListener('mouseleave', onLeave);

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.body.removeEventListener('mouseenter', onEnter);
            document.body.removeEventListener('mouseleave', onLeave);
        };
    }, [isTouchDevice, isVisible]);

    // Single persistent rAF loop for ring follow — never restarts
    useEffect(() => {
        if (isTouchDevice) return;

        const animate = () => {
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
            }

            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafId.current);
    }, [isTouchDevice]);

    if (isTouchDevice || !isVisible) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
                style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}
            />
            <div
                ref={ringRef}
                className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
                style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998 }}
            />
        </>
    );
};
