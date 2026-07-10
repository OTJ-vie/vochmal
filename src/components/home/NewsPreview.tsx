import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { ArrowRight } from "lucide-react";

export default function NewsPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-offwhite" aria-labelledby="news-heading">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="Latest News"
            title="News & Insights"
            subtitle="Stay informed on Vochmal's latest projects, awards, and industry perspectives."
            align="left"
            className="mb-0"
            id="news-heading"
          />
          <Link
            href="/blog"
            className="flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all whitespace-nowrap"
          >
            View All News <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <BlogCard
              key={post.id}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              categoryColor={post.categoryColor}
              date={post.date}
              image={post.image}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
