interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export default function TestimonialCard({ quote, name, title, company }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
      {/* Large quotation mark */}
      <div
        className="font-display text-8xl leading-none text-gold/20 font-bold mb-2 -mt-2 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <blockquote className="text-charcoal text-base leading-relaxed flex-1 -mt-6">
        {quote}
      </blockquote>
      <footer className="mt-6 pt-6 border-t border-gray-100">
        <p className="font-semibold text-navy font-display">{name}</p>
        <p className="text-sm text-gray-500 mt-0.5">
          {title}, <span className="text-gold">{company}</span>
        </p>
      </footer>
    </div>
  );
}
