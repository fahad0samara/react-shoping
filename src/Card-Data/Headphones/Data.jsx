import React from "react";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";
import Card from "./Card";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {Navigation, Autoplay} from "swiper";

const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/Headphones")
      .then(function (response) {
        console.log(response.data);
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          
          navigation={true}
          modules={[ Autoplay,Navigation]}
          className="mySwiper"
        >
          {data.map((item, i) => (
            <div className=" gridd">
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
