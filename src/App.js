import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Offer from "./Components/Offer";

const App = () => {
  const [user, setUser] = useState();

  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/Login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/offers/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

// ne pas oublier que le "/" va en dernier "
