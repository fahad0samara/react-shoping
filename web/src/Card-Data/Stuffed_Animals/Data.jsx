import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Card from "./Cards";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";


// import required modules
import {Navigation, Autoplay} from "swiper";

const Data = () => {
  const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://my-app-shopping.herokuapp.com/Stuffed_Animals")
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
      <div className=" text-center text-md-center texts">
        {" "}
        Reviews of some fitness products
      </div>

      <div className=" ">
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
          className="mySwiper"
        >
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
