import React, { Component } from 'react';
import data from '../data/data.js';
import '../css/IndexAdvisors.css';

const advisor_1 = data[0]
const advisor_2 = data[1]
const advisor_3 = data[2]
const advisor_4 = data[3]
const advisor_5 = data[4]
const advisor_6 = data[5]


class IndexAdvisors extends Component {
    render() {
        return (
            <div id="advisors">
                <div id="advisor" class="advisor-1">
                    <img class="profil-img" src={advisor_1.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_1.first_name} {advisor_1.last_name}</a></li>
                        <li><a class="age">{advisor_1.age}</a></li>
                        <li><a class="school">{advisor_1.schools}</a></li>
                        <li><a class="rating">{advisor_1.rating}</a></li>
                    </ul>
                </div>
                <div id="advisor" class="advisor-2">
                    <img class="profil-img" src={advisor_2.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_2.first_name} {advisor_2.last_name}</a></li>
                        <li><a class="age">{advisor_2.age}</a></li>
                        <li><a class="school">{advisor_2.schools}</a></li>
                        <li><a class="rating">{advisor_2.rating}</a></li>
                    </ul>
                </div>
                <div id="advisor" class="advisor-3">
                    <img class="profil-img" src={advisor_3.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_3.first_name} {advisor_3.last_name}</a></li>
                        <li><a class="age">{advisor_3.age}</a></li>
                        <li><a class="school">{advisor_3.schools}</a></li>
                        <li><a class="rating">{advisor_3.rating}</a></li>
                    </ul>
                </div>
                <div id="advisor" class="advisor-4">
                    <img class="profil-img" src={advisor_4.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_4.first_name} {advisor_4.last_name}</a></li>
                        <li><a class="age">{advisor_4.age}</a></li>
                        <li><a class="school">{advisor_4.schools}</a></li>
                        <li><a class="rating">{advisor_4.rating}</a></li>
                    </ul>
                </div>
                <div id="advisor" class="advisor-5">
                    <img class="profil-img" src={advisor_5.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_5.first_name} {advisor_5.last_name}</a></li>
                        <li><a class="age">{advisor_5.age}</a></li>
                        <li><a class="school">{advisor_5.schools}</a></li>
                        <li><a class="rating">{advisor_5.rating}</a></li>
                    </ul>
                </div>
                <div id="advisor" class="advisor-6">
                    <img class="profil-img" src={advisor_6.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                    <ul id="profil">
                        <li><a class="name">{advisor_6.first_name} {advisor_6.last_name}</a></li>
                        <li><a class="age">{advisor_6.age}</a></li>
                        <li><a class="school">{advisor_6.schools}</a></li>
                        <li><a class="rating">{advisor_6.rating}</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default IndexAdvisors;