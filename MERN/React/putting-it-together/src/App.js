import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard name={"Doe, Jane"} age={45} color={"Black"}/>
      
      <PersonCard name={"Smith,John"} age={24} color={"Brown"}/>
      
    </div>
  );
}

export default App;