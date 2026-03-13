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
                <div className='rounded-lg border border-zinc-800 bg-zinc-900 p-2'>
                    <Briefcase className='h-5 w-5 text-zinc-400' />
                </div>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-100'>Experience</h2>
            </div>

            <div className='relative ml-4 space-y-16 border-l border-zinc-800 pb-4 md:ml-6'>
                {experiences.map((exp, idx) => (
                    <div key={idx} className='group relative pl-8 md:pl-10'>
                        <div className='absolute top-2 -left-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-purple-500/20 transition-colors group-hover:bg-purple-500'></div>

                        <div className='mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between'>
                            <h3 className='text-xl font-bold text-zinc-200'>{exp.role}</h3>
                            <span className='w-fit rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-500'>
                                {exp.duration}
                            </span>
                        </div>

                        <div className='mb-4 text-lg font-medium text-purple-400'>
                            {exp.company}
                        </div>

                        <p className='max-w-3xl leading-relaxed font-light text-zinc-400'>
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
