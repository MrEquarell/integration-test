import React, { Component } from 'react';
import data from '../data/data.js';
import '../css/IndexAdvisors.css';

const advisor_1 = data[0]

class IndexAdvisors extends Component {
    render() {
        return (
            <div id="advisor-1">
                <img class="profil-img" src={advisor_1.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                <ul id="profil">
                    <li><a class="name">{advisor_1.first_name} {advisor_1.last_name}</a></li>
                    <li><a class="age">{advisor_1.age}</a></li>
                    <li><a class="school">{advisor_1.schools}</a></li>
                    <li><a class="rating">{advisor_1.rating}</a></li>
                </ul>
            </div>
        );
    }
}

export default IndexAdvisors;