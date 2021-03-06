import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store';

class Navbar extends React.Component {


    componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }
    

    renderLinks(){

        console.log(store.getState())

        let listLinks =  store.getState().pages.filter((link) => {
            return link.route !== '/editor';
        }).map((link,key) =>
            <li key={key} className="nav-item active">
                <Link className="nav-link" to={link.route} >{link.title}</Link>
            </li>
        ).filter((link) => {
            return link.route !== '/editor';
        });

        return listLinks;
    }
 
    

     render(){
        
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-warning">
                <a className="navbar-brand" ><b>{store.getState().title[store.getState().title.length-1]}</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                            {this.renderLinks()}                       
                    </ul>                
                </div>
            </nav>
        );
    }
}



export default Navbar;