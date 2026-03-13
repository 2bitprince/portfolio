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
                <div className='rounded-lg border border-zinc-800 bg-zinc-900 p-2'>
                    <FolderGit2 className='h-5 w-5 text-zinc-400' />
                </div>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-100'>Selected Work</h2>
            </div>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className='group flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 hover:shadow-md'
                    >
                        <div className='mb-6 flex items-start justify-between'>
                            <div className='rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-purple-400 transition-colors group-hover:bg-purple-500/20'>
                                <FolderGit2 className='h-6 w-6' />
                            </div>
                            <div className='flex gap-4'>
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        className='text-zinc-500 transition-colors hover:text-zinc-200'
                                    >
                                        <Github className='h-5 w-5' />
                                    </Link>
                                )}
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        className='text-zinc-500 transition-colors hover:text-purple-400'
                                    >
                                        <ExternalLink className='h-5 w-5' />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <h3 className='mb-3 text-2xl font-bold tracking-tight text-zinc-400 transition-colors group-hover:text-purple-400'>
                            {project.title}
                        </h3>
                        <p className='mb-8 flex-grow leading-relaxed font-light text-gray-500'>
                            {project.description}
                        </p>

                        <div className='mt-auto flex flex-wrap gap-2'>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className='rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-sm font-medium text-zinc-500 transition-colors group-hover:border-zinc-700'
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
