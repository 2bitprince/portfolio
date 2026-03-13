import { getAllBlogs, getAllTags } from '@/src/lib/blogs';
import BlogList from '@/src/components/BlogList';
import { Suspense } from 'react';

export async function generateMetadata() {
    return {
        title: 'Blogs',
        description: 'Read our latest blog posts',
    };
}

export default async function BlogsPage() {
    const allBlogs = getAllBlogs(25);
    const allTags = getAllTags();

    return (
        <div className='min-h-screen'>
            <main className='mx-auto max-w-6xl px-6 py-20'>
                <div className='mb-12'>
                    <h1 className='mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 md:text-5xl'>
                        Blog
                    </h1>
                    <p className='max-w-xl text-lg text-zinc-400'>
                        Insights, tutorials, and stories about development, design, and everything
                        in between.
                    </p>
                </div>

                <Suspense fallback={<div className='text-zinc-400'>Loading blogs...</div>}>
                    <BlogList allBlogs={allBlogs} allTags={allTags} />
                </Suspense>
            </main>
        </div>
    );
}
