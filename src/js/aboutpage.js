import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Aboutpage extends React.Component{

  render(){
    return(
      <div id="aboutpage" className="w3-animate-fade">
        <div className="background-image"></div>
        <div className="background-filter"></div>

        <header>
          <a href="#"><div className="logo"></div></a>

          <div className="nav">
            <ul id="slideout-nav" className="w3-animate-top">
              <a href="">Home</a>
              <a href="#aboutpage">About</a>
              <a href="#portfoliopage">Portfolio</a>
              <a href="#resumepage">Resumé</a>
              <a href="#contactpage">Contact</a>
            </ul>
          </div>
        </header>

        <div className="about-container">

          <div className="about-content">
            <div className="column">
              <div className="headshot w3-animate-bottom"></div>
            </div>

            <div className="column">
              <div className="about-block w3-animate-top">
                <p>
                  I am a Nashville native who has always enjoyed technology. I have a degree in Logistics  from the University of Tennessee and had been working in I.T. the last two years before I took the leap of going to the Iron Yard for the Front-End Engineering course in the fall of 2015. I love technology, but I also love design. I decided to leave the I.T. world in order to pursue Web Development because I feel like I can satisfy both my love for technology, and my love for creativity in one field.
                </p>
                <p>
                  I am really passionate about people. I firmly believe in respecting others. I also believe the only way to lead other people is through example. I love working in a team environment and I believe that after some experience I will be able to manage a team of people to accomplish projects.
                </p>
              </div>
            </div>
          </div>

          <footer>
            <span id="copyright">© 2016 Jase Rader</span>

            <nav>
              <a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i></a>
              <a href="https://github.com/jaserader"><i className="fa fa-github-square"></i></a>
              <a href="https://www.linkedin.com/in/jaserader"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/jase_rader/"><i className="fa fa-instagram"></i></a>
              <a href="https://twitter.com/jaser316"><i className="fa fa-twitter"></i></a>
            </nav>
          </footer>
        </div>
      </div>
    )
  }
}

export default Aboutpage;
