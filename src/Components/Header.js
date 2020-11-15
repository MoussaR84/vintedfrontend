import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/logovinted.png";

const Header = ({ token, setUser }) => {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="header-logo" src={Logo} alt="logo" />
        </Link>
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
            <button className="signUp">Créer un compte</button>
          </Link>
          <Link to="/login">
            <button className="Login">Se connecter</button>
          </Link>{" "}
        </>
      )}
    </div>
  );
};
export default Header;
