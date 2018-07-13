import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <h1 className = 'contact-title'>
        Contact Information/Resources
        </h1>
        <h2 className = 'contact-body'>
        Email:
         <a href="mailto:andrewdt23@gmail.com" target="_blank" rel="noopener noreferrer"><button className="button email-button">andrewdt23@gmail.com <i class="fas fa-envelope"></i></button></a>
         LinkedIn:
         <a href="https://www.linkedin.com/in/andrew-thompson-baab56148/" target="_blank" rel="noopener noreferrer"><button className="button linkedin-button">Andrew Thompson <i className="fab fa-linkedin"></i></button></a>
         Github:
         <a href="https://github.com/andrewdt23" target="_blank" rel="noopener noreferrer"><button className="button github-button">andrewdt23 <i class="fab fa-github"></i></button></a>
        </h2>
      </div>
    );
  }
}

export default Contact;
