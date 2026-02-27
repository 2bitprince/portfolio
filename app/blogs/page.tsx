import Link from "next/link";
import { getAllBlogs, getAllTags } from "@/src/lib/blogs";

interface PageProps {
  searchParams: Promise<{ tag?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps) {
  const params = await searchParams;
  if (params.tag) {
    return {
      title: `Blogs tagged with ${params.tag}`,
      description: `Browse blog posts tagged with ${params.tag}`,
    };
  }
  return {
    title: "Blogs",
    description: "Read our latest blog posts",
  };
}

export default async function BlogsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedTag = params.tag;

  const allBlogs = getAllBlogs(25);
  const allTags = getAllTags();

  const blogs = selectedTag
    ? allBlogs.filter((blog) => blog.tags.some((tag) => tag.id === selectedTag))
    : allBlogs;

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-3">
            Blog
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl">
            Insights, tutorials, and stories about development, design, and
            everything in between.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="/blogs"
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border ${
              !selectedTag
                ? "bg-zinc-100 text-zinc-900 border-zinc-100"
                : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            All
          </Link>
          {allTags.map((tag) => (
            <Link
              key={tag.id}
              href={`/blogs?tag=${tag.id}`}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 border ${
                selectedTag === tag.id
                  ? "bg-zinc-100 text-zinc-900 border-zinc-100"
                  : "bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {tag.name}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
              className="group relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Tags */}
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-zinc-800 text-zinc-400 px-2.5 py-0.5 text-xs font-medium"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <h2 className="mb-2 text-lg font-bold text-zinc-100 leading-snug group-hover:text-purple-500 transition-colors duration-200">
                {blog.title}
              </h2>

              <p className="text-sm text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
                {blog.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800">
                <time
                  dateTime={blog.createdAt}
                  className="text-xs text-zinc-500"
                >
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span className="text-xs font-medium text-purple-500 opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 dark:text-zinc-500 text-lg">
              No posts found{selectedTag ? ` for "${selectedTag}"` : ""}.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
