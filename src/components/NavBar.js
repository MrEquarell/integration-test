import React, { Component } from 'react';
import '../css/NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <span id="logo">
                        <a href="#">STUDY ADVISOR</a>
                    </span>

                    <ul id="menu">
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a class="join" href="contact.html">Rejoindre Study Advisor</a></li>
                    </ul>
                </nav> 
            </div>
        );
    }
}

export default NavBar;