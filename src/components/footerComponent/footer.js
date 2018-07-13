import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      <i class="far fa-copyright"></i>
      2018 Andrew Thompson
      <h1 className = "repo">
     <a href="https://github.com/andrewdt23/my-site" target="_blank" rel="noopener noreferrer">
      Check out the Github repo for this site
      </a>
      </h1>
      </footer>
    );
  }
}

export default Footer;
