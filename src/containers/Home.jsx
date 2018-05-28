import React from 'react';
import { store } from '../store';
//import { connect } from 'react-redux';



class Home extends React.Component {
       
    render(){
    
        return(
 
            <div>
                <h1>Home</h1>
                <button className="btn btn-primary" 
                onClick={() => {
                    store.dispatch({
                        type: "ADD_LINK",
                        payload: {
                            title: 'title',
                            route: 'title',
                            text: 'blablablablablablablablabla blablablablabla blablablablablablabla'
                        }
                    })
                }}
                     >ADD</button>

                <button className="btn btn-secondary" onClick={ () => {
                     store.dispatch({
                        type: "REMOVE_LINK"
                    })
            
                    console.log(store.getState().links.links)

                } 
                }>REMOVE</button>
            </div>
        );
    }
}



export default Home;