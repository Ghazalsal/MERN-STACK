import {Router} from '@reach/router';
import './App.css';
import Show from './components/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Show path="/home" variable={"Welcome"} />
        <Show path="/:variable" />
        <Show path="/:variable/:color/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
