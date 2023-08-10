import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Project.css";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects