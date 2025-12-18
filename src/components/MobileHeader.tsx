import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

interface MobileHeaderProps {
    onMenuOpen: () => void;
    onLogoClick: () => void;
    scrolled: boolean;
}

export const MobileHeader = ({ onMenuOpen, onLogoClick, scrolled }: MobileHeaderProps) => {
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
        >
            <div
                className="h-16 px-4"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                {/* Logo - Left side */}
                <button
                    type="button"
                    onClick={onLogoClick}
                    className="text-xl font-bold font-display text-gradient-animate"
                >
                    Shanmukha
                </button>

                {/* Controls - Right side */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}
                >
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={onMenuOpen}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors rounded-lg bg-muted/50"
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};
