import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

export const MotionButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block" // Ensure it doesn't break layout
        >
            <Button ref={ref} {...props} />
        </motion.div>
    );
});

MotionButton.displayName = "MotionButton";
