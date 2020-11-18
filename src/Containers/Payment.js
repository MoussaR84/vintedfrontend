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
    <main className="payment-main">
      <div className="container">
        <div className="payment-container">
          <div className="order-header">
            <h2>Résumé de la commande</h2>
            <div>
              <span className="legend">Produit</span>
              <span>Payment Nom du produit : {title}</span>
              <span>Prix du produit : {price}</span>
            </div>
            <Elements stripe={stripePromise}>
              <Checkout title={title} price={price} />
            </Elements>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
