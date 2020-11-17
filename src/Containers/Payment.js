import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../Components/Checkout";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ token }) => {
  const location = useLocation();
  const orderRef = location.orderRef;
  console.log("Ref. commande, page payment:", orderRef);
  return (
    <main>
      <div className="container">
        <div className="payment-container">
          <h2>Résumé de la commande</h2>
          <Elements stripe={stripePromise}>
            <Checkout orderRef={orderRef} />
          </Elements>
        </div>
      </div>
    </main>
  );
};

export default Payment;
