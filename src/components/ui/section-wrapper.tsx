
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    id?: string;
    delay?: number;
}

export const SectionWrapper = ({ children, className, id, delay = 0, ...props }: SectionWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={cn("py-20 lg:py-28 relative", className)}
            {...props}
        >
            {children}
        </motion.section>
    );
};
