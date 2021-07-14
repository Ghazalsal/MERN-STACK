import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastname={"Doe"} firstName={"Jane"} age={45} color={"Black"}/>
      
      <PersonCard lastname={"Smith"} firstName={"John"}  age={24} color={"Brown"}/>
      
    </div>
  );
}

export default App;