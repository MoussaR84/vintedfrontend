import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="signup-container">
        <h2>Login</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Adresse mail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/Login",
                {
                  email: email,
                  password: password,
                }
              );
              Cookies.set("token", response.data.token);
              setUser(response.data.token);
              history.push("/");
            }}
          >
            Go
          </button>
          <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
