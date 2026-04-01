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
                    className='rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200'
                    style={{
                        borderWidth: '1px',
                        borderColor: !selectedTag ? 'var(--blog-active-tag-border)' : 'var(--border)',
                        backgroundColor: !selectedTag ? 'var(--blog-active-tag-bg)' : 'transparent',
                        color: !selectedTag ? 'var(--blog-active-tag-text)' : 'var(--text-tertiary)',
                    }}
                >
                    All
                </Link>
                {allTags.map((tag) => (
                    <Link
                        key={tag.id}
                        href={`/blogs?tag=${tag.id}`}
                        className='rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200'
                        style={{
                            borderWidth: '1px',
                            borderColor:
                                selectedTag === tag.id
                                    ? 'var(--blog-active-tag-border)'
                                    : 'var(--border)',
                            backgroundColor:
                                selectedTag === tag.id
                                    ? 'var(--blog-active-tag-bg)'
                                    : 'transparent',
                            color:
                                selectedTag === tag.id
                                    ? 'var(--blog-active-tag-text)'
                                    : 'var(--text-tertiary)',
                        }}
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
                        className='group relative flex flex-col rounded-xl p-6 transition-all duration-300 hover:shadow-2xl'
                        style={{
                            borderWidth: '1px',
                            borderColor: 'var(--border)',
                            backgroundColor: 'var(--surface-card)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-hover)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border)';
                        }}
                    >
                        {/* Tags */}
                        <div className='mb-4 flex flex-wrap items-center gap-2'>
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag.id}
                                    className='rounded-full px-2.5 py-0.5 text-xs font-medium'
                                    style={{
                                        backgroundColor: 'var(--blog-tag-bg)',
                                        color: 'var(--text-tertiary)',
                                    }}
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        <h2
                            className='mb-2 text-lg leading-snug font-bold transition-colors duration-200 group-hover:text-purple-500'
                            style={{ color: 'var(--text-hero-heading)' }}
                        >
                            {blog.title}
                        </h2>

                        <p
                            className='mb-4 line-clamp-3 text-sm leading-relaxed'
                            style={{ color: 'var(--text-tertiary)' }}
                        >
                            {blog.description}
                        </p>

                        <div
                            className='mt-auto flex items-center justify-between pt-4'
                            style={{ borderTop: '1px solid var(--border)' }}
                        >
                            <time
                                dateTime={blog.createdAt}
                                className='text-xs'
                                style={{ color: 'var(--text-muted)' }}
                            >
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
                    <p className='text-lg' style={{ color: 'var(--text-muted)' }}>
                        No posts found{selectedTag ? ` for "${selectedTag}"` : ''}.
                    </p>
                </div>
            )}
        </>
    );
}
