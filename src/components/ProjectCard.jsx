import React from 'react'
import { useEffect, useRef, useState } from 'react';
import "../assets/styles/projectCard.css"

function ProjectCard({image, name, description, githubLink, techStack}) {

    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
    
        if (cardRef.current) {
          observer.observe(cardRef.current);
        }
    
        return () => {
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        };
      }, []);

  return (
    <>
        <div ref={cardRef}  className={`card ${isVisible ? 'fade-in' : ''} project-card`}>
            <div className="image-div">
                <img src={image} alt={name} className='projectCardImage'/>
            </div>

            <div className="projectDetails">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>

            <div className='techStack'>
                {techStack.map((tech, index) => (
                    <span key={index} className='tech-item'>{tech}</span>
                ))}
            </div>

            <a href={githubLink} target='_blank'>
                <button className={`githubButton`}>View on GitHub</button>
            </a>
        </div>
    </>
  )
}

export default ProjectCard;