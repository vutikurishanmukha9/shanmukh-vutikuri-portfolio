import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 glass rounded-lg hover:border-primary/30 transition-all duration-300 group"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            ) : (
                <Moon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            )}
        </button>
    );
};
