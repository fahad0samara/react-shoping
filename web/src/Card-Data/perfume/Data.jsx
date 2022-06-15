import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import Card from "./Card";


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
          <div className="loading">Loading...</div>
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
