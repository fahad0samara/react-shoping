import React, { useContext } from "react";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { themeContext } from "../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className=" cursor-pointer" onClick={handleClick}>
      {darkMode ? (
        <ModeNightIcon size={24} color="#000000" />
      ) : (
        <WbSunnyIcon size={24} />
      )}
    </div>
  );
};

export default Toggle;