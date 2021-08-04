import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Test from './views/Test';

function App() {
  return (
    <div className="App">
    <Router>
      <Test path= "/hi" />
        <Main path="/"/>
        <Detail path="/author/:id" />
        <Update path="/author/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
