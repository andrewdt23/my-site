import React, {Component} from 'react';

class Homepage extends Component {
    render() {
        return (<div className="container-fluid">
            <div className="profile-picture">
                <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113794672291/medium/1522344307595/enhance" alt="Profile" class="img-circle"/>
            </div>
            <div className="bio-wrapper">
                <p className="Name">
                    Welcome to Andrew Thompson's Webpage!
                    <i class="far fa-hand-peace"></i>
                </p>
                <p className="bio">
                    Andrew is currently an undergraduate computer engineering student at UC Santa Barbara. His interests include web develeopment, computer vision, and embedded systems. In his free time, he enjoys photography, playing the guitar, and spending time with family and friends.
                </p>
                <div className="profile-links">
                    <a href="https://www.linkedin.com/in/andrew-thompson-baab56148/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/andrewdt23" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:andrewdt23@gmail.com" target="_top">
                        <i class="far fa-envelope"></i>
                    </a>
                </div>
            </div>
            <div className="more">
                <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </div>
            <div className="site-purpose">
            </div>
            <div className="site-creation">
                This site was created using:
            </div>
            <div className="site-details">
                <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-react"></i>
                </a>
                <a>
                    <i class="fab fa-html5"></i>
                </a>
                <a>
                    <i class="fab fa-css3-alt"></i>
                </a>
                <a href="https://sass-lang.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-sass"></i>
                </a>
                <a href="https://gulpjs.com" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-gulp"></i>
                </a>
                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-node"></i>
                </a>
            </div>
        </div>);
    }
}

export default Homepage;
