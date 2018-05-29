import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';
import Routes from './Routes';
import { store } from './store';

class App extends Component {
 

  render() {
 
    return (
      <BrowserRouter>
        <div>
          <Navbar title="ReactCMS"  links={store.getState()} />
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
