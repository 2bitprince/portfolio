import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface Tag {
  id: string;
  name: string;
  description: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

function resolveTag(tagId: string): Tag {
  return {
    id: tagId,
    name: tagId.charAt(0).toUpperCase() + tagId.slice(1),
    description: "",
  };
}

export interface BlogPost extends BlogMeta {
  content: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogsDirectory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  const tagIds = Array.isArray(data.tags) ? data.tags : [];
  const tags = tagIds.map((id) => resolveTag(id));

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    image: data.image || undefined,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || data.createdAt || new Date().toISOString(),
    tags,
    content,
  };
}

export function getAllBlogs(limit: number = 25): BlogMeta[] {
  const slugs = getAllBlogSlugs();

  const blogs = slugs
    .map((slug) => {
      const blog = getBlogBySlug(slug);

      if (!blog) return null;

      // Return only metadata, not content

      const { content, ...meta } = blog;

      return meta;
    })
    .filter((blog): blog is BlogMeta => blog !== null)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, limit);

  return blogs;
}

export function getAllTags(): Tag[] {
  return [
    {
      id: "nextjs",
      name: "Next.js",
      description: "",
    },
    {
      id: "mdx",
      name: "MDX",
      description: "",
    },
    {
      id: "react",
      name: "React",
      description: "",
    },
  ];
}
