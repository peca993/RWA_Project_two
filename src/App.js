import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Navbar} from './components';
import Routes from './Routes';
import { store } from './store';

class App extends Component {
  
    constructor(){
      super();

      this.state = {
        links: [
          {title: 'Home', route: '/'},
          {title: 'About', route: '/about'},
          {title: 'Download', route: '/download'},
          {title: 'Contact', route: '/contact'}
        ]
      }
}

  render() {
    
    

    //const store = createStore(Demo,this.links);
    
/*    
    store.subscribe(() => {
            console.log("Store is now",store.getState());
        }
    )

    store.dispatch({
      type: "ATTAgCK",
      payload: "Iron Man"                       
  })
    
    store.dispatch({
        type: "ATTACK",
        payload: "Iron Man"                       
    })

 */

    return (
      <BrowserRouter>
        <div>
          <Navbar title="Saki Maca"  links={store.getState()} />
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
