import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';
import Scores from './scores';

export default class Navbar extends React.Component {


    render() {
        return (
            <Router>
                <div>
                <nav className="navbar navbar-expand-md navbar-light bg-secondary">
                    <a className="navbar-brand">ReactivePoker</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/scores">Scores</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
  
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/scores" component={Scores} />
                    </div>
            </Router>
        );
    }
} 