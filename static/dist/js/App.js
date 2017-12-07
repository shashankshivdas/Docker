import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';
import './App.css';

//Assets File import
import './Assets/css/style.css';

//Component import
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';


// Pages import
import HomePage from './pages/homePage';
import LinkPannelDiv from './pages/linkPannelDiv';
import AboutMe from './pages/aboutMe';
import ContactMe from './pages/contactMe';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <div className="App-div">
          <LinkPannelDiv />
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/AboutMe" component={AboutMe} />
          <Route exact path="/ContactMe" component={ContactMe} />
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
