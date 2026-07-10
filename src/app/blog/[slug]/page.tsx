import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category))
    .slice(0, 3);

  const shareUrl = `https://vochmal.com/blog/${post.slug}`;

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[420px] md:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-custom pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-gold text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to News & Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full text-white"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-xs">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/60 text-xs">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Author */}
            <div className="flex items-center gap-4 pb-8 border-b border-gray-100 mb-8">
              <div className="w-12 h-12 rounded-full bg-bluegrey flex items-center justify-center font-display font-bold text-navy text-lg">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-navy text-sm">{post.author}</p>
                <p className="text-gray-500 text-xs">{post.authorTitle}</p>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-5 text-base">{para}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-8 border-t border-gray-100">
              <Tag size={14} className="text-gray-400" aria-hidden="true" />
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-bluegrey text-navy font-medium px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social Share */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm font-semibold text-navy mb-3">Share this article</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1DA1F2] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Share on X / Twitter"
                >
                  Share on X
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0A66C2] text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  Share on LinkedIn
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#25D366" }}
                  aria-label="Share on WhatsApp"
                >
                  Share on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-navy rounded-xl p-6 sticky top-28">
              <h3 className="font-display text-base font-bold text-white mb-4">About the Author</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center font-display font-bold text-gold text-base">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{post.author}</p>
                  <p className="text-white/60 text-xs">{post.authorTitle}</p>
                </div>
              </div>
              <Link href="/about" className="btn-secondary text-sm py-2 w-full justify-center">
                About Vochmal
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="font-display text-2xl font-bold text-navy mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <BlogCard
                  key={rp.id}
                  slug={rp.slug}
                  title={rp.title}
                  excerpt={rp.excerpt}
                  category={rp.category}
                  categoryColor={rp.categoryColor}
                  date={rp.date}
                  image={rp.image}
                  readTime={rp.readTime}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
