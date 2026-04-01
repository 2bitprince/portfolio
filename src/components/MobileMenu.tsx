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
            <div
                className='sticky top-0 z-10 flex items-center justify-between p-4 backdrop-blur-sm'
                style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    backgroundColor: 'var(--mobile-menu-header-bg)',
                }}
            >
                <div className='flex items-center gap-2.5'>
                    <span className='logo-gradient header-font text-xl font-bold tracking-tight'>
                        2bitprince
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className='-mr-2 cursor-pointer rounded-xl p-2.5 shadow-sm transition-colors'
                    style={{
                        backgroundColor: 'var(--icon-container-bg)',
                        color: 'var(--text-tertiary)',
                    }}
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
                                className='rounded-xl transition-all duration-300'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: isActive
                                        ? 'var(--mobile-menu-accordion-border)'
                                        : 'var(--border)',
                                    backgroundColor: isActive
                                        ? 'var(--mobile-menu-accordion-active-bg)'
                                        : 'var(--mobile-menu-item-bg)',
                                    boxShadow: isActive ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
                                }}
                            >
                                <button
                                    onClick={() => toggleAccordion(item.id)}
                                    className='flex w-full items-center justify-between p-4'
                                >
                                    <div className='flex items-center gap-3'>
                                        <span
                                            className='font-semibold'
                                            style={{ color: 'var(--text-hero-heading)' }}
                                        >
                                            {item.label}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300 ${
                                            isActive ? 'rotate-180' : ''
                                        }`}
                                        style={{
                                            color: isActive
                                                ? 'var(--text-hero-heading)'
                                                : 'var(--text-tertiary)',
                                        }}
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
                                                <h4
                                                    className='pl-2 text-xs font-semibold tracking-wider uppercase'
                                                    style={{
                                                        borderLeft: '2px solid var(--border-hover)',
                                                        color: 'var(--text-muted)',
                                                    }}
                                                >
                                                    {section.title}
                                                </h4>
                                                <div className='grid gap-2'>
                                                    {section.items.map((subItem, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            href={subItem.href}
                                                            onClick={onClose}
                                                            className='group flex items-start gap-3 rounded-lg p-2 transition-colors'
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.backgroundColor =
                                                                    'var(--surface)';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.backgroundColor =
                                                                    'transparent';
                                                            }}
                                                        >
                                                            <ChevronRight
                                                                className='mt-0.5 h-4 w-4 transition-colors'
                                                                style={{
                                                                    color: 'var(--text-tertiary)',
                                                                }}
                                                            />
                                                            <div>
                                                                <div
                                                                    className='text-sm font-medium transition-colors'
                                                                    style={{
                                                                        color: 'var(--text-secondary)',
                                                                    }}
                                                                >
                                                                    {subItem.title}
                                                                </div>
                                                                <div
                                                                    className='mt-0.5 text-xs leading-snug'
                                                                    style={{
                                                                        color: 'var(--text-muted)',
                                                                    }}
                                                                >
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
                            className='flex items-center gap-3 rounded-xl p-4 shadow-sm backdrop-blur-sm transition-colors'
                            style={{
                                borderWidth: '1px',
                                borderColor: 'var(--border-subtle)',
                                backgroundColor: 'var(--mobile-menu-item-bg)',
                            }}
                        >
                            <span
                                className='font-semibold'
                                style={{ color: 'var(--text-hero-heading)' }}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}

                {/* Mobile Actions */}
                <div
                    className='mt-6 flex flex-col gap-3 pt-6'
                    style={{ borderTop: '1px solid var(--border-subtle)' }}
                >
                    <Link
                        href='#'
                        onClick={onClose}
                        className='flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-center font-medium transition-colors'
                        style={{
                            borderWidth: '2px',
                            borderColor: 'var(--border-hover)',
                            color: 'var(--text-hero-heading)',
                        }}
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
