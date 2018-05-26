import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    renderLinks(){
        const listLinks =  this.props.links.map((link,key) =>
            <li key={key} className="nav-item active">
                <Link className="nav-link" to={link.route} >{link.title}</Link>
            </li>
        );

        return listLinks;
    }
 
    render(){
        return(
            <nav className="navbar navbar-expand-md navbar-light bg-warning">
                <a className="navbar-brand" >{this.props.title}</a>
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