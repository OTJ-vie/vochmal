import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "News & Insights",
  description:
    "Stay informed on Vochmal Limited's latest projects, awards, certifications, and strategic insights from across our six business divisions.",
};

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Construction", count: blogPosts.filter((p) => p.category === "Construction").length },
  { name: "Mining", count: blogPosts.filter((p) => p.category === "Mining").length },
  { name: "Bakery", count: blogPosts.filter((p) => p.category === "Bakery").length },
  { name: "Procurement", count: blogPosts.filter((p) => p.category === "Procurement").length },
  { name: "Apartments", count: blogPosts.filter((p) => p.category === "Apartments").length },
  { name: "Oil & Gas", count: blogPosts.filter((p) => p.category === "Oil & Gas").length },
  { name: "Company News", count: blogPosts.filter((p) => p.category === "Company News").length },
].filter((cat) => cat.name === "All" || cat.count > 0);

const recentPosts = blogPosts.slice(0, 4);

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="News & Insights"
        subtitle="The latest updates, project completions, certifications, and strategic perspectives from Vochmal Limited."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding bg-offwhite" aria-label="Blog posts and sidebar">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Blog Grid */}
            <main className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
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
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8" aria-label="Blog sidebar">
              {/* Search */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-display text-base font-bold text-navy mb-3">Search Articles</h3>
                <div className="flex">
                  <input
                    type="search"
                    placeholder="Search..."
                    aria-label="Search blog articles"
                    className="flex-1 px-3 py-2.5 text-sm border border-gray-200 rounded-l-lg outline-none focus:border-gold transition-colors"
                  />
                  <button
                    aria-label="Search"
                    className="bg-navy text-white px-3 rounded-r-lg hover:bg-gold transition-colors"
                  >
                    <Search size={16} />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-display text-base font-bold text-navy mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button className="w-full flex items-center justify-between text-sm text-gray-600 hover:text-gold transition-colors py-1">
                        <span className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                          {cat.name}
                        </span>
                        <span className="bg-bluegrey text-navy text-xs font-semibold px-2 py-0.5 rounded-full">
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-display text-base font-bold text-navy mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link href={`/blog/${post.slug}`} className="group">
                        <p className="text-sm font-medium text-navy group-hover:text-gold transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </p>
                        <span className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                          <Calendar size={11} /> {post.date}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-navy rounded-xl p-5">
                <h3 className="font-display text-base font-bold text-white mb-2">Stay Informed</h3>
                <p className="text-white/65 text-sm mb-4">
                  Subscribe for the latest news from across Vochmal&rsquo;s six divisions.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Newsletter subscription email"
                    className="w-full px-3 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 outline-none focus:border-gold transition-colors"
                  />
                  <button className="btn-primary w-full justify-center text-sm py-2.5">
                    Subscribe <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
