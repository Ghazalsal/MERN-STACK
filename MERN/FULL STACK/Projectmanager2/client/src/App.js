import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
function App(props) {
  return (
    <div className="App">
      <Router>
        <Main path="/product/" />
        <Detail path="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
