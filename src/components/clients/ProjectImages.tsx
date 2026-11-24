"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectImagesProps {
  images: string[];
  title: string;
  fallbackImage?: string;
}

export default function ProjectImages({ images, title, fallbackImage }: ProjectImagesProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gallery = images.length > 0 ? images : fallbackImage ? [fallbackImage] : [];

  const close = useCallback(() => setActiveIndex(null), []);
  const previous = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index - 1 + gallery.length) % gallery.length));
  }, [gallery.length]);
  const next = useCallback(() => {
    setActiveIndex((index) => (index === null ? null : (index + 1) % gallery.length));
  }, [gallery.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, previous, next]);

  if (gallery.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 border border-gray-100 text-center">
        <p className="text-gray-500">Images for this project are being added.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gallery.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-white"
            aria-label={`Open ${title} image ${index + 1} of ${gallery.length}`}
          >
            <Image
              src={image}
              alt={`${title} — image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image gallery`}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  previous();
                }}
                className="absolute left-3 md:left-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  next();
                }}
                className="absolute right-3 md:right-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-6xl h-[75vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={gallery[activeIndex]}
              alt={`${title} — image ${activeIndex + 1} of ${gallery.length}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {gallery.length > 1 && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {activeIndex + 1} / {gallery.length}
            </span>
          )}
        </div>
      )}
    </>
  );
}
