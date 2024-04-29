import React, { useEffect, useState } from "react";
import "../styles/Modal.css";

const Modal = ({ isOpen, close, images }) => {
  const [focusImage, setFocusImage] = useState("");

  useEffect(() => {
    // Check if modal is open and images array is not empty
    if (isOpen && images && images.length > 0) {
      setFocusImage(images[0]);
    } else {
      setFocusImage(""); // Reset or set to a default image if needed
    }
  }, [isOpen, images]); // Depend on both isOpen and images

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div style={{ textAlign: "center" }}>
          <img
            src={focusImage.src}
            alt="FocusImage"
            className="modal-focus-img"
          />
          <p>{focusImage.title}</p>
        </div>
        <div className="image-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Gallery ${index}`}
              className="image-grid-item"
              onClick={() => setFocusImage(image)}
            />
          ))}
        </div>
      </div>
      <button className="close-button" onClick={close}>
        X
      </button>
    </div>
  );
};

export default Modal;
