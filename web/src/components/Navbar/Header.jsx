import React, {useEffect, useState} from "react";

import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Toggle from '../../Toggle/Toggle';
import {DLT} from "../../redux/actions/action";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
const Header = () => {

  const [price, setPrice] = useState(0);

  const getdata = useSelector(state => state.cartreducer.carts);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = id => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map(ele => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <div>
        <header class=" bg-black">
          <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center  mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">SHOW</span>
            </a>
            <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex text-white font-black flex-wrap items-center text-base justify-center">
              <a class="mr-5 hover:text-gray-900">First Link</a>
              <a class="mr-5 hover:text-gray-900">Second Link</a>
              <a class="mr-5 hover:text-gray-900">Third Link</a>
              <a class="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
            <div className=" flex space-x-5 justify-center items-center pl-2">
              <div
                className={
                  "relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 "
                }
              >
                <NotificationsActiveOutlinedIcon
                  style={{fontSize: 25, cursor: "pointer", color: "white"}}
                />
                <div className="animate-ping w-2.5 h-2  bg-amber-300 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                <div
                  className={
                    " w-1.5 h-1.5 bg-amber-300 rounded-full absolute -top-1 -right-1 m-auto shadow-lg"
                  }
                />
              </div>

              <Toggle />
              <div>
                <Badge
                  
                  badgeContent={getdata.length}
                  color="success"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <ShoppingCartIcon
                    style={{fontSize: 25, cursor: "pointer", color: "white"}}
                  />
                </Badge>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getdata.length ? (
            <div className="card_details" style={{width: "24rem", padding: 10}}>
              <div>
                <thead className=" bg-[#1abc9c]  text-white text-2xl">
                  <tr className="card_details space-y-2">
                    <th>Photo</th>
                   
                    <th>products Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.img}
                                style={{width: "5rem", height: "5rem"}}
                                alt=""
                                
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p className=" text-xl ml-4">{e.title}</p>
                            <p className=" text-xl ml-4">Price : ${e.price}</p>
                          </td>

                          <td
                            className="mt-5"
                            style={{
                              color: "red",
                              fontSize: 20,
                              cursor: "pointer",
                            }}
                            onClick={() => dlt(e.id)}
                          >
                            <DeleteForeverIcon></DeleteForeverIcon>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <h1 className="  mt-5">Total:$ {price}</h1>
                </tbody>
              </div>
            </div>
          ) : (
            <div
              className="card_details d-flex justify-content-center align-items-center"
              style={{width: "24rem", padding: 10, position: "relative"}}
            >
              <CloseIcon
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></CloseIcon>
              <p style={{fontSize: 22}}>Your carts is empty</p>
            </div>
          )}
        </Menu>
      </div>
    </>
  );
};

export default Header;
