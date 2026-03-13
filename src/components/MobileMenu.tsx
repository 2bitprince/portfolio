'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Smartphone, ChevronDown, ChevronRight } from 'lucide-react';
import { navItems, megamenu1, megamenu2 } from './NavItems';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

    if (!isOpen) return null;

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const getSubMenuData = (id: string) => {
        if (id === 'code-snippets') return megamenu1;
        if (id === 'blogs-by-tags') return megamenu2;
        return null;
    };

    return (
        <div className='page-gradient fixed inset-0 z-50 overflow-y-auto md:hidden'>
            <div className='sticky top-0 z-10 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/80 p-4 backdrop-blur-sm'>
                <div className='flex items-center gap-2.5'>
                    <span className='logo-gradient header-font text-xl font-bold tracking-tight'>
                        2bitprince
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className='-mr-2 cursor-pointer rounded-xl bg-zinc-800/50 p-2.5 text-zinc-400 shadow-sm transition-colors hover:bg-zinc-800 hover:text-zinc-50'
                >
                    <X className='h-5 w-5' />
                </button>
            </div>

            <div className='space-y-2 p-4 pb-24'>
                {navItems.map((item) => {
                    const subMenuData = getSubMenuData(item.id);
                    const isActive = activeAccordion === item.id;

                    if (subMenuData) {
                        return (
                            <div
                                key={item.id}
                                className={`rounded-xl border transition-all duration-300 ${
                                    isActive
                                        ? 'border-zinc-800 bg-zinc-900 shadow-md'
                                        : 'border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900/50'
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className='flex w-full items-center justify-between p-4'
                                >
                                    <div className='flex items-center gap-3'>
                                        <span className='font-semibold text-zinc-100'>
                                            {item.label}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                                            isActive ? 'rotate-180 text-zinc-100' : ''
                                        }`}
                                    />
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        isActive
                                            ? 'max-h-[1000px] opacity-100'
                                            : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className='space-y-6 px-4 pt-2 pb-4'>
                                        {subMenuData.map((section, idx) => (
                                            <div key={idx} className='space-y-3'>
                                                <h4 className='border-l-2 border-zinc-700 pl-2 text-xs font-semibold tracking-wider text-zinc-500 uppercase'>
                                                    {section.title}
                                                </h4>
                                                <div className='grid gap-2'>
                                                    {section.items.map((subItem, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            href={subItem.href}
                                                            onClick={onClose}
                                                            className='group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-900'
                                                        >
                                                            <ChevronRight className='mt-0.5 h-4 w-4 text-zinc-400 transition-colors group-hover:text-zinc-100' />
                                                            <div>
                                                                <div className='text-sm font-medium text-zinc-300 transition-colors group-hover:text-zinc-100'>
                                                                    {subItem.title}
                                                                </div>
                                                                <div className='mt-0.5 text-xs leading-snug text-zinc-500'>
                                                                    {subItem.description}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <Link
                            key={item.id}
                            href={item.href || '#'}
                            onClick={onClose}
                            className='flex items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-900/60 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-zinc-900/50'
                        >
                            <span className='font-semibold text-zinc-100'>{item.label}</span>
                        </Link>
                    );
                })}

                {/* Mobile Actions */}
                <div className='mt-6 flex flex-col gap-3 border-t border-zinc-800/50 pt-6'>
                    <Link
                        href='#'
                        onClick={onClose}
                        className='flex w-full items-center justify-center gap-2 rounded-full border-2 border-zinc-700 py-3.5 text-center font-medium text-zinc-100 transition-colors hover:bg-zinc-900'
                    >
                        <Smartphone className='h-4 w-4' />
                        Get App
                    </Link>
                    <Link
                        href='/signup'
                        onClick={onClose}
                        className='brand-gradient flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-center font-medium text-zinc-50 shadow-lg hover:shadow-xl'
                    >
                        Get Started
                        <ArrowRight className='h-4 w-4' />
                    </Link>
                </div>
            </div>
        </div>
    );
}
