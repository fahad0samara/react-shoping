import Header from "./components/Navbar/Header";
import CardsDetails from "./components/CardsDetails";
import Success from './stripa/Success';
import {Routes, Route} from "react-router-dom";
import React from "react";
import {useContext, useEffect} from "react";
import {themeContext} from "./Context";
import Home from "./Home";
import Loding from "./Loding";


function App() {
  useEffect(() => {
    setTimeout(() => {
    ;
    }, 2000);
    
  }, []);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {
        
      }
   
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/successs" element={<Success />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
