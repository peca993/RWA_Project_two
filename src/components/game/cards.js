import React from 'react';
import ReactDOM from 'react-dom';
import Deck from 'deck-of-cards';
import 'deck-of-cards/example/example.css';

export default class Cards extends React.Component {

    constructor(){
        super();
   
            
    }

    
    render(){
        return(
            <div>
                <div id="deck"></div>
            </div>
        );
    }


}