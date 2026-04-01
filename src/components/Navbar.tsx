'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import NavItems from './NavItems';
import ActionButtons from './ActionButtons';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`navbar-glass navbar-border sticky top-0 right-0 left-0 z-50 h-16 transition-all duration-300 ${
                    isScrolled ? 'shadow-md' : ''
                }`}
            >
                <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-4'>
                    <Link href='/' className='group z-50 flex flex-shrink-0 items-center gap-2.5'>
                        <span className='logo-gradient header-font text-xl font-bold tracking-tight'>
                            Prince Patel
                        </span>
                    </Link>

                    <div className='mx-8 hidden flex-1 md:block'>
                        <NavItems />
                    </div>

                    <div className='hidden flex-shrink-0 items-center gap-3 md:flex'>
                        <ThemeToggle />
                        <ActionButtons />
                    </div>

                    <div className='flex items-center gap-3 md:hidden'>
                        <ThemeToggle />
                        <button
                            className='brand-gradient -mr-2 rounded-xl p-2.5 text-zinc-950 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg'
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
