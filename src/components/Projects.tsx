'use client';

import { FolderGit2, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: 'I will add it soon',
            description: 'I will add it soon',
            tags: ['I will add it soon'],
            github: '#',
            link: '#',
        },
        {
            title: 'I will add it soon',
            description: 'I will add it soon',
            tags: ['I will add it soon'],
            github: '#',
            link: '#',
        },
    ];

    return (
        <section className='relative z-10 mx-auto w-full max-w-6xl px-6 py-10'>
            <div className='mb-8 flex items-center gap-3'>
                <div
                    className='rounded-lg p-2'
                    style={{
                        borderWidth: '1px',
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--surface)',
                    }}
                >
                    <FolderGit2 className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />
                </div>
                <h2
                    className='text-3xl font-bold tracking-tight'
                    style={{ color: 'var(--text-hero-heading)' }}
                >
                    Selected Work
                </h2>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className='group flex h-full flex-col rounded-2xl p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md'
                        style={{
                            borderWidth: '1px',
                            borderColor: 'var(--border)',
                            backgroundColor: 'var(--surface-elevated)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-hover)';
                            e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                            e.currentTarget.style.backgroundColor = 'var(--surface-elevated)';
                        }}
                    >
                        <div className='mb-6 flex items-start justify-between'>
                            <div
                                className='rounded-xl p-3 text-purple-400 transition-colors'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: 'var(--project-icon-border)',
                                    backgroundColor: 'var(--project-icon-bg)',
                                }}
                            >
                                <FolderGit2 className='h-6 w-6' />
                            </div>
                            <div className='flex gap-4'>
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        className='transition-colors'
                                        style={{ color: 'var(--text-muted)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--text-heading)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                        }}
                                    >
                                        <Github className='h-5 w-5' />
                                    </Link>
                                )}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        className='text-purple-400 transition-colors hover:text-purple-300'
                                        style={{ color: 'var(--text-muted)' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#c084fc';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-muted)';
                                        }}
                                    >
                                        <ExternalLink className='h-5 w-5' />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <h3
                            className='mb-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-purple-400'
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            {project.title}
                        </h3>
                        <p
                            className='mb-8 flex-grow leading-relaxed font-light'
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {project.description}
                        </p>

                        <div className='mt-auto flex flex-wrap gap-2'>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className='rounded-md px-2.5 py-1 text-sm font-medium transition-colors'
                                    style={{
                                        borderWidth: '1px',
                                        borderColor: 'var(--project-tag-border)',
                                        backgroundColor: 'var(--project-tag-bg)',
                                        color: 'var(--text-muted)',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
