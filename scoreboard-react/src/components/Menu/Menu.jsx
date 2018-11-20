import React, { Component } from 'react'
import {Link} from 'react-router'


export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-start">
                        <Link to="/contador" className="navbar-item">Contador</Link>
                        <Link to="/score" className="navbar-item">Placar</Link>
                    </div>
                </nav>
            </div>
        )
    }
}
