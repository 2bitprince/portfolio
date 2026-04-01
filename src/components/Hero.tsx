'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Database, Cpu } from 'lucide-react';
import { SiDart, SiFlutter, SiTypescript, SiPython, SiDotnet } from 'react-icons/si';

const skills = [
    { name: 'C# / .NET', icon: SiDotnet },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'Dart', icon: SiDart },
    { name: 'Flutter', icon: SiFlutter },
];

export default function Hero() {
    return (
        <section className='relative w-full flex-grow overflow-hidden pt-12 pb-4 lg:pt-20 lg:pb-10'>
            <div className='relative z-10 mx-auto max-w-6xl px-6'>
                <div className='grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-8'>
                    <div>
                        <div className='mb-6 flex items-center gap-3'>
                            <span className='relative flex h-2.5 w-2.5'>
                                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75'></span>
                                <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-500'></span>
                            </span>
                            <span
                                className='text-sm font-medium tracking-wide uppercase'
                                style={{ color: 'var(--text-tertiary)' }}
                            >
                                Backend Engineer, MCA
                            </span>
                        </div>

                        <h1
                            className='mb-6 text-4xl leading-tight font-extrabold tracking-tight md:text-6xl'
                            style={{ color: 'var(--text-hero-heading)' }}
                        >
                            Hi, I am Prince Patel.
                        </h1>

                        <p
                            className='mb-8 max-w-2xl text-lg leading-relaxed font-light md:text-xl'
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            I build stuff.
                        </p>

                        <div className='mb-10 flex flex-wrap gap-2.5'>
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className='flex cursor-default items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors'
                                    style={{
                                        borderWidth: '1px',
                                        borderColor: 'var(--skill-tag-border)',
                                        backgroundColor: 'var(--skill-tag-bg)',
                                        color: 'var(--skill-tag-text)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--skill-tag-hover-bg)';
                                        e.currentTarget.style.color = 'var(--skill-tag-hover-text)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--skill-tag-bg)';
                                        e.currentTarget.style.color = 'var(--skill-tag-text)';
                                    }}
                                >
                                    <skill.icon className='h-4 w-4' />
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-wrap items-center gap-4'>
                            <Link
                                href='/Resume.pdf'
                                target='_blank'
                                className='group flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-200'
                                style={{
                                    backgroundColor: 'var(--btn-primary-bg)',
                                    color: 'var(--btn-primary-text)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--btn-primary-hover-bg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--btn-primary-bg)';
                                }}
                            >
                                View Resume
                                <ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                            </Link>
                            <Link
                                href='https://github.com/princepatelcodes'
                                target='_blank'
                                className='flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: 'var(--btn-secondary-border)',
                                    backgroundColor: 'var(--btn-secondary-bg)',
                                    color: 'var(--btn-secondary-text)',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--btn-secondary-hover-bg)';
                                    e.currentTarget.style.color = 'var(--btn-secondary-hover-text)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'var(--btn-secondary-bg)';
                                    e.currentTarget.style.color = 'var(--btn-secondary-text)';
                                }}
                            >
                                GitHub
                            </Link>
                        </div>
                    </div>

                    <div className='relative hidden items-center justify-center lg:flex'>
                        <div
                            className='absolute inset-0 rounded-full blur-[100px]'
                            style={{ backgroundColor: 'var(--hero-glow)' }}
                        />

                        <div
                            className='relative flex w-full max-w-sm flex-col gap-6 rounded-2xl p-6 shadow-2xl backdrop-blur-xl'
                            style={{
                                borderWidth: '1px',
                                borderColor: 'var(--hero-card-border)',
                                backgroundColor: 'var(--hero-card-bg)',
                            }}
                        >
                            <div
                                className='flex items-center gap-2 pb-4'
                                style={{ borderBottom: '1px solid var(--border-subtle)' }}
                            >
                                <div className='h-3 w-3 rounded-full border border-purple-500/20 bg-purple-500/80'></div>
                                <div className='h-3 w-3 rounded-full border border-yellow-500/20 bg-yellow-500/80'></div>
                                <div className='h-3 w-3 rounded-full border border-green-500/20 bg-green-500/80'></div>
                            </div>

                            <div className='space-y-4 py-2'>
                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg border border-purple-500/20 bg-purple-500/10 p-2'>
                                        <Cpu className='h-5 w-5 text-purple-400' />
                                    </div>
                                    <div
                                        className='h-2 flex-grow overflow-hidden rounded-full'
                                        style={{ backgroundColor: 'var(--hero-bar-track)' }}
                                    >
                                        <div className='h-full w-3/4 animate-pulse bg-purple-500'></div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg border border-purple-600/20 bg-purple-600/10 p-2'>
                                        <Database className='h-5 w-5 text-purple-400' />
                                    </div>
                                    <div
                                        className='h-2 flex-grow overflow-hidden rounded-full'
                                        style={{ backgroundColor: 'var(--hero-bar-track)' }}
                                    >
                                        <div
                                            className='h-full w-1/2 animate-pulse bg-purple-500'
                                            style={{ animationDelay: '500ms' }}
                                        ></div>
                                    </div>
                                </div>

                                <div className='flex items-center gap-4'>
                                    <div className='rounded-lg border border-purple-500/20 bg-purple-500/10 p-2'>
                                        <Terminal className='h-5 w-5 text-purple-400' />
                                    </div>
                                    <div
                                        className='h-2 flex-grow overflow-hidden rounded-full'
                                        style={{ backgroundColor: 'var(--hero-bar-track)' }}
                                    >
                                        <div className='relative h-full w-full'>
                                            <div className='absolute top-0 bottom-0 left-0 w-1/4 bg-purple-500 opacity-80 blur-[2px]' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className='absolute top-1/4 -right-6 z-20 rounded-xl px-3 py-2 shadow-xl'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: 'var(--hero-floating-border)',
                                    backgroundColor: 'var(--hero-floating-bg)',
                                }}
                            >
                                <div
                                    className='font-mono text-[10px] select-none'
                                    style={{ color: 'var(--text-tertiary)' }}
                                >
                                    status: 200 OK
                                </div>
                            </div>
                            <div
                                className='absolute bottom-1/4 -left-8 z-20 flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: 'var(--hero-floating-border)',
                                    backgroundColor: 'var(--hero-floating-bg)',
                                }}
                            >
                                <span className='h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]'></span>
                                <div
                                    className='font-mono text-[10px] select-none'
                                    style={{ color: 'var(--text-tertiary)' }}
                                >
                                    AI Cluster Online
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-full rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-zinc-900/0 to-zinc-900/0 blur-3xl lg:top-1/4 lg:right-0 lg:left-auto lg:w-[500px]'></div>
        </section>
    );
}
