import React, { useRef, useEffect, memo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg   from "../assets/bg.webp";
import bg2  from "../assets/bg2.webp";
import bg3  from "../assets/bg3.webp";
import vid1 from "../assets/video1.mp4"; // add ?url if using Vite
import vid2 from "../assets/video2.mp4";

const media = [
  
  { id: 1, type: "video", src: vid1, alt: "Video 1" },
  { id: 2, type: "video", src: vid2, alt: "Video 2" },
  { id: 3, type: "image", src: bg,  alt: "Background 1" },
  { id: 4, type: "image", src: bg2, alt: "Background 2" },
  { id: 5, type: "image", src: bg3, alt: "Background 3" },
];

function ImageSlider() {
  const videoRefs = useRef([]);

  /* Play the first slide’s video once on mount */
  useEffect(() => {
    if (media[0].type === "video") {
      videoRefs.current[0]?.play().catch(() => {});
    }
  }, []);

  const handleChange = (_old, next) => {
    videoRefs.current.forEach((v, idx) => {
      if (!v) return;
      idx === next ? v.play().catch(() => {}) : v.pause();
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    afterChange: handleChange,      // <‑‑ note the change
  };

  return (
    <div className="relative w-full h-[80vh] bg-black">
      <Slider {...settings}>
        {media.map((item, idx) => (
          <div key={item.id} className="h-[80vh]">
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              {item.type === "video" ? (
                <video
                  ref={el => (videoRefs.current[idx] = el)}
                  src={item.src}
                  autoPlay           /* NEW */
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {/* marquee text */}
              <div className="absolute bottom-6 w-full overflow-hidden z-20">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="text-white text-base md:text-5xl font-bold whitespace-nowrap bg-black/60 px-6 py-2 w-max"
                >
                  Celebrating 8 Years Since Inception
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default memo(ImageSlider);
