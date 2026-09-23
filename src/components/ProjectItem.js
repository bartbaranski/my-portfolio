// src/components/ProjectItem.js
import React, { useState } from 'react';
import './ProjectItem.css';
import ProjectModal from './ProjectModal';

function ProjectItem({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="project-item"
        onClick={handleItemClick}
        aria-label={`View details for ${project.title}`}
      >
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </button>
      <ProjectModal isOpen={isModalOpen} onClose={handleCloseModal} project={project} />
    </>
  );
}

export default ProjectItem;
