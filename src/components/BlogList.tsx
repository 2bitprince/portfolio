'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { BlogMeta, Tag } from '@/src/lib/blogs';

interface BlogListProps {
    allBlogs: BlogMeta[];
    allTags: Tag[];
}

export default function BlogList({ allBlogs, allTags }: BlogListProps) {
    const searchParams = useSearchParams();
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        setSelectedTag(searchParams.get('tag'));
    }, [searchParams]);

    const blogs = selectedTag
        ? allBlogs.filter((blog) => blog.tags.some((tag) => tag.id === selectedTag))
        : allBlogs;

    return (
        <>
            <div className='mb-10 flex flex-wrap gap-2'>
                <Link
                    href='/blogs'
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                        !selectedTag
                            ? 'border-zinc-100 bg-zinc-100 text-zinc-900'
                            : 'border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                    }`}
                >
                    All
                </Link>
                {allTags.map((tag) => (
                    <Link
                        key={tag.id}
                        href={`/blogs?tag=${tag.id}`}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                            selectedTag === tag.id
                                ? 'border-zinc-100 bg-zinc-100 text-zinc-900'
                                : 'border-zinc-800 bg-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                        }`}
                    >
                        {tag.name}
                    </Link>
                ))}
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {blogs.map((blog) => (
                    <Link
                        key={blog.slug}
                        href={`/blogs/${blog.slug}`}
                        className='group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50'
                    >
                        {/* Tags */}
                        <div className='mb-4 flex flex-wrap items-center gap-2'>
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className='rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400'
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        <h2 className='mb-2 text-lg leading-snug font-bold text-zinc-100 transition-colors duration-200 group-hover:text-purple-500'>
                            {blog.title}
                        </h2>

                        <p className='mb-4 line-clamp-3 text-sm leading-relaxed text-zinc-400'>
                            {blog.description}
                        </p>

                        <div className='mt-auto flex items-center justify-between border-t border-zinc-800 pt-4'>
                            <time dateTime={blog.createdAt} className='text-xs text-zinc-500'>
                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </time>
                            <span className='translate-x-[-4px] text-xs font-medium text-purple-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100'>
                                Read →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            {blogs.length === 0 && (
                <div className='py-20 text-center'>
                    <p className='text-lg text-zinc-400 dark:text-zinc-500'>
                        No posts found{selectedTag ? ` for "${selectedTag}"` : ''}.
                    </p>
                </div>
            )}
        </>
    );
}
