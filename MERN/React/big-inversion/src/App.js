import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={45} color={"Black"}/>
    
      <PersonCard lastName={"Smith"} firstName={"John"} age={24} color={"Brown"}/>
      <PersonCard lastName={"Hussari"} firstName={"Rahaf"} age={25} color={"Brown"}/>
      <PersonCard lastName={"Dawani"} firstName={"Jad"} age={24} color={"Black"}/>
    </div>
  );
}

export default App;
