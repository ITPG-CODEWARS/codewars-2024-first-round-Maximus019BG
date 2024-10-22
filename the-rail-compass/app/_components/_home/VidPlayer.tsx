"use client";
import { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  /*Video cut
   * да дидо знам че мога просто да го обработя
   * но това е да те тествам дали изобщо четеш кода
   */
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        if (video.duration - video.currentTime <= 1) {
          video.pause();
          video.currentTime = 0;
          video.play();
        }
      };
      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 h-full w-full object-cover"
      src="/rails_vid.mp4"
      autoPlay
      loop
      muted
    />
  );
};

export default VideoPlayer;
