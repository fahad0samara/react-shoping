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
        setError(error.message);
      }
    } else {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      {processing &&
       (setTimeout(() => {
          setProcessing(null);
        }, 2000),
        (
         <div class="w-full text-white bg-emerald-500">
        <div class="container flex items-center justify-between px-6 py-4 mx-auto">
          <div class="flex">
            <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
            </svg>

            <p class="mx-3">You finished the tasks.</p>
          </div>

          <button class="p-1 transition-colors duration-200 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      ))
      
      
      }
     

      {error &&
        (setTimeout(() => {
          setError(null);
        }, 80000),
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
          {processing && <div className="FormRow">{processing}</div>}
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>

          <button className="success ">Pay</button>
        </form>
      ) : (
        <h1>ss</h1>
      )}
    </>
  );
}
