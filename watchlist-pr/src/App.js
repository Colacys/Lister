import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header';
import {Watched} from './components/Watched';
import {Add} from './components/Add';
import {Watchlist} from './components/Watchlist';
import './css/App.css';
import "./lib/font-awesome/css/all.min.css";
import {MyLists} from "./components/MyLists";
import {Home} from "./components/home"
import {GlobalProvider} from "./context/GlobalState";


function App() {
  return (
  <GlobalProvider>
   <Router>
     <Header/>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/watchlist">
          <Watchlist />
        </Route>

        <Route exact path="/watched">
          <Watched />
        </Route>

        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/mylists">
          <MyLists />
        </Route>
      </Switch>
    </Router>
  </GlobalProvider>
  );
}

export default App;
