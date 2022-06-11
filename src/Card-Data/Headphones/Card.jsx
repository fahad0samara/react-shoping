import React from 'react';
import {Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Cardd = ({item}) => {
  const dispatch = useDispatch();

  const send = e => {
    console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div>
      <figure class="snip1208 border-2 border-yellow-300 drop-shadow-2xl shadow-2xl">
        <img
          src={item.img}
          alt="sample66"
          className="  h-64 w-64  object-cover wsk-cp-product "
        />
        <div class="date  border-2 border-yellow-300 drop-shadow-2xl ">
          {item.price}
          <span class="month">$</span>
        </div>
        <i onClick={() => send(item)} class="ion-film-marker">
          <ShoppingCartIcon />
        </i>
        <figcaption>
          <h3>{item.title}</h3>

          <button
            className="border-2 border-yellow-300 drop-shadow-2xl"
            onClick={() => send(item)}
          >
            add to card
            <ShoppingCartIcon />
          </button>
        </figcaption>
      </figure>
    </div>
  );
};

export default Cardd;
