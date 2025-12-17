import { useEffect } from 'react';
import { X, Home, User, Wrench, Briefcase, FolderKanban, Award, FileText, Mail } from 'lucide-react';

interface MobileNavDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    activeSection: string;
    onNavigate: (href: string) => void;
}

const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#career', label: 'Career', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FolderKanban },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#publications', label: 'Publications', icon: FileText },
    { href: '#contact', label: 'Contact', icon: Mail },
];

export const MobileNavDrawer = ({ isOpen, onClose, activeSection, onNavigate }: MobileNavDrawerProps) => {
    // Lock body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleNavigate = (href: string) => {
        onNavigate(href);
        onClose();
    };

    // Don't render anything on desktop
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        return null;
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
                aria-hidden={!isOpen}
            />

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] max-w-[85vw] bg-background z-[70] shadow-2xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ visibility: isOpen ? 'visible' : 'hidden' }}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="text-lg font-bold font-display bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                        Menu
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        className="p-2.5 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="Close menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="p-4 overflow-y-auto" style={{ height: 'calc(100% - 80px)' }}>
                    <nav className="flex flex-col gap-1">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.href.substring(1);

                            return (
                                <button
                                    key={item.href}
                                    type="button"
                                    onClick={() => handleNavigate(item.href)}
                                    className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                                            ? 'text-primary bg-primary/10 border border-primary/20'
                                            : 'text-foreground hover:bg-muted'
                                        }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: isOpen ? 'slideInFromRight 0.3s ease forwards' : 'none',
                                    }}
                                >
                                    <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span>{item.label}</span>
                                    {isActive && (
                                        <span className="ml-auto w-2 h-2 bg-primary rounded-full" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Social Links */}
                    <div className="mt-8 pt-6 border-t border-border">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 px-4">
                            Connect
                        </p>
                        <div className="flex gap-3 px-4">
                            <a
                                href="https://github.com/vutikurishanmukha9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com/in/shanmukha-vutikuri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a
                                href="mailto:vutikurishanmukh17@gmail.com"
                                className="p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                                aria-label="Email"
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
