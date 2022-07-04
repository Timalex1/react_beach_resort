import './App.css';
import Home from "./components/pages/Home";
import Rooms from "./components/pages/Rooms";
import SingleRoom from "./components/pages/SingleRoom";
import Error from "./components/pages/Error";
import React from "react";
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rooms" component={Rooms} /> />
            <Route path="/room/:slug" component={SingleRoom} /> />
            <Route path="*" component={Error} /> />
        </Switch>
    </div>
  );
}

export default App;
