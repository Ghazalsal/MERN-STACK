import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App(props) {
  return (
    <div className="App">
      <Router>
        <Main path="/product/" />
        <Detail path="/product/:id" />
        <Update path = "/product/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
