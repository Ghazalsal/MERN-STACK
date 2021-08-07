
import { Router } from '@reach/router';
import './App.css';
import LinkTo from './components/LinkTo';
import PlayerForm from './components/PlayerForm';
import Main from './views/Main';
import ManageGames from './views/ManageGames';

function App() {
  return (
    <div className="App">
    <LinkTo />
      <Router>
        <Main path="/players/list" />
        <ManageGames path="/status/game/1" />
      </Router>
    </div>
  );
}

export default App;
