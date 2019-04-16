import React, {Component} from 'react';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Photography from './components/pages/photography';
import Videos from './components/pages/videos';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import './Assets/css/default.min.css';
import {
    BrowserRouter as Router, Route,
} from 'react-router-dom';

class App extends Component {
    render() {
        return (<Router>
            <div className="App">
                <Header/>
                <Route exact="exact" path='/' component={Homepage}/>
                <Route exact="exact" path='/Projects' component={Projects}/>
                <Route exact="exact" path='/Photography' component={Photography}/>
                <Route exact="exact" path='/Videos' component={Videos}/>
                <Route exact="exact" path='/Contact' component={Contact}/>
                <Footer/>
            </div>
        </Router>);
    }
}

export default App;
