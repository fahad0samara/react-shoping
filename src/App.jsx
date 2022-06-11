import Header from "./components/Navbar/Header";
import CardsDetails from "./components/CardsDetails";

import {Routes, Route} from "react-router-dom";
import React from "react";
import {useContext} from "react";
import {themeContext} from "./Context";
import Home from "./Home";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
