import React, { useState } from "react";
import "./certi.css";
import cert1 from "./assets/cer.png";
import cert2 from "./assets/cer1.png";
import cert3 from "./assets/cer3.png";
import bgVideo from "./assets/back2.mp4"; // your background video

const certificates = [
  { id: 1, image: cert1 },
  { id: 2, image: cert2 },
  { id: 3, image: cert3 }
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="carousel-section">
      {/* Background Video */}
      <div className="carousel-background">
        <video autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      {/* Title */}
      <h1 className="carousel-title">Certificates</h1>

      {/* Carousel */}
      <div className="carousel-container small-carousel">
        <button className="nav-button left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track">
          {certificates.map((cert, index) => {
            let offset = index - activeIndex;
            if (offset < 0) offset += certificates.length;
            if (offset > certificates.length / 2) offset -= certificates.length;

            return (
              <div
                key={cert.id}
                className="carousel-item"
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * 150}px) scale(${
                    offset === 0 ? 0.60 : 0.35
                  }) rotateY(${offset * -20}deg)`,
                  zIndex: offset === 0 ? 2 : 1,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                }}
              >
                <img src={cert.image} alt={`Certificate ${cert.id}`} />
              </div>
            );
          })}
        </div>

        <button className="nav-button right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
