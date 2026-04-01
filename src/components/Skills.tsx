'use client';

import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: 'Languages',
            icon: <Code2 className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />,
            skills: ['C#', 'TypeScript', 'Python', 'Dart', 'JavaScript', 'SQL'],
        },
        {
            title: 'Backend Frameworks',
            icon: <Server className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />,
            skills: ['.NET Core', 'Node.js', 'Express', 'NestJS', 'FastAPI'],
        },
        {
            title: 'Databases',
            icon: <Database className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />,
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Vector DBs'],
        },
        {
            title: 'Frontend & Mobile',
            icon: <Layout className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />,
            skills: ['Flutter', 'React', 'Next.js', 'Tailwind CSS'],
        },
        {
            title: 'Tools & DevOps',
            icon: <Wrench className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />,
            skills: ['Docker', 'Git', 'Linux', 'AWS', 'CI/CD'],
        },
    ];

    return (
        <section className='relative z-10 mx-auto w-full max-w-6xl px-6'>
            <div className='mb-8'>
                <h2
                    className='text-3xl font-bold tracking-tight'
                    style={{ color: 'var(--text-hero-heading)' }}
                >
                    Tools & <span style={{ color: 'var(--text-muted)' }}>Technologies</span>
                </h2>
            </div>

            <div className='columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3'>
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className='flex cursor-default break-inside-avoid flex-col gap-4 rounded-2xl p-6 shadow-sm backdrop-blur-sm transition-colors'
                        style={{
                            borderWidth: '1px',
                            borderColor: 'var(--border)',
                            backgroundColor: 'var(--surface-elevated)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                    >
                        <div className='mb-2 flex items-center gap-3'>
                            <div
                                className='rounded-lg p-2'
                                style={{ backgroundColor: 'var(--icon-container-bg)' }}
                            >
                                {category.icon}
                            </div>
                            <h3
                                className='text-xl font-semibold'
                                style={{ color: 'var(--text-heading)' }}
                            >
                                {category.title}
                            </h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className='rounded-md px-3 py-1.5 text-sm font-medium transition-colors'
                                    style={{
                                        borderWidth: '1px',
                                        borderColor: 'var(--tag-border)',
                                        backgroundColor: 'var(--tag-bg)',
                                        color: 'var(--tag-text)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--tag-hover-bg)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--tag-bg)';
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
