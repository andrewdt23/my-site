import React, { Component } from 'react';
import Header from './components/headerComponent/header';
import HeaderTwo from './components/headerComponent/headerTwo';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Photography from './components/pages/photography';
import Contact from './components/pages/contact';
import './Assets/css/default.min.css';
import{
    BrowserRouter as Router,
    Route,//
} from 'react-router-dom';
//
class App extends Component {
  render() {
    return (
    <Router>
          <div className="App">
            <HeaderTwo />
                <Route exact path = '/' component = {Homepage} />
                <Route exact path = '/Photography' component = {Photography} />
                <Route exact path = '/Contact' component = {Contact} />
            <Footer />
          </div>
    </Router>
    );
  }
}//

export default App;
