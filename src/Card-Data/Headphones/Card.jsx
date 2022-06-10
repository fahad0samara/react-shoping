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
      <div class="container">
        <div class="card-1 card-div">
          <div class="w-full gow-img-div img-div ">
            <img src={item.img} alt="god-of-war-figurine w-full" />
          </div>
          <div class="text-container">
            <h2 class="item-name">{item.title}</h2>

            <div class="pricing-and-cart">
              <div class="pricing">
                <span> </span>

                <p
                  style={{
                    color: "blue",
                    padding: "2px 2px",
                    borderRadius: "5px",
                  }}
                >
                  {" "}
                  ★{item.rating}{" "}
                </p>
                <p class="current-price">${item.price}</p>
              </div>

              <div className="fas fa-shopping-cart cursor-pointer">
                <Tooltip title="add to cart" arrow leaveDelay={200}>
                  <ShoppingCartIcon onClick={() => send(item)} />
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardd;
