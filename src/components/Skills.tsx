'use client';

import { Code2, Database, Layout, Server, Wrench } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: 'Languages',
            icon: <Code2 className='h-5 w-5 text-zinc-400' />,
            skills: ['C#', 'TypeScript', 'Python', 'Dart', 'JavaScript', 'SQL'],
        },
        {
            title: 'Backend Frameworks',
            icon: <Server className='h-5 w-5 text-zinc-400' />,
            skills: ['.NET Core', 'Node.js', 'Express', 'NestJS', 'FastAPI'],
        },
        {
            title: 'Databases',
            icon: <Database className='h-5 w-5 text-zinc-400' />,
            skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Vector DBs'],
        },
        {
            title: 'Frontend & Mobile',
            icon: <Layout className='h-5 w-5 text-zinc-400' />,
            skills: ['Flutter', 'React', 'Next.js', 'Tailwind CSS'],
        },
        {
            title: 'Tools & DevOps',
            icon: <Wrench className='h-5 w-5 text-zinc-400' />,
            skills: ['Docker', 'Git', 'Linux', 'AWS', 'CI/CD'],
        },
    ];

    return (
        <section className='relative z-10 mx-auto w-full max-w-6xl px-6'>
            <div className='mb-8'>
                <h2 className='text-3xl font-bold tracking-tight text-zinc-100'>
                    Tools & <span className='text-zinc-500'>Technologies</span>
                </h2>
            </div>

            <div className='columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3'>
                {categories.map((category, idx) => (
                    <div
                        key={idx}
                        className='flex cursor-default break-inside-avoid flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-zinc-700'
                    >
                        <div className='mb-2 flex items-center gap-3'>
                            <div className='rounded-lg bg-zinc-800/50 p-2'>{category.icon}</div>
                            <h3 className='text-xl font-semibold text-zinc-200'>
                                {category.title}
                            </h3>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className='rounded-md border border-zinc-700/50 bg-zinc-800/80 px-3 py-1.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700'
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
