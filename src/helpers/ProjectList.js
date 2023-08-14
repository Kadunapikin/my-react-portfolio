import capstone from "../assets/capstone.JPG"
import etchASketch from '../assets/etchASketch.JPG';
import portfolio from '../assets/portfolio.JPG';
import rps from '../assets/rps.JPG';
import reactPortfolio from '../assets/reactPortfolio.JPG';
import githubProfile from '../assets/githubProfile.JPG';


export const ProjectList = [
    {
        name: 'Capstone Project',
        image: capstone,
        skills: 'JavaScript, CSS, HTML, Bootstrap',
        about: 'A simple conference page to notify interested individuals about Top developers BootCamp where great front end web developers learn development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.',
        href: "https://phildeoner.github.io/Capstone-Project/" 
    },
    {
        name: 'React Personal Portfolio',
        image: reactPortfolio,
        skills: 'React, Note.JS, MaterialUI',
        about: 'This is a collection of my work just to demonstrates my expertise, coding abilities, problem-solving skills, and creativity. It also gives potential employers or clients a glimpse of what i can do.',
        href: "/#"  
    },
    {
        name: 'Rock Paper Scissors Game',
        image: rps,
        skills: 'JavaScript, CSS, HTML',
        about: 'A classic game between a user and computer. Players start each round by picking, “rock, paper or scissors!” While computer also randomly pick from choices array of [rock, paper and scissors]. Rock crushes scissors, scissors cut paper, and paper covers rock. It is played for five(5) rounds to decide who wins the game!',
        href : "https://kadunapikin.github.io/RockPaperScissors/" 
    },
    {
        name: 'Etch A Sketch',
        image: etchASketch,
        skills: 'JavaScript, CSS, HTML, Bootstrap',
        about: 'This is a project where i build a browser version of something between a sketchpad and an Etch-A-Sketch to flex my DOM manipulation skills.',
        href: "https://kadunapikin.github.io/etch_a_sketch/" 
    },
    {
        name: 'Porfolio',
        image: portfolio,
        skills: 'JavaScript, CSS, HTML',
        about: 'This is a collection of my work just to demonstrates my expertise, coding abilities, problem-solving skills, and creativity. It also gives potential employers or clients a glimpse of what i can do.',
        href: "https://kadunapikin.github.io/portfolio/" 
    },
    {
        name: 'Github Profile',
        image: githubProfile,
        skills: 'README.md',
        about: 'This is a simple project aim at showing how a github profile can be made to display user activity and contributions to the community at a glance. It also enable a user to link his/her social media links from Github profile!',
        href: "https://kadunapikin.github.io/Kadunapikin/"  
    }
]