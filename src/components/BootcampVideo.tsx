/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Play, Sparkles, Youtube, CheckCircle2, Video } from 'lucide-react';

export const BootcampVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'e2MP86NbGcM';

  return (
    <div className="max-w-3xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-16 text-center">
      {/* Video Callout Eyebrow */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
        <Sparkles className="w-4 h-4 animate-spin text-amber-400" />
        <span>WATCH THIS FIRST</span>
      </div>

      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-display mb-6">
        Everything You Need to Know About The Bootcamp
      </h2>

      {/* Video Container / Placeholder Frame */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-amber-400/30 bg-[#121422] shadow-2xl glow-card group transition-all duration-300 hover:border-amber-400/50">
        {/* Aspect Ratio 16:9 box */}
        <div className="relative w-full pb-[56.25%] bg-black">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="The Design Bootcamp - Everything You Need to Know"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center p-6 select-none group/thumb"
            >
              {/* Thumbnail background image with graceful fallbacks */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Watch The Design Bootcamp introduction video"
                onError={(e) => {
                  // Fallback to high quality thumbnail if maxres is not available
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/thumb:opacity-75 group-hover/thumb:scale-105 transition-all duration-500"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />

              {/* Ambient radial glow behind play button */}
              <div className="absolute w-28 h-28 rounded-full bg-amber-400/20 blur-xl pointer-events-none group-hover/thumb:scale-125 transition-transform duration-300" />

              {/* Pulsing Play Button */}
              <button
                type="button"
                aria-label="Play video: Everything you need to know about The Design Bootcamp"
                className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl shadow-amber-400/40 group-hover/thumb:scale-110 active:scale-95 transition-all duration-300"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
              </button>

              {/* Overlay Prompt */}
              <div className="relative z-10 mt-4 text-center">
                <span className="inline-block px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white font-bold text-xs sm:text-sm tracking-wide">
                  Click to Watch Video • Overview & Tour 🎬
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Video Bottom Summary Bar */}
        <div className="p-4 sm:p-5 bg-[#0e101b] border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Covers course curriculum, tools, projects, and how to get started</span>
          </div>

          <a
            href={`https://youtu.be/${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1.5 shrink-0"
          >
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            <span>Open on YouTube ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};
