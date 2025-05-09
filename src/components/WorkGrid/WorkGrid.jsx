import { useState } from "react";
import "./WorkGrid.css";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const WorkGrid = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(category[index]);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const newIndex =
      (currentIndex + direction + category.length) % category.length;
    setSelectedImage(category[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="image-grid">
        {category.map((item, index) => (
          <div
            className="grid-item"
            key={item.id}
            onClick={() => openLightbox(index)}
          >
            <div className="image-container">
              <img
                className="image"
                src={item.url}
                alt={`Image ${item.id}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={`Lightbox ${selectedImage.id}`}
              className="lightbox-img"
            />
            <button className="close-btn" onClick={closeLightbox}>
              <IoClose />
            </button>
            <button
              className="nav-btn prev-btn"
              onClick={() => navigateImage(-1)}
            >
              <FaArrowLeft />
            </button>
            <button
              className="nav-btn next-btn"
              onClick={() => navigateImage(1)}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkGrid;
