import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/layout/navbar';
import './style/bootstrap';
import $ from 'jquery';
import Cards from './components/game/cards';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class App extends React.Component {

  constructor(){
    super();

    
  
  }

  
  render(){
    return(
    <div>
      
      <Navbar/>
        
    </div>
    );
  }

}
  
  // ========================================
  
  

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

