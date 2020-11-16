import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Offer from "./Components/Offer";
import Cookie from "js-cookie";

const App = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const cookie = Cookie.get("tokenCookie");
  const [token, setToken] = useState(cookie || "");
  const connect = (tokenCookie) => {
    Cookie.set("tokenCookie", tokenCookie);
    setToken(tokenCookie);
  };

  return (
    <>
      <Router>
        <Header setSearch={setSearch} />
        <Switch>
          <Route path="/signup">
            <Signup setUser={setUser} connect={connect} />
          </Route>
          <Route path="/Login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Home search={search} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

// ne pas oublier que le "/" va en dernier "
