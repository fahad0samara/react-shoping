import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/action";
import React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cards = ({item}) => {
  const dispatch = useDispatch();

  const send = e => {
    dispatch(ADD(e));
  };
  return (
    <div >
      <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div class="px-4 py-2">
          <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            {item.title}
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
            quidem sequi illum facere recusandae voluptatibus
          </p>
        </div>

        <img
          class="object-cover w-full h-48 mt-2"
          src={item.img}
          alt="NIKE AIR"
        />
        <p
          style={{
            color: "green",
            padding: "2px 5px",
            borderRadius: "5px",
          }}
        >
          {" "}
          ★{item.rating}{" "}
        </p>
        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 class="text-lg font-bold text-white">${item.price}</h1>
          <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Add to cart
            <ShoppingCartIcon onClick={() => send(item)} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
