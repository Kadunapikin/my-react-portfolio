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
            <a href='https://github.com/Kadunapikin'><GithubIcon /></a>
            <a href='https://www.linkedin.com/in/kadunapikin/'><LinkedInIcon /></a>
            <a href='https://www.facebook.com/ibakoshi?mibextid=ZbWKwL'><FacebookIcon /></a>
            <a href='https://twitter.com/Kadunapikin?t=BkjbDzGQlfmxYgeaPyGAZA&s=09'><TwitterIcon /></a>
            <a href='https://instagram.com/kadunapikin?igshid=ZGUzMzM3NWJiOQ=='><InstagramIcon /></a>
        </div>
        <p> &copy; 2023 kadunapikin.com</p>
    </div>
  )
}

export default Footer