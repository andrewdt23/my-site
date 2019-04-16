import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import { Modal, Button} from 'react-bootstrap'

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

    renderModal() {
        return (
            <div>
                <Modal className="photo-modal" show={this.state.showModal} onHide={this.handleClose}>
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
            </div>
        );
    }

    renderContent() {
        let numColumns = 2;
        return (
            <div id="photography" className="photos">
                <div className='photos-title'>
                    Andrew's Photography
                    <i class="fas fa-camera-retro"></i>
                </div>
                <p className='photos-description'>
                    All photos were taken with my Canon T6.
                </p>
                <body className='images'>
                    <Gallery photos={PHOTO_SET} columns={numColumns}/>
                </body>
            </div>
        );
    }

    render() {
        return (<div>
            {this.renderModal()}
            {this.renderContent()}
        </div>);
    }
}
const PHOTO_SET = [
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010871515/medium/1533963254892/enhance',
        width: 3,
        height: 2
    }, {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792592714/medium/1522207333/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113792591732/medium/1522207282/enhance',
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
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010871507/medium/1533963348296/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010871510/medium/1533963428724/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113794799474/medium/1522351299/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010871491/small/1533963702796/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010874854/medium/1533963732864/enhance',
        width: 3,
        height: 2
    },
    {
        src: 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/114010874887/medium/1533963754756/enhance',
        width: 3,
        height: 2
    }
];

export default Photography;
