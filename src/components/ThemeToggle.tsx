import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2.5 glass rounded-lg hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {/* Animated icon container */}
            <div className="relative w-5 h-5">
                {/* Sun icon - visible in dark mode */}
                <Sun
                    className={`absolute inset-0 h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${theme === 'dark'
                            ? 'rotate-0 scale-100 opacity-100'
                            : 'rotate-90 scale-0 opacity-0'
                        }`}
                />
                {/* Moon icon - visible in light mode */}
                <Moon
                    className={`absolute inset-0 h-5 w-5 text-muted-foreground group-hover:text-primary transition-all duration-500 ${theme === 'light'
                            ? 'rotate-0 scale-100 opacity-100'
                            : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </div>
        </button>
    );
};
