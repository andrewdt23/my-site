import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className = "container-fluid projects">
        <h1 className = 'project-title'>
        My Projects
        </h1>
        <div className = 'project-body'>
            <div className='tidal-photo'>
                <a href="https://tidal.netlify.com/" target="_blank" rel="noopener noreferrer">
                    <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114516057087/large/1556218797/enhance" alt="Tidal"/>
                </a>
                <div className='tidal-body'>
                    <p className='tidal-description'>Tidal is a single-page web app which targets a user's location to display county-based tide information. I created this application because I wanted a quick and clean way to check the tide for surfing.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Projects;
