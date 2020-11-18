import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Components/Checkout";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = () => {
  const location = useLocation();
  //console.log(location);
  const { title, price } = location.state;
  console.log(title);
  console.log(price);

  return (
    <div>
      <h1>coucou sabgsdigzaidga</h1>
      Payment Nom du produit : {title}
      Prix du produit : {price}
      <Elements stripe={stripePromise}>
        <Checkout title={title} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
