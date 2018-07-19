import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="footer-text">
          <i class="far fa-copyright"></i>
          <span className="footer-name">2018 Andrew Thompson</span>
          <h1 className = "repo">
         <a href="https://github.com/andrewdt23/my-site" target="_blank" rel="noopener noreferrer">
          Check out the Github repo for this site
          </a>
          </h1>
      </div>
      </footer>
    );
  }
}

export default Footer;
