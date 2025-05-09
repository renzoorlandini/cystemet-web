import { useState, useEffect, useRef } from "react";
import {
  BsArrowLeftCircleFill,
  BsArrowRightCircleFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./SliderN2.css";

import tanques from "./tanques.js";

const Slider = () => {
  const elements = tanques;

  // const [productType, setProductType] = useState("tanques");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  // Auto-play function
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === elements.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  // Handle play/stop toggle
  const togglePlayState = () => {
    setIsPlaying((prev) => !prev);
  };

  // Set up auto-play effect
  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Clean up interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, elements.length]);

  const handlePreviousElement = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide(
      currentSlide === 0 ? elements.length - 1 : currentSlide - 1
    );
    if (isPlaying) {
      startAutoPlay();
    }
  };

  const handleNextElement = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide(
      currentSlide === elements.length - 1 ? 0 : currentSlide + 1
    );
    if (isPlaying) {
      startAutoPlay();
    }
  };

  // Handle dot navigation
  const handleDotClick = (index) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentSlide(index);
    if (isPlaying) {
      startAutoPlay();
    }
  };

  return (
    <div className="slidern2-body">
      <div className="slidern2-container">
        <div className="controls-container">
          <div>
            <FaArrowLeft
              onClick={handlePreviousElement}
              className="arrow arrow-left"
              size={40}
            />
          </div>
          <div>
            <FaArrowRight
              onClick={handleNextElement}
              className="arrow arrow-right"
              size={40}
            />
          </div>
        </div>

        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {elements && elements.length
            ? elements.map((elementsItem) => (
                <div key={elementsItem.id} className="slide">
                  <img
                    src={elementsItem.url}
                    className="current-element"
                    alt="Slide"
                  />
                </div>
              ))
            : null}
        </div>

        <span className="dot-navigator flex-r  flex-w100 ">
          <div className="flex-c" style={{ width: "20%" }}></div>
          <div className="flex-r flex-center" style={{ width: "60%" }}>
            {elements && elements.length
              ? elements.map((item, index) => (
                  <div key={index}>
                    <button
                      className={
                        currentSlide === index
                          ? "current-indicator"
                          : "current-indicator inactive-current-indicator"
                      }
                      onClick={() => handleDotClick(index)}
                    >
                      {/* <img src={item.url} alt="thumbnail" /> */}
                    </button>
                  </div>
                ))
              : null}
          </div>
          <div
            className="flex-c "
            style={{
              width: "20%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              paddingRight: "1rem",
            }}
          >
            <button className="btn-s1 " onClick={togglePlayState}>
              {isPlaying ? (
                <BsPauseCircleFill size={24} />
              ) : (
                <BsPlayCircleFill size={24} />
              )}
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Slider;
