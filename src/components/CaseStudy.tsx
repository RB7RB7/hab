"use client";

import { useState, useRef } from "react";
import { VISION } from "@/lib/constants";
import { Play, Pause } from "@/components/ui/Icons";

export default function CaseStudy() {
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section
      className="relative flex flex-col justify-end"
      style={{ height: "90svh" }}
    >
      {/* Video / background */}
      <div className="absolute inset-0 z-0">
        {/* Dark fallback behind video */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "var(--swatch--dark)" }}
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/vision.mp4"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#2220 20%, #222)" }}
      />

      {/* Content */}
      <div className="padding-global padding-section-large relative z-[2]">
        <div className="container-large">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 text-white">
            {/* Left - quote */}
            <div
              className="flex flex-col gap-6 items-start"
              style={{ maxWidth: "40.625rem" }}
            >
              <h2
                className="font-heading italic"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                &ldquo;{VISION.quote}&rdquo;
              </h2>
              <div className="flex items-center gap-4">
                {/* Founder avatars */}
                <div className="flex -space-x-2">
                  <img
                    src="https://cdn.prod.website-files.com/692471abbb363c2d3df6f77e/69284bbf996f0a8507c2521f_Professional%20Portrait.avif"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2"
                    style={{ borderColor: "var(--swatch--dark)" }}
                  />
                  <img
                    src="https://cdn.prod.website-files.com/692471abbb363c2d3df6f77e/69284bbfd536e0083d8dbf36_Portrait%20of%20a%20Man%202.avif"
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border-2"
                    style={{ borderColor: "var(--swatch--dark)" }}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[0.875rem] font-medium">{VISION.authors}</p>
                  <p className="text-[0.875rem]" style={{ color: "var(--white-700)" }}>
                    {VISION.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - play/pause */}
            <button
              onClick={togglePlay}
              className="flex items-center justify-center border-2 rounded-full overflow-hidden shrink-0"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderColor: "var(--swatch--white)",
                color: "var(--swatch--white)",
              }}
              aria-label={playing ? "Pausa" : "Spela"}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
