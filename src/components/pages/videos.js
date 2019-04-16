import React, { Component } from 'react';
import ResponsiveEmbed from 'react-responsive-embed'

class Videos extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <h1 className = 'video-title'>
            Videos
        </h1>
        <div className = 'video-body'>
            <div className='video-youtube'>
                <ResponsiveEmbed src='https://www.youtube.com/embed/HP4P4KnvHHU' allowFullScreen />
            </div>
            <div className='video-youtube'>
                <ResponsiveEmbed src='https://www.youtube.com/embed/vz2SSjQvEPg' allowFullScreen />
            </div>
            <div className='video-youtube'>
                <ResponsiveEmbed src='https://www.youtube.com/embed/QOt6-4NxF4w' allowFullScreen />
            </div>
            <div className='video-youtube'>
                <ResponsiveEmbed src='https://www.youtube.com/embed/UIEF8Ne94R0' allowFullScreen />
            </div>
        </div>
      </div>
    );
  }
}

export default Videos;
