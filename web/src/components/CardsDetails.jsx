import React, {useEffect, useState} from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";
import StripeContainer from "../stripa/StripeContainer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const CardsDetails = () => {
   
  const [showItem, setShowItem] = useState(false);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);
    const getdata = useSelector(state => state.cartreducer.carts);
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
  const [data, setData] = useState([]);
  // console.log(data);
  const [show, setShow] = useState(false);
  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter(e => {
      return e.id == id;
    });
    setData(comparedata);
  };

  // add data

  const send = e => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const dlt = id => {
    dispatch(DLT(id));
   
  };

  // remove one
  const remove = item => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <>
        <div>
          <div
            className="w-full h-full bg-[#1abc9c] text-white  top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
            id="chec-div"
          >
            <div
              className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
              id="checkout"
            >
              <div className="flex md:flex-row flex-col justify-end" id="cart">
                <div
                  className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8  overflow-y-auto overflow-x-hidden h-screen"
                  id="scroll"
                >
                  <div className="flex items-center hover:text-black cursor-pointer">
                    <button onClick={() => history("/")}>
                      <ArrowBackIcon /> Back
                    </button>
                  </div>
                  <p className="text-5xl font-black leading-10  pt-3">
                    your cart
                  </p>

                  <div className="grid grid-cols-1 items-center mt-14 py-8 border-t border-black">
                  
                  
                       {getdata.map((element, id) => {
                      return (
                        <div className="" key={id}>
                          <div
                            className={
                              "md:flex items-center py-8 border-t-4 border-t border-black"
                            }
                          >
                            <div className="w-1/4">
                              <img
                                src={element.img}
                                alt="img"
                                className="w-full h-full object-center object-cover"
                              />
                            </div>
                            <div className={"md:pl-3 md:w-3/4 w-full"}>
                              <p className="text-xs leading-3  md:pt-0 pt-4">
                                RF293
                              </p>
                              <div className="flex items-center justify-between w-full pt-1">
                                <p className="text-base font-black leading-none">
                                  {element.title}
                                </p>
                                <select
                                  className="py-2 px-1 border
                                bg-black
                                border-green-200 mr-6 focus:outline-none"
                                >
                                  <option>01</option>
                                  <option>02</option>
                                  <option>03</option>
                                </select>
                              </div>

                              <p className="text-xs leading-3  py-4">
                                <p>
                                  <strong>Rating:</strong>{" "}
                                  <span
                                    style={{
                                      background: "black",
                                      color: "#fff",
                                      padding: "4px 5px",
                                      borderRadius: "5px",
                                    }}
                                  >
                                    {element.rating} ★{" "}
                                  </span>
                                </p>
                              </p>
                              <p className="w-96 text-xs leading-3 "></p>
                              <div className="flex items-center justify-between pt-5 pr-6">
                                <div className="flex items-center">
                                  <p className="text-xs leading-3 underline  cursor-pointer">
                                    Add to favorites
                                  </p>
                                  <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                                    <p>
                                      <span>
                                        <DeleteForeverIcon
                                          className="fas fa-trash"
                                          onClick={() => dlt(element.id)}
                                          style={{
                                            color: "red",
                                            fontSize: 40,
                                            cursor: "pointer",
                                          }}
                                        ></DeleteForeverIcon>{" "}
                                      </span>
                                    </p>
                                  </p>
                                </div>
                                <p className="text-base font-black leading-none ">
                                  <strong>Price</strong> : ${element.price}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    
                  </div>
                </div>
                <div className="md:w-1/2 text-[#1abc9c] bg-black h-1/2">
                  <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                    <p className="text-4xl font-black leading-9 ">Summary</p>

                    {showItem ? (
                      <StripeContainer />
                    ) : (
                      <>
                        {getdata.map((element, id) => {
                          return (
                            <div
                              key={id}
                              className=""
                            >
                              <p className=" font font-black leading-none "></p>

                              <div className="flex items-center justify-between ">
                                <p className="text-base leading-none ">
                                  Subtotal
                                </p>
                                <p className="text-base leading-none ">
                                  ${element.price}
                                </p>
                              </div>
                            </div>
                          );
                        })}

                        <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                          <p className="text-2xl leading-normal">Total</p>
                          <p className="text-2xl font-bold leading-normal text-right ">
                            <p className="text-center">$ {price}</p>
                          </p>
                        </div>

                        <button
                          className="text-2xl leading-none   py-3
                        bg-white
    border-[#1abc9c]
    border focus:outline-none   border-x-8 text-black"
                          onClick={() => setShowItem(true)}
                        >
                          Checkout
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {` /* width */
              #scroll::-webkit-scrollbar {
                  width: 1px;
              }

              /* Track */
              #scroll::-webkit-scrollbar-track {
                  background: #f1f1f1;
              }

              /* Handle */
              #scroll::-webkit-scrollbar-thumb {
                  background: rgb(133, 132, 132);
              }
`}
        </style>
      </>
    </>
  );
};

export default CardsDetails;
