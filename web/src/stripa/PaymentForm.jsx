import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import React, {useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";




const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {color: "#fce883"},
      "::placeholder": {color: "#87bbfd"},
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
    
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);


  const navigate = useNavigate();
  useEffect(() => {
    
    if (success) {
    

      navigate("/successs");
    }
  }, [ success, navigate ]);


  const handleSubmit = async e => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const {id} = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount:5000,
          id,
        });

        if (response.data.success) {
          setProcessing(false);
          console.log("Successful payment");


          setSuccess(true);

        }
      } catch (error) {
        console.log("Error", error);
        setError(error);
      }
    } else {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit} className="">
          {error && <div className="FormRow">{error}</div>}
          {processing && <div className="FormRow">{processing}</div>}
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>

          <button>Pay</button>
        </form>
      ) : (
        <h1>ss</h1>
      )}
    </>
  );
}
