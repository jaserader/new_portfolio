import React from 'react';
import { Link } from "react-router";
import $ from 'jquery';

class Resumepage extends React.Component{

  render(){
    return(
      <div id="resumepage">
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


        <div className="resume-container">

          <div className="resume animated slideInUp">
            <p id="skills">
              SKILLS:	HTML, CSS, SASS, JavaScript, jQuery, Knockout.js, Bourbon/Neat, React, Backbone.js, Git, GitHub, SourceTree, Command Terminal, Bower, NPM, Gulp, PHP, Laravel, Sketch, Adobe Illustrator, Adobe Capture
            </p>
              <div className="resume-block">
                <span className="resume-title">GameWisp, Inc. - <span>Software Developer II & UI Designer</span></span><span className="resume-title">Nashville, TN</span>
                <p>February 2016 - August 2016</p>
                <ul>
                  <li>Redesigned entire site for September 2016 launch of a new GameWisp site</li>
                  <li>Established design and Front End techniques to make site more user friendly</li>
                  <li>Created wire frames with Sketch to create new page designs and work flow</li>
                  <li>Worked in dev environment daily to help build the new and redesigned pages</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">Branstetter, Stranch and Jennings, PLLC</span><span className="resume-title">Nashville, TN</span>
                <p>August 2013 - October 2015</p>
                <ul>
                  <li>Provided attorneys and staff with hardware and software technical support</li>
                  <li>Assisted office manager with billing and operational duties</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">21st Mortgage Corporation</span><span className="resume-title">Knoxville, TN</span>
                <p>May 2012 - July 2013</p>
                <ul>
                  <li>Managed delinquent accounts and provided financial services for a diverse customer base</li>
                  <li>Analyzed accounts to allocate financial solutions for customers</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">Professional Roofers</span><span className="resume-title">Franklin, TN</span>
                <p>May - August 2011, January - May 2012</p>
                <ul>
                  <li>Aquired sales techniques to develop a customer base for a small business</li>
                  <li>Built and maintained customer relationships for the company</li>
                </ul>
              </div>
            <hr></hr>
              <div className="resume-block">
                <span className="resume-title">Apple Store</span><span className="resume-title">Knoxville, TN</span>
                <p>January - August 2010</p>
                <ul>
                  <li>Focused on sales and providing customer satisfaction</li>
                  <li>Developed extensive knowledge of all products and services</li>
                </ul>
              </div>
          </div>

          <footer>
            <a href="img/resume.pdf" download="resume.pdf"><i className="fa fa-download animated bounce"></i> Download Resumé</a>
          </footer>
        </div>
      </div>

    )
  }
}

export default Resumepage;
