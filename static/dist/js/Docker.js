import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';



//Component import
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';


// Pages import
import DockerHome from './pages/DockerHome';
import LinkPannelDiv from './pages/linkPannelDiv';
import AboutMe from './pages/aboutMe';
import ContactMe from './pages/contactMe';

class Docker extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="App-div">
          <DockerHome />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default Docker;
