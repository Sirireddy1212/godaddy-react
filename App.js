import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {dosomething} from './Component/Navbar';
import {NavBar1,Main} from './Component/NavBar1';



function App() {
  dosomething()
  return (
    <div className="App">
      <Navbar/>
      <NavBar1/>
      <Main/>
     
    </div>
  );
}

export default App;

