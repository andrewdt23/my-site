import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';

class Photography extends Component {
  render() {
    return (
      <div className = "photos">
        <h1 className = 'title'>
        Andrew's Photography
        <i class="fas fa-camera-retro"></i>
        </h1>
        <p className = 'description'>
        All photos were taken by myself with my Canon T6.
        </p>
        <body className = 'images'>
        <Gallery photos={PHOTO_SET} columns = {3}/>
        <h2 className = "hover">
        Hover here!
        <i class="fas fa-mouse-pointer"></i>
        </h2>
        </body>
      </div>
    );
  }
}

const PHOTO_SET = [
  {
    src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792591732/medium/1522207282/enhance',
    width: 3,
    height: 2
  },
  {
    src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592714/medium/1522207333/enhance',
    width: 3,
    height: 2
  },
  {
    src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792593095/medium/1522207351/enhance',
    width: 3,
    height: 2
  },
  {
    src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592348/medium/1522207315/enhance',
    width: 3,
    height: 2
  },
  {
    src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592878/medium/1522207341/enhance',
    width: 3,
    height: 2
  }
];

export default Photography;
