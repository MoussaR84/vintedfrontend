import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Containers/Home";
import Login from "./Containers/Login";
import Signup from "./Containers/Signup";
import Offer from "./Components/Offer";
import Cookies from "js-cookie";
import Publish from "./Containers/Publish";

const App = () => {
  const [user, setUser] = useState("");
  const [search, setSearch] = useState("");
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUsers = (tokenToSet) => {
    if (tokenToSet) {
      // ON CREE UN COOKIE ET ON DONNE UNE DIUREE DE VIE
      Cookies.set("token", tokenToSet, { expires: 3000 });
      setToken(tokenToSet);
    } else {
      console.log("coucou");
      // ON SUPPRIME LE COOKIE
      Cookies.remove("token");
      // ON LE REPASSE A VALEUR NULL
      setToken(null);
    }
  };

  return (
    <>
      <Router>
        <Header setSearch={setSearch} token={token} setUser={setUsers} />
        <Switch>
          <Route path="/signup">
            <Signup setUser={setUsers} />
          </Route>
          <Route path="/Login">
            <Login setUser={setUsers} />
          </Route>
          <Route path="/offer/:id">
            <Offer token={token} />
          </Route>
          <Route path="/Publish">
            <Publish token={token} />
          </Route>
          <Route path="/">
            <Home search={search} token={token} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
