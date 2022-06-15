import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import React, {useState,useEffect} from "react";

import { useNavigate } from "react-router-dom";




const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      color: "#32325d",
      fontFamily: "Arial, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "30px",
      "::placeholder": {
        color: "#fff",
      },
    },
    invalid: {
      fontFamily: "Arial, sans-serif",
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function PaymentForm() {
  const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
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


    const handleChange = async event => {
      // Listen for changes in the CardElement
      // and display any errors as the customer types their card details
      setDisabled(event.empty);
      setError(event.error ? event.error.message : "");
    };
  const handleSubmit = async e => {
    e.preventDefault();
    
    setProcessing(true);
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
          setSucceeded(true);
          console.log("Successful payment");


          setSuccess(true);

        }
      } catch (error) {
        console.log("Error", error);
        setError(error.message);
      }
    } else {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      {error &&
        (setTimeout(() => {
          setError(null);
        }, 2000),
        (
          <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="flex items-center justify-center w-12 bg-red-500">
              <svg
                class="w-6 h-6 text-white fill-current"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
              </svg>
            </div>

            <div class="px-4 py-2 -mx-3">
              <div class="mx-3">
                <span class="font-semibold text-red-500 dark:text-red-400">
                  {error}
                </span>
                <p class="text-sm text-gray-600 dark:text-gray-200"></p>
              </div>
            </div>
          </div>
        ))}

      {!success ? (
        <form onSubmit={handleSubmit} className="">
          <h1>enter </h1>
          <fieldset className="FormGroup">
            <div className="">
              <CardElement options={CARD_OPTIONS} onChange={handleChange} />
            </div>
          </fieldset>

          <button disabled={processing || disabled || succeeded} id="submit">
            <span id="button-text" className=" bg-orange-400 text-4xl">
              {processing ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                <button
                  className="text-2xl leading-none    py-3
                        bg-white
    border-[#1abc9c]
    border focus:outline-none   border-x-8 text-black"
                >
                  Pay NOW
                </button>
              )}
            </span>
          </button>
        </form>
      ) : (
        <h1>{success}</h1>
      )}
    </>
  );
}
