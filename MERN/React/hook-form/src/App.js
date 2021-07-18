import React, { useState } from 'react';

import './App.css';
import Hook from './components/Hook';
import Results from './components/Results';

function App() {
  const [state,setState] = useState({
    firstName: "",
    lastName:"",
    email:"",
    password: "",
    confPassword: ""
  });
  return (
    <div className="App">
      <Hook inputs = {state} setInputs={setState} />
      <Results data = {state} />
    </div>
  );
}

export default App;