'use client';

import { Briefcase } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            role: 'Full Stack Software Engineer',
            company: 'Caterpillar India Pvt. Ltd.',
            duration: 'August 2023 - Present',
            description:
                'Designing and developing scalable backend APIs, optimizing distributed database queries, and integrating sophisticated LLMs for automated data intelligence tasks. Decreased latency by 40% across edge clusters.',
        },
        {
            role: 'Internship',
            company: 'Caterpillar India Pvt. Ltd.',
            duration: 'April 2023 - June 2023',
            description:
                'Built end-to-end web and mobile applications using Flutter and a .NET monolithic backend. Successfully led the migration strategy to a microservices architecture handling millions of requests constraint-free.',
        },
        {
            role: 'Full Stack Freelance Developer',
            company: 'Self-Employed',
            duration: 'April 2020 - December 2022',
            description:
                'Built end-to-end web and mobile applications using Flutter and a .NET monolithic backend. Successfully led the migration strategy to a microservices architecture handling millions of requests constraint-free.',
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
                    <Briefcase className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />
                </div>
                <h2
                    className='text-3xl font-bold tracking-tight'
                    style={{ color: 'var(--text-hero-heading)' }}
                >
                    Experience
                </h2>
            </div>

            <div
                className='relative ml-4 space-y-16 pb-4 md:ml-6'
                style={{ borderLeft: '1px solid var(--timeline-border)' }}
            >
                {experiences.map((exp, idx) => (
                    <div key={idx} className='group relative pl-8 md:pl-10'>
                        <div
                            className='absolute top-2 -left-1.5 h-3 w-3 rounded-full transition-colors'
                            style={{
                                borderWidth: '2px',
                                borderColor: 'var(--timeline-dot-border)',
                                backgroundColor: 'var(--timeline-dot-bg)',
                            }}
                            onMouseEnter={(e) => {
                                const parent = e.currentTarget.closest('.group');
                                if (parent) {
                                    e.currentTarget.style.backgroundColor = 'var(--timeline-dot-hover)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--timeline-dot-bg)';
                            }}
                        ></div>

                        <div className='mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between'>
                            <h3
                                className='text-xl font-bold'
                                style={{ color: 'var(--text-heading)' }}
                            >
                                {exp.role}
                            </h3>
                            <span
                                className='w-fit rounded-full px-3 py-1 text-sm font-medium'
                                style={{
                                    borderWidth: '1px',
                                    borderColor: 'var(--duration-badge-border)',
                                    backgroundColor: 'var(--duration-badge-bg)',
                                    color: 'var(--text-muted)',
                                }}
                            >
                                {exp.duration}
                            </span>
                        </div>

                        <div className='mb-4 text-lg font-medium text-purple-400'>
                            {exp.company}
                        </div>

                        <p
                            className='max-w-3xl leading-relaxed font-light'
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
