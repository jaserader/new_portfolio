import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Portfoliopage extends React.Component{

  render(){
    return(
      <div id="portfoliopage">
        <div className="background-image"></div>
        <div className="background-filter"></div>

        <header>
          <a href="#"><div className="logo"></div></a>

          <div className="nav">
            <ul id="slideout-nav" className="animated slideInDown">
              <a href="">Home</a>
              <a href="#aboutpage">About</a>
              <a href="#portfoliopage">Portfolio</a>
              <a href="#resumepage">Resumé</a>
              <a href="#contactpage">Contact</a>
            </ul>
          </div>
        </header>


        <div className="portfolio-container">
          <div className="portfolio-column blue1 animated slideInDown">
            <a href="https://gamewisp.com/" className="screen-shot">
              <img></img>
            </a>
            <a href="https://gamewisp.com/" className="description">
              <p>GameWisp: This is a screen shot of the current landing page of GameWisp which I designed and built. The rest of the site I designed and help build with launch around September 1, 2016.</p>
            </a>
          </div>

          <div className="portfolio-column blue2 animated slideInDown">
            <a href="http://jaserader.github.io/week10_finalproject_goals/#/?_k=vdlcgy" className="screen-shot">
              <img></img>
            </a>
            <a href="http://jaserader.github.io/week10_finalproject_goals/#/?_k=vdlcgy"className="description">
              <p>Goals: This is a simple social media site where a user can create an account and post personal life goals and be supported by other users that have accounts. This site was my final project at the Iron Yard. I worked on a team with another Front-End Developer and a Back-End Developer.</p>
            </a>
          </div>

          <div className="portfolio-column blue3 animated slideInDown">
            <a href="http://jaserader.github.io/homework_week06_tuesday/"className="screen-shot">
              <img></img>
            </a>
            <a href="http://jaserader.github.io/homework_week06_tuesday/" className="description">
              <p>Address Book: The purpose of this project was to use Backbone.js to communicate with an API hosted on Heroku. We were given creative freedom when styling this project.</p>
            </a>
          </div>

          <div className="portfolio-column blue4 animated slideInDown">
            <a href="https://github.com/jaserader/homework_week04_tuesday" className="screen-shot">
              <img></img>
            </a>
            <a href="https://github.com/jaserader/homework_week04_tuesday" className="description">
              <p>GitHub Repo: This is a project I did four weeks into The Iron Yard. We were told to make a pixel perfect replica of our personal GitHub repo list page. We had to use jQuery to make the project functional.</p>
            </a>
          </div>

          <footer>
            <span id="copyright">© 2016 Jase Rader</span>
          </footer>
        </div>
      </div>

    )
  }
}

export default Portfoliopage;
