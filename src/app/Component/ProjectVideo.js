"use client";

import { useRef, useState } from "react";

const ProjectVideo = ({ src, poster, label, className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);

  const play = () => {
    videoRef.current?.play();
  };

  const togglePlayback = (event) => {
    if (event.target.closest("button")) return;

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) video.play();
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") setControlsVisible(false);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setControlsVisible(false);
    }
  };

  return (
    <div
      className={`${className} group/video relative overflow-hidden`}
      onClick={togglePlayback}
      onPointerEnter={() => setControlsVisible(true)}
      onPointerLeave={handlePointerLeave}
      onFocusCapture={() => setControlsVisible(true)}
      onBlurCapture={handleBlur}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controlsVisible}
        playsInline
        preload="metadata"
        width={2000}
        height={1000}
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="absolute inset-0 h-full w-full bg-black object-contain"
      />
      {!isPlaying && (
        <button
          type="button"
          aria-label={`Play ${label}`}
          onClick={play}
          className="absolute left-1/2 top-1/2 z-[3001] flex h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/65 text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-[28px] w-[28px]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5.5v13l10-6.5-10-6.5Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProjectVideo;
