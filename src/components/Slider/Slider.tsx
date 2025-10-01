import { useState, useEffect } from "react";

import styles from "./Slider.module.css";

import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

import type { Slide } from "../../data/sliderData";

interface HighlightSliderProps {
  slides: Slide[];
  className?: string;
}

function HighlightSlider({ slides, className }: HighlightSliderProps) {
  const isProductPage = className?.includes("productSlider");

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const slideInterval = 5000;

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, slideInterval);

    return () => clearInterval(interval);
  });

  return (
    <section className={`${styles.slider} ${className || ""}`}>
      <div
        className={styles.slideContainer}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            className={styles.slideImage}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={goToPrevSlide}>
          <IoChevronBackOutline />
        </button>
        <button onClick={goToNextSlide}>
          <IoChevronForwardOutline />
        </button>
      </div>

      <div className={styles.indicators}>
        {slides.map((slide, index) =>
          isProductPage ? (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              className={`${styles.thumbnail} ${
                index === currentSlide ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ) : (
            <input
              key={index}
              type="radio"
              name="slider-indicator"
              checked={index === currentSlide}
              onChange={() => goToSlide(index)}
            />
          )
        )}
      </div>
    </section>
  );
}

export default HighlightSlider;
