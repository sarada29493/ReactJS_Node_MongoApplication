import React from 'react';
import logo from './logo.svg';
import './App.css';

import EmployeeListcomponent from './Student/StudentList'

function App() {
  return (
    <div className="App">


      {<EmployeeListcomponent></EmployeeListcomponent>}
      {/* <Button variant="primary">Primary</Button> */}
    </div>
  );
}

export default App;
