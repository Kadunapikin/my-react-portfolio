import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <GithubIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
        </div>
        <p> &copy; 2023 kadunapikin.com</p>
    </div>
  )
}

export default Footer