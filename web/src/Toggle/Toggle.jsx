import React, { useContext } from "react";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { themeContext } from "../Context";
  import {ToastContainer, toast} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const Toggle = () => {
   const success = () =>
     toast.success("Night mode  on", {
       position: "top-center",
       autoClose: 2000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
     });
  const notify = () => 
  toast.warn("Night mode  off", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: 0,
  });
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
 
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className=" cursor-pointer" onClick={handleClick}>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {darkMode ? (
        <button className=" text-white " onClick={notify}>
          <ModeNightIcon />
        </button>
      ) : (
        <button onClick={success} className=" text-white ">
          <WbSunnyIcon />
        </button>
      )}
    </div>
  );
};

export default Toggle;