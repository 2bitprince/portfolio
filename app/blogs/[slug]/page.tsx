import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlogBySlug } from "@/src/lib/blogs";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { Pre } from "@/src/components/pre";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { content } = await compileMDX({
    source: blog.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "one-dark-pro",
              keepBackground: true,
              defaultLang: "plaintext",
            },
          ],
        ],
      },
    },
    components: {
      pre: Pre as any,
    },
  });

  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const updatedDate =
    blog.updatedAt !== blog.createdAt
      ? new Date(blog.updatedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : null;

  return (
    <div className="min-h-screen">
      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex justify-center">
          <main className="max-w-3xl w-full min-w-0">
            <article>
              <header className="mb-10">
                {blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {blog.tags.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/blogs?tag=${tag.id}`}
                        className="rounded-full bg-purple-900/20 px-3 py-1 text-xs font-medium text-purple-400 hover:bg-purple-900/30 transition-colors"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-zinc-50 leading-[1.15] mb-5">
                  {blog.title}
                </h1>

                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  {blog.description}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 pb-8 border-b border-zinc-800">
                  <time
                    dateTime={blog.createdAt}
                    className="flex items-center gap-1.5"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                    {formattedDate}
                  </time>
                  {updatedDate && (
                    <>
                      <span className="text-zinc-700">·</span>
                      <time
                        dateTime={blog.updatedAt}
                        className="flex items-center gap-1.5"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M2.985 19.644l3.18-3.182"
                          />
                        </svg>
                        Updated {updatedDate}
                      </time>
                    </>
                  )}
                </div>
              </header>

              <div className="blog-content">{content}</div>

              <div className="mt-16 pt-8 border-t border-zinc-800">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors group"
                >
                  <svg
                    className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  All Posts
                </Link>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
