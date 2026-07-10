"use client";

import { useState } from "react";
import { X, PlayCircle } from "lucide-react";
import Image from "next/image";

interface VideoModalProps {
  backgroundImage: string;
  videoUrl: string;
  title: string;
  subtitle?: string;
}

export default function VideoModal({
  backgroundImage,
  videoUrl,
  title,
  subtitle,
}: VideoModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger Section */}
      <section
        className="relative h-[420px] flex items-center justify-center overflow-hidden cursor-pointer group"
        onClick={() => setOpen(true)}
        aria-label={`Play video: ${title}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
      >
        <Image
          src={backgroundImage}
          alt={`${title} background`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative text-center text-white z-10 px-6">
          <div
            className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-gold/30"
            aria-hidden="true"
          >
            <PlayCircle size={40} className="text-white ml-0.5" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-shadow-sm">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-white/75 text-base max-w-lg mx-auto">{subtitle}</p>
          )}
          <p className="mt-4 text-gold text-sm font-semibold uppercase tracking-wider">
            Click to play video
          </p>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${title}`}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
