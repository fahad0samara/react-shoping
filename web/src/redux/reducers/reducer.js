import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INIT_STATE = {
    carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {

    switch (action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex(
                iteam => iteam.id === action.payload.id,

            );


            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1;
                toast.error("The product is already on your card", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                const temp = {...action.payload, qnty: 1 }
                toast.success(` added to the cart.`, {
                    position: "top-center",
                    autoClose: 5,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return {
                    ...state,
                    carts: [...state.carts, temp



                    ],




                }


            }


        case "RMV_CART":
            const data = state.carts.filter(el => el.id !== action.payload);
            // console.log(data);

            return {
                ...state,
                carts: data,
            };

        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex(
                iteam => iteam.id === action.payload.id
            );

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
                const data = state.carts.filter(el => el.id !== action.payload);

                return {
                    ...state,
                    carts: data,
                };
            }

        default:
            return state;
    }
};