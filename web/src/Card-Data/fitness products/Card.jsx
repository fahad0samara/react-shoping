import React from 'react';
import {Tooltip} from "@mui/material";
import {useDispatch} from "react-redux";
import {ADD} from "../../redux/actions/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Card = ({item}) => {
  const dispatch = useDispatch();

  const send = e => {
    console.log(e);
    dispatch(ADD(e));
  };
  return (
    <div className="mx-20  md:mx-0">
      <figure className="snip1208  border-2  border-yellow-300 drop-shadow-2xl shadow-2xl">
        <img
          src={item.img}
          alt="sample66"
          className="    h-60 w-full object-cover wsk-cp-product "
        />
        <div className="date  border-2 border-yellow-300 drop-shadow-2xl ">
          ${item.price}
        </div>
        <i onClick={() => send(item)} className="ion-film-marker">
          <ShoppingCartIcon />
        </i>
        <figcaption>
          <h3>{item.title}</h3>
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
          <Tooltip title="Add" arrow>
            <button
              className="border-2 border-yellow-300 drop-shadow-2xl"
              onClick={() => send(item)}
            >
              add to card
              <ShoppingCartIcon />
            </button>
          </Tooltip>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;
