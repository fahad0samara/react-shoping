import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51L9ELNKirGI4xLuFje5nhKydtSWAratO6zSb0HdHA0csOt16sFWs0x247vpjbrFr7HWPcgGHKETaIOUOzYoGUhtL00O0jbZYVV";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
