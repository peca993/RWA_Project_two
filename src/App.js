import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';
import Routes from './Routes';
class App extends Component {
 

  render() {
 
    return (
      <BrowserRouter>
        <div>
          <Navbar title="ReactCMS" />
          <div className="container">
            {this.props.children}
            <Routes/>
          </div>
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
