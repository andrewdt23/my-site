import React, {Component} from 'react';

class Homepage extends Component {

    renderProfilePicture() {
        return (
            <div className="profile-picture">
                <img src="https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/022023533722/media/113794672291/medium/1522344307595/enhance" alt="Profile" class="img-circle"/>
            </div>
        );
    }

    renderBio() {
        return (
            <div className="bio-wrapper">
                <p className="Name">
                    Welcome to Andrew Thompson's Webpage!
                    <span className="peace"><i class="far fa-hand-peace"></i></span>
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
        );
    }

    renderPurpose() {
        return (
            <div className="site-purpose">
                <p className="purpose-title">
                    Purpose of this Website
                </p>
                <p className="purpose-description">
                    Thanks for taking the time to check out my website! If you have any suggestions for the site, find any bugs, or just want to say hi, feel free to reach out to me from the contact page. I created this website for two main reasons. First, I wanted to prove to myself that I could create a fully responsive website all on my own. I taught myself how to use all of the technologies used in building this site. However, I have to thank my amazing colleagues on the <a className="gotostage" href="https://www.gotostage.com/" target="_blank" rel="noopener noreferrer">GoToStage</a> team at <a className="logmein" href="https://www.logmein.com/" target="_blank" rel="noopener noreferrer">LogMeIn</a> for teaching me so much more about these technologies during my internship than I ever could learned on my own. The second reason I created this project was to showcase my design style and to function as a dynamic résumé. The goal was to design a simple yet modern website which is fully responsive and looks sleek on any sized device. Thanks again and I hope you enjoy the site!
                </p>
            </div>
        );
    }

    renderSiteDetails() {
        return (
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
        );
    }

    render() {
        return (<div className="container-fluid">
            {this.renderProfilePicture()}
            {this.renderBio()}
            <div className="more">
                <i class="fa fa-angle-double-down" aria-hidden="true"></i>
            </div>
            {this.renderPurpose()}
            <div className="site-creation">
                This site was created using:
            </div>
            {this.renderSiteDetails()}
        </div>);
    }
}

export default Homepage;
