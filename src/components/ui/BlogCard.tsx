import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  date: string;
  image: string;
  readTime: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  categoryColor,
  date,
  image,
  readTime,
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <Link href={`/blog/${slug}`} aria-label={`Read article: ${title}`} className="block relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
            style={{ backgroundColor: categoryColor }}
          >
            {category}
          </span>
          <span className="text-gray-400 text-xs flex items-center gap-1">
            <Calendar size={11} />
            {date}
          </span>
        </div>

        <Link href={`/blog/${slug}`} className="group/link">
          <h3 className="font-display text-lg font-bold text-navy group-hover/link:text-gold transition-colors leading-snug">
            {title}
          </h3>
        </Link>

        <p className="text-gray-500 text-sm mt-2 leading-relaxed flex-1 line-clamp-2">
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-400">{readTime}</span>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-gold hover:gap-2.5 transition-all duration-200"
          >
            Read More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
