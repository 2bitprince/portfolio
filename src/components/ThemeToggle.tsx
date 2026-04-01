'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='theme-toggle-btn relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-zinc-700/50 transition-all duration-300 hover:scale-105 hover:border-zinc-600 dark:border-zinc-700/50'
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <Sun
                className={`absolute h-[18px] w-[18px] text-amber-500 transition-all duration-300 ${
                    theme === 'dark'
                        ? 'rotate-90 scale-0 opacity-0'
                        : 'rotate-0 scale-100 opacity-100'
                }`}
            />
            <Moon
                className={`absolute h-[18px] w-[18px] text-purple-400 transition-all duration-300 ${
                    theme === 'dark'
                        ? 'rotate-0 scale-100 opacity-100'
                        : '-rotate-90 scale-0 opacity-0'
                }`}
            />
        </button>
    );
}
