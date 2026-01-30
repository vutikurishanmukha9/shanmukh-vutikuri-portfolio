
import { useEffect, useRef } from 'react';

export const BackgroundCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const particles: Particle[] = [];
        const particleCount = 100; // Adjust for density

        // Mouse interaction
        const mouse = { x: -1000, y: -1000 };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            baseX: number;
            baseY: number;
            density: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.baseX = this.x;
                this.baseY = this.y;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow ambient movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 0.5;
                this.density = (Math.random() * 30) + 1;
                // Cyan/Purple variant colors
                const colors = ['rgba(0, 255, 242, ', 'rgba(168, 85, 247, ', 'rgba(255, 255, 255, '];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = this.color + '0.6)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Ambient movement
                this.baseX += this.vx;
                this.baseY += this.vy;

                // Wall bounce (ambient)
                if (this.baseX < 0 || this.baseX > width) this.vx *= -1;
                if (this.baseY < 0 || this.baseY > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const maxDistance = 150;
                const force = (maxDistance - distance) / maxDistance;
                const directionX = forceDirectionX * force * this.density;
                const directionY = forceDirectionY * force * this.density;

                if (distance < maxDistance) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Return to base position with easing
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX;
                        this.x -= dx / 20;
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY;
                        this.y -= dy / 20;
                    }
                }

                this.draw();
            }
        }

        const init = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            // Draw connecting lines
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const opacity = 1 - (distance / 100);
                        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.2})`; // Purple lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[b].y); // Interesting visual web effect (not direct line)
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
                particles[a].update();
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        const handleResize = () => {
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        }

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 mix-blend-screen"
        />
    );
};
