import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import {Navigation, Autoplay} from "swiper";
const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/body_products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className=" text-center text-md-center texts">
        {" "}
        Reviews of some fitness products
      </div>
      <div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className={"mySwiper"}
        >
          {data.map((item, i) => (
            <div className="">
              <SwiperSlide>
                <Card item={item} />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Data;
