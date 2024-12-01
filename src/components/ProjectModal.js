// src/components/ProjectModal.js
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react'; // Ensure focus trapping
import './ProjectModal.css';
import { FaTimes, FaArrowLeft, FaArrowRight, FaGithub } from 'react-icons/fa';

function ProjectModal({ isOpen, onClose, project }) {
  const modalRef = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus();
      setCurrentImageIndex(0); // Reset to first image when modal opens
      setIsImageLoaded(false);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage();
    }
  };

  const handleNextImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setIsImageLoaded(false);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (!isOpen || !project) return null;

  return ReactDOM.createPortal(
    <FocusTrap>
      <div
        className="modal-overlay show"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onKeyDown={handleKeyDown}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          ref={modalRef}
        >
          <button className="modal-close" onClick={onClose} aria-label="Close Modal">
            <FaTimes />
          </button>
          <div className="modal-image-container">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`modal-image ${isImageLoaded ? 'modal-image-loaded' : ''}`}
              onLoad={handleImageLoad}
              loading="lazy"
            />
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  className="modal-nav left"
                  onClick={handlePrevImage}
                  aria-label="Previous Image"
                >
                  <FaArrowLeft />
                </button>
                <button
                  className="modal-nav right"
                  onClick={handleNextImage}
                  aria-label="Next Image"
                >
                  <FaArrowRight />
                </button>
              </>
            )}
          </div>
          <div className="modal-image-indicator">
            {currentImageIndex + 1} / {project.images.length}
          </div>
          <h2 className="modal-title" id="modal-title">
            {project.title}
          </h2>
          
          {/* Technologies Used */}
          <div className="modal-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="technology-badge">
                {tech.icon ? tech.icon : tech}
              </span>
            ))}
          </div>
          {/* Descriotpjii */}
          {project.description}

          {/* technologies */}
          <div className="modal-section">
            <h3>Technologies</h3>
            <ul>
              {project.technologies_desc.map((technologies_desc, index) => (
                <li key={index}>{technologies_desc}</li>
              ))}
            </ul>
          </div>
          {/* Features */}
          <div className="modal-section">
            <h3>Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* Usage */}
          <div className="modal-section">
            <h3>Usage</h3>
            <ul>
              {project.usage.map((usage, index) => (
                <li key={index}>{usage}</li>
              ))}
            </ul>
          </div>
          {/* Future Improvements */}
          <div className="modal-section">
            <h3>Future Improvements</h3>
            <ul>
              {project.futureImprovements.map((improvement, index) => (
                <li key={index}>{improvement}</li>
              ))}
            </ul>
          </div>
          {/* GitHub Repository Link */}
          <div className="modal-section github-link">
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </FocusTrap>,
    document.getElementById('modal-root')
  );
}

export default ProjectModal;
