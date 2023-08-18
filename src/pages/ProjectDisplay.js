import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt='' />
        <p id='about-text'>{project.about}</p>
        <p>Live View: <a href={project.href}>{project.name}</a></p>
        <a href={project.gitRepo}><GitHubIcon /></a>
        <p className='lastP'><b>Skills:</b>{project.skills}</p>
    </div>
  )
}

export default ProjectDisplay