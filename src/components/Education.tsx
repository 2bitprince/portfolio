'use client';

import { GraduationCap } from 'lucide-react';

export default function Education() {
    const educations = [
        {
            degree: 'Masters in Computer Application ( MCA )',
            institution: 'College of Engineering Guindy, Anna University, Chennai',
            duration: '2021 - 2023',
            description:
                'Graduated while securing an internship and Full-time offer in Caterpillar India Pvt. Ltd. Specialized in advanced backend architecture, distributed systems, Postgres, MongoDB, Cloud Computing, Machine learning and did a project using OCR and Deep learning.',
        },
        {
            degree: 'Bachelor of Computer Application ( BCA )',
            institution: 'Patna College, Patna University, Patna',
            duration: '2017 - 2020',
            description:
                'Graduated with Distinction. Specialized in programming basics, data structures, algorithms, and database management systems.',
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
                    <GraduationCap className='h-5 w-5' style={{ color: 'var(--icon-color)' }} />
                </div>
                <h2
                    className='text-3xl font-bold tracking-tight'
                    style={{ color: 'var(--text-hero-heading)' }}
                >
                    Education
                </h2>
            </div>

            <div
                className='relative ml-4 space-y-16 pb-4 md:ml-6'
                style={{ borderLeft: '1px solid var(--timeline-border)' }}
            >
                {educations.map((edu, idx) => (
                    <div key={idx} className='group relative pl-8 md:pl-10'>
                        <div
                            className='absolute top-2 -left-1.5 h-3 w-3 rounded-full transition-colors'
                            style={{
                                borderWidth: '2px',
                                borderColor: 'var(--timeline-dot-border)',
                                backgroundColor: 'var(--timeline-edu-dot-bg)',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--timeline-edu-dot-hover)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'var(--timeline-edu-dot-bg)';
                            }}
                        ></div>

                        <div className='mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between'>
                            <h3
                                className='text-xl font-bold'
                                style={{ color: 'var(--text-heading)' }}
                            >
                                {edu.degree}
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
                                {edu.duration}
                            </span>
                        </div>

                        <div
                            className='mb-4 text-lg font-medium'
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {edu.institution}
                        </div>

                        <p
                            className='max-w-3xl leading-relaxed font-light'
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
