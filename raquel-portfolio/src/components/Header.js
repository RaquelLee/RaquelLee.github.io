import React from "react";

function HeaderNav(props) {
  return (<div>
    <div className="parallax-container">
      <div className="row">
        <div className="col m3">
        </div>
        <div className="col m1 center">
          <a href="#PortfolioPage"
            onClick={() => props.handlePageChange("PortfolioPage")}
          >
            <i className="fas fa-code"></i>
            <p className="navtxt">Portfolio</p>
          </a>
        </div>
        <div className="col m1 center">
          <a href="google.com" target="_blank">
            <i className="far fa-file"></i>
            <p className="navtxt">Resume</p>
          </a>
        </div>
        <div className="col m1 center">
          <a href="#Contact"
            onClick={() => props.handlePageChange("Contact")}
          >
            <i className="far fa-paper-plane"></i>
            <p className="navtxt">Contact</p>
          </a>
        </div>
        <div className="col m1 center">
          <a href="#About" onClick={() => props.handlePageChange("About")}
          >
            <i className="fas fa-user"></i>            <p className="navtxt">About Me</p>
          </a>

        </div>
        <div className="col m1 center">
          <a href="https://github.com/RaquelLee" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <p className="navtxt">GitHub</p>
          </a>
        </div>
        <div className="col m1 center">
          <a href="https://www.linkedin.com/in/raquelscofield" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in"></i>
            <p className="navtxt">LinkedIn</p>
          </a>
        </div>

        <div className="col m3">
        </div>
      </div>
      <div className="parallax">
        <img alt="" src="https://github.com/RaquelLee/RaquelLee.github.io/blob/main/assets/images/parallax2.jpeg?raw=true" className="responsive-img"></img>
      </div>
    </div>
  </div>
  );
}

export default HeaderNav;