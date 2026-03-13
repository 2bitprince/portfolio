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
                <div className='rounded-lg border border-zinc-800 bg-zinc-900 p-2'>
                    <GraduationCap className='h-5 w-5 text-zinc-400' />
                </div>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-100'>Education</h2>
            </div>

            <div className='relative ml-4 space-y-16 border-l border-zinc-800 pb-4 md:ml-6'>
                {educations.map((edu, idx) => (
                    <div key={idx} className='group relative pl-8 md:pl-10'>
                        <div className='absolute top-2 -left-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-800 transition-colors group-hover:bg-zinc-400'></div>

                        <div className='mb-2 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between'>
                            <h3 className='text-xl font-bold text-zinc-200'>{edu.degree}</h3>
                            <span className='w-fit rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-500'>
                                {edu.duration}
                            </span>
                        </div>

                        <div className='mb-4 text-lg font-medium text-zinc-500'>
                            {edu.institution}
                        </div>

                        <p className='max-w-3xl leading-relaxed font-light text-zinc-400'>
                            {edu.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
