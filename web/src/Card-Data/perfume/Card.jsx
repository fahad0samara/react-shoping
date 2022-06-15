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
            <div class="mx-10  drop-shadow-2xl">
              <div class="">
                <a class={'block relative h-48 rounded overflow-hidden'}>
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
                  <p class="mt-1">${item.price}</p>
                  <Tooltip title="Add" arrow>
                    <button
                      className="
                      bg-[#1abc9c]
                 drop-shadow-2xl"
                      onClick={() => send(item)}
                    >
                      add to card
                      <ShoppingCartIcon />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Card;
