import React, { useEffect, useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import projects from '../../common/projects.json';

function Projects() {
  const [projectsWithImages, setProjectsWithImages] = useState([]);

  useEffect(() => {
    const updatedProjects = projects.map((project, index) => {
      return { ...project, src: `https://dummyimage.com/150x150/000/fff&text=${project.h3}` };
    });
    setProjectsWithImages(updatedProjects);
  }, []);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projectsWithImages.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;