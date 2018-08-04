import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import { Modal, Tooltip, OverlayTrigger, Button} from 'react-bootstrap'

class Photography extends Component {

    constructor() {
        super();
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          showModal: true
        };
    }

    handleClose() {
        this.setState({showModal: false});
    }

    render() {
        let numColumns = 3;
        return (<div>
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton="closeButton">
                    <Modal.Title>Pro Tip</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Hover or tap on a photo to highlight it in the gallery.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div id="photography" className="photos">
                <div className='title'>
                    Andrew's Photography
                    <i class="fas fa-camera-retro"></i>
                </div>
                <p className='description'>
                    All photos were taken by myself with my Canon T6.
                </p>
                <body className='images'>
                    <Gallery photos={PHOTO_SET} columns={numColumns}/>
                </body>
            </div>
        </div>);
    }
}

const PHOTO_SET = [
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792591732/medium/1522207282/enhance',
        width: 3,
        height: 2
    }, {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592714/medium/1522207333/enhance',
        width: 3,
        height: 2
    }, {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792593095/medium/1522207351/enhance',
        width: 3,
        height: 2
    }, {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592348/medium/1522207315/enhance',
        width: 3,
        height: 2
    }, {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592878/medium/1522207341/enhance',
        width: 3,
        height: 2
    }
];

export default Photography;
