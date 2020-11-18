import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/logovinted.png";
import Input from "./Input";

//balance un cookie mais on verra à la fin
const Header = ({ token, setUser, setSearch }) => {
  console.log("TOOOKEEEN ===>", token);
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo" />
        </Link>

        <Input className="inputform" setSearch={setSearch} />
      </div>
      {token ? (
        <button
          className="disconect"
          onClick={() => {
            setUser(null);
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button className="button-login-signup">Créer un compte</button>
          </Link>
          <Link to="/login">
            <button className="Login">Se connecter</button>
          </Link>
        </>
      )}
    </div>
  );
};
export default Header;
