import Box from './components/Box';
import './App.css';
import { useState } from 'react';
import Show from './components/Show';

function App() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (color, width, height) => {
    setBoxes([...boxes, { color, width, height }])
  }
  return (
    
    <div className="App">
      <Box addBox={addBox} />
      <Show boxes={boxes} /> 
    </div>
  );
}

export default App;
