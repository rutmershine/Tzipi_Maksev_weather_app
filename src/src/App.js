import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home"
import Favorites from './Favorites'
import Menu from './Menu'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
