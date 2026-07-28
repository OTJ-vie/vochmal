"use client";

import { useState } from "react";
import { X, PlayCircle } from "lucide-react";
import Image from "next/image";

interface VideoItem {
  thumbnail: string;
  videoUrl: string;
  title: string;
}

export default function VideoGallery({ items }: { items: VideoItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <button
            key={item.videoUrl}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer text-left"
            aria-label={`Play video: ${item.title}`}
          >
            <Image
              src={item.thumbnail}
              alt={`${item.title} thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/60 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white z-10 px-3 text-center">
              <PlayCircle size={36} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="text-sm font-semibold">{item.title}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Video: ${active.title}`}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
            >
              <X size={18} />
            </button>
            <video src={active.videoUrl} controls autoPlay className="w-full h-full">
              <track kind="captions" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
