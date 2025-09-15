import React, { useRef, useEffect, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bg   from "../assets/bg.webp";
import vid1 from "../assets/Welcome_1.png"; // add ?url if using Vite
import bg4 from "../assets/welcome-1.png";
import bg5 from "../assets/welcome-2.png";
import bg6 from "../assets/contact_bg.jpg";

const media = [
  
  { id: 1, type: "image", src: vid1, alt: "Video 1" },
  { id: 2, type: "image", src: bg,  alt: "Background 1" },
  { id: 3, type: "image", src: bg4, alt: "Background 4" },
  { id: 4, type: "image", src: bg5, alt: "Background 5" },
  { id: 5, type: "image", src: bg6, alt: "Background 5" },];


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
    speed: 3000,
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default memo(ImageSlider);
