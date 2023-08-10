import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/Project.css";
import capstone from '../assets/capstone.JPG';
import etchASketch from '../assets/etchASketch.JPG';
import portfolio from '../assets/portfolio.JPG';
import rps from '../assets/rps.JPG';
import reactPortfolio from '../assets/reactPortfolio.JPG';
import githubProfile from '../assets/githubProfile.JPG';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <ProjectItem name='Capstone Project' image={capstone} />
        <ProjectItem name='React Personal Portfolio' image={reactPortfolio} />
        <ProjectItem name='Rock Paper Scissors Game' image={rps} />
        <ProjectItem name='Etch A Sketch' image={etchASketch} />
        <ProjectItem name='Porfolio' image={portfolio} />
        <ProjectItem name='Github Profile' image={githubProfile} />

      </div>
    </div>
  )
}

export default Projects