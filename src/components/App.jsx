import React from 'react';
import data from '../data/data.js'


const App = () => {
const advisor_1 = data[0]

  return (
    <div>
      Hello,
      {name}
      <img src={advisor_1.picture_url} alt="" style={{width: "50px", height: "50px" }}/>
      <p>
        {advisor_1.description}
      </p>
    </div>
  );
};

export default App;
