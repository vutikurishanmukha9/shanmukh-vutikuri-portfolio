import { useEffect, useState, useCallback } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

export const CustomCursor = () => {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState<CursorPosition>({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Check if it's a touch device on mount
    useEffect(() => {
        const checkTouchDevice = () => {
            setIsTouchDevice(
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            );
        };
        checkTouchDevice();
        window.addEventListener('resize', checkTouchDevice);
        return () => window.removeEventListener('resize', checkTouchDevice);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setDotPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
    }, [isVisible]);

    const handleMouseDown = useCallback(() => {
        setIsClicking(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsClicking(false);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsVisible(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    useEffect(() => {
        const handleElementHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.classList.contains('cursor-interactive');

            setIsHovering(!!isInteractive);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousemove', handleElementHover);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousemove', handleElementHover);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseDown, handleMouseUp, handleMouseEnter, handleMouseLeave]);

    // Smooth ring follow effect
    useEffect(() => {
        let animationFrame: number;
        let currentX = position.x;
        let currentY = position.y;

        const animate = () => {
            const dx = position.x - currentX;
            const dy = position.y - currentY;

            currentX += dx * 0.15;
            currentY += dy * 0.15;

            const ring = document.querySelector('.cursor-ring') as HTMLElement;
            if (ring) {
                ring.style.left = `${currentX}px`;
                ring.style.top = `${currentY}px`;
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [position]);

    // Don't render on touch devices or when not visible
    if (isTouchDevice || !isVisible) return null;

    return (
        <>
            <div
                className={`cursor-dot ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{
                    left: `${dotPosition.x}px`,
                    top: `${dotPosition.y}px`,
                }}
            />
            <div
                className={`cursor-ring ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
            />
        </>
    );
};
