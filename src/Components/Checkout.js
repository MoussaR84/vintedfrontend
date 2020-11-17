import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const Checkout = ({ price, username }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [succeed, setSucceed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: username,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
        }
      );
      if (response.data.status === "succeeded") {
        setSucceed(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {succeed ? (
        <p>succeeded</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardElement />

          <button type="submit">Valider</button>
        </form>
      )}
    </>
  );
};

export default Checkout;
