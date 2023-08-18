import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Bakoshi</h2>
        <div className='prompt'>
          <p>A front end web developer, detail-oriented team player with strong passion for learning and Creating.</p>
          <a href='https://www.linkedin.com/in/kadunapikin/'><LinkedInIcon /></a>
          <a href='https://github.com/Kadunapikin'><GithubIcon /></a>
          <a href='ibakoshi27@gmail.com'><EmailIcon /></a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JavaScript, NPM, ReactJs, Bootstrap, MaterialUI, TailwindCSS.
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              TypeScript, JavaScript.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home