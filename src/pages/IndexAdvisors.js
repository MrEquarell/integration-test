import React, { Component } from 'react';
import data from '../data/data.js';
import '../css/IndexAdvisors.css';

const advisor_1 = data[0]

class IndexAdvisors extends Component {
    render() {
        return (
            <div class="advisors">
                <img class="profil-img" src={advisor_1.picture_url} alt="" style={{width: "100px", height: "100px" }}/>
                Hello,
                {name}
                <p>
                    {advisor_1.age}
                </p>
            </div>
        );
    }
}

export default IndexAdvisors;