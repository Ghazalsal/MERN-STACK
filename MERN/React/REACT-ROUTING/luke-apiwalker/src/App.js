import './App.css';
import {Router} from '@reach/router';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Search from './components/Search';
import People from './components/People';
import Planet from './components/Planet';


function App() {
  return (
    <div className="App">
      <Search />
      <Router>
        <People path="/people/:id" />
        <Planet path="/planets/:id" />
      </Router>
    </div>
  );
  
}

export default App;
