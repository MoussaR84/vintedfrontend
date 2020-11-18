import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const Checkout = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Stripe recupere les données bancaire
    const cardElement = elements.getElement(CardElement);

    // Envoi de la requëte dans l API
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "428492FJEDLZ90",
    });

    // console.log(stripeResponse);

    const stripeToken = stripeResponse.token.id;

    // Requete  Ã  mon serveur
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        token: stripeToken,
        title: title,
        amount: price,
      }
    );
    // console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };

  return (
    <div>
      {completed ? (
        <p>Paiment effectué !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit">Acheter</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
