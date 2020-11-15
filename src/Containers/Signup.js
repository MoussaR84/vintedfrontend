import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault(); // on ne rafraichit pas
    // direct requete vers axios pour password email et username
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token); // on part vers Home
        history.push("/");
      } else {
        alert("Une erreur est survenue"); // si probleme est survenue avec le catch comme error
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      Signup
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
