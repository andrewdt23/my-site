import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed'

class Projects extends Component {
  render() {
    return (
      <div className = "container-fluid projects">
        <h1 className = 'project-title'>
        My Projects
        </h1>
        <div className = 'project-body'>
            <div className='spotify-photo'>
                <div className='spotify-title'>
                    Spotify Virtual Record Player
                </div>
                <div className='spotify-media'>
                    <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114534843979/large/1557336487/enhance" alt="Spotify Virtual Record Player"/>
                    <div className='spotify-video' style={{position: 'relative', display: 'inline-block', height: '0px', overflow: 'hidden', maxWidth: '50%', minWidth: '50%', paddingBottom: '32%'}}>
                        <iframe frameborder="0" class="spotify-video" src="https://www.youtube.com/embed/LEMDEE8djKg" allowfullscreen="" style={{paddingLeft: '2%', position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}></iframe>
                    </div>
                </div>
                <div className='spotify-body'>
                    <p className='spotify-description'>A virtual record player I built with a Raspberry Pi, RFID cards, and Spotify. The application consists of <a className="gotostage" href="https://www.pimusicbox.com/" target="_blank" rel="noopener noreferrer">PiMusicBox</a> and <a className="gotostage" href="https://github.com/fsahli/music-cards" target="_blank" rel="noopener noreferrer">this</a> open source project which I expanded and tailored for this project. </p>
                </div>
            </div>
            <div className='tidal-photo'>
                <div className='tidal-title'>
                    Tidal
                </div>
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
