import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import Card from "./Card";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";


const Data = () => {
  const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/perfume")
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setError(true);
      });
  }, []);

  return (
    <div>
      <div className=" text-center text-4xl m-6 font-bold">
        {" "}
        Review of the best <br />{" "}
        <span className=" translate-x-4 text-white bg-[#1abc9c] skew-y-3">
          watches
        </span>{" "}
        on the market
      </div>

      <div className=" grid lg:grid-cols-4 gap-10 md:grid-cols-3 grid-cols-1">
        {error ? (
          <div className="error">{error}</div>
        ) : (
          <div className="info">{error}</div>
        )}

        {loading ? (
          <Box display={"flex"} color="red" className="flex justify-center">
            <CircularProgress />
            <h1 className="mt-3 ml-4 text-4xl">Loading...</h1>
          </Box>
        ) : (
          <div className="info"></div>
        )}
        {data.map((item, i) => (
          <div key={i}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
