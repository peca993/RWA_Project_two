import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';
import Routes from './Routes';

class App extends Component {
  
    constructor(){
      super();

      this.state = {
        links: [
          {title: 'Home', route: '/'},
          {title: 'About', route: '/about'}
        ]
      }
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar title="RWA 2" links={this.state.links} />
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
