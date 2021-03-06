import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Contactpage extends React.Component{

  render(){
    return(
      <div id="contactpage">
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


        <div className="contact-container">
          <div className="contact-info animated slideInRight">
            <span className="h1">Contact:</span>
            <hr></hr>
            <a href="mailto:jaserader@icloud.com"><i className="fa fa-envelope-o"></i>jaserader@icloud.com</a>
            <a href="tel:615-838-5484"><i className="fa fa-mobile"></i>615-838-5484</a>
          </div>

          <div className="social-info animated slideInLeft">
            <span className="h1">Check Me Out On:</span>
            <hr></hr>
            <a href="https://github.com/jaserader"><i className="fa fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/jaserader"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://www.instagram.com/jase_rader/"><i className="fa fa-instagram"></i></a>
            <a href="https://twitter.com/jaser316"><i className="fa fa-twitter"></i></a>
          </div>

          <footer>
            <span id="copyright">© 2016 Jase Rader</span>

          </footer>
        </div>
      </div>

    )
  }
}

export default Contactpage;
