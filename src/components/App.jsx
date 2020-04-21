import React from 'react';
import data from '../data/data.js'

import IndexAdvisor from '../pages/IndexAdvisors';
import NavBar from './NavBar';


const App = () => {
const advisor_1 = data[0]

  return (
    <div>
      <NavBar></NavBar>
      <IndexAdvisor></IndexAdvisor>
    </div>
  );
};

export default App;
