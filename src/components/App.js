import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";
import Messages from "./Messages";
import Home from "./Home";

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
        </Switch>
        <Switch>
            <Route path="/messages">
                <Messages />
            </Route>
        </Switch>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
    
  )
}

export default App;