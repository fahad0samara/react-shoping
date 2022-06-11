import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";

import Card from "./Card";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";



import {Navigation, Autoplay} from "swiper";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/Headphones")
      .then(function (response) {
       
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
      <div>
        <div className=" text-center text-4xl m-6 font-bold">
          {" "}
          Review of the best <br /> <span className=" translate-x-4 text-white bg-[#1abc9c] skew-y-3">
            watches
          </span>{" "}
          on the market
        </div>

        <div>
          <Swiper
            breakpoints={{
              600: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
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
            spaceBetween={30}
            centeredSlides={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className={'mySwiper'}
          >
            {data.map((item, i) => (
              <div  key={i} >
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
