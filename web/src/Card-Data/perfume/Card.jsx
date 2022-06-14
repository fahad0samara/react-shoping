import React from 'react';
import {Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Card = ({item}) => {
  const dispatch = useDispatch();

  const send = e => {
   
    dispatch(ADD(e));
  };
  return (
    <div>
      <section class=" body-font">
        <div class="">
          <div class="mx-10 border-4  drop-shadow-2xl">
            <div class="">
              <a class="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full  h-full block"
                  src={item.img}
                />
              </a>
              <div class="mt-4">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p class="mt-1">${item.price}</p>
                <button
                  onClick={() => send(item)}
                  class="flex items-center justify-center w-1/2 px-2 py-1 text-white transition-colors duration-200 transform bg-[#1abc9c] rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                >
                  <ShoppingCartIcon />
                  <span class="mx-2">add to card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
