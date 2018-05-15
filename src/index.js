import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/layout/navbar';
import './style/bootstrap';
import $ from 'jquery';

export default class App extends React.Component {

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
  