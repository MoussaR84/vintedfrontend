import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Components/Checkout";

const stripePromise = loadStripe(
  "pk_test_51HoVPHKa9a9DCluRRfFTdTqKHqsIQkpkK1sldSVeLcAuqt9lWdCyYJJ7FDGjIjRHqs9SOhea5Coquo6kIzURhmep00WY3mZmjY"
);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default Payment;
