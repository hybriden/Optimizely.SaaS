'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');
    const [mounted, setMounted] = useState(false);

    // Load theme from localStorage on mount
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Default to dark theme
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        // Update DOM
        document.documentElement.classList.toggle('dark', newTheme === 'dark');

        // Save to localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Prevent flash of incorrect theme
    if (!mounted) {
        return (
            <div className="w-[52px] h-[28px] rounded-full bg-[var(--border-medium)]" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center h-[28px] w-[52px] rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]"
            style={{
                backgroundColor: theme === 'dark' ? 'var(--brand-teal)' : 'var(--color-neutral-300)'
            }}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            aria-pressed={theme === 'dark'}
        >
            {/* Toggle Circle */}
            <span
                className="inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg transition-transform duration-300"
                style={{
                    transform: theme === 'dark' ? 'translateX(27px)' : 'translateX(3px)'
                }}
            />

            {/* Sun Icon (Light Mode) */}
            <svg
                className="absolute left-[6px] w-4 h-4 transition-opacity duration-300"
                style={{
                    opacity: theme === 'light' ? '1' : '0',
                    color: theme === 'light' ? 'white' : 'var(--color-neutral-500)'
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>

            {/* Moon Icon (Dark Mode) */}
            <svg
                className="absolute right-[6px] w-4 h-4 transition-opacity duration-300"
                style={{
                    opacity: theme === 'dark' ? '1' : '0',
                    color: theme === 'dark' ? 'var(--bg-primary)' : 'white'
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    );
}
