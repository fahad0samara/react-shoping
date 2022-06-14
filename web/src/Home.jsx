import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./stripa/PaymentForm";
import Data1 from "./Card-Data/fitness products/Data";
import Data2 from "./Card-Data/body products/Data";
import Data3 from "./Card-Data/Stuffed_Animals/Data";
import Data4 from "./Card-Data/Headphones/Data";
import Data5 from "./Card-Data/shoes/Data";
import Data6 from "./Card-Data/perfume/Data";
import Hero from './components/Hero';
import Client from './components/Client';
import Footer from './components/Footer';
const stripePromise = loadStripe(
  "pk_test_51L9ELNKirGI4xLuFje5nhKydtSWAratO6zSb0HdHA0csOt16sFWs0x247vpjbrFr7HWPcgGHKETaIOUOzYoGUhtL00O0jbZYVV"
);

const Home = () => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/create-payment-intent", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({items: [{id: "xl-tshirt"}]}),
      })
        .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
      theme: "stripe",
    };
    const options = {
      clientSecret,
      appearance,
    };

  return (
    <div>
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>

      <Hero />
      <Data6 />

      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
      <Data5 />
      <Client />
      <Footer />
    </div>
  );
}

export default Home