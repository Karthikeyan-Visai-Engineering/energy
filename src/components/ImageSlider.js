import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const ImageSlider = () => {
  const media = [
    { id: 1, type: "image", src: bg, alt: "Background Image" },
    { id: 2, type: "video", src: video1, alt: "Video 1" },
    { id: 3, type: "video", src: video2, alt: "Video 2" },
    { id: 4, type: "image", src: bg2, alt: "Background Image 2" },
    { id: 5, type: "image", src: bg3, alt: "Background Image 3" },
  ];

  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set video playback speed
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.playbackRate = 1.5;
    });
  }, []);

  // Observe slider visibility
  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Play/pause videos based on visibility
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      isVisible ? video.play().catch(() => {}) : video.pause();
    });
  }, [isVisible]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    autoplay: false,
  };

  return (
    <div
      className="relative w-full h-[80vh] bg-black overflow-hidden"
      ref={containerRef}
    >
      <Slider {...settings}>
        {media.map((item, index) => (
          <div
            key={item.id}
            className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
          >
            {item.type === "video" ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                className="absolute inset-0 w-full h-full object-cover z-0"
                muted
                loop
                playsInline
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
            )}

            {/* Marquee Text */}
            <div className="absolute bottom-6 w-full overflow-hidden z-20">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-white text-base md:text-5xl font-bold whitespace-nowrap bg-black/60 px-6 py-2 w-max"
              >
                Celebrating 8 Years Since Inception
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
