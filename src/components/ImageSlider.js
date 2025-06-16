import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const ImageSlider = () => {
  const videos = [
    { id: 1, src: video1, alt: "Video 1" },
    { id: 2, src: video2, alt: "Video 2" },
  ];

  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Set playback speed
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.playbackRate = 1.5;
    });
  }, []);

  // Intersection Observer: Check visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      if (isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
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
    autoplay: false, // Disable autoplay — handled manually
  };

  return (
    <div
      className="relative w-full h-[80vh] bg-black overflow-hidden"
      ref={containerRef}
    >
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              className="absolute inset-0 w-full h-full object-cover z-0"
              muted
              loop
              playsInline
            />

            {/* Marquee Text at Bottom */}
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
