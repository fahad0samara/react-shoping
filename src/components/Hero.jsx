import React from "react";
import './Hero.css'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img from "../img/0.png"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
const Hero = () => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={2}
        infinite={true}
        isPlaying={true}
        touchEnabled={true}
        dragEnabled={true}
      >
        <Slider>
          <Slide onBlur={true} index={0}>
            <div className=" grid grid-cols-5 divbg">
              <div className=" col-span-2 space-y-14 mx-4">
                <div className=" space-y-5">
                  <p className=" text-4xl">Closca Bottle</p>
                  <h1 className=" text-8xl">Beach</h1>
                  <h3 className=" text-5xl"> $39.90</h3>
                </div>
                <div className="  m-2 space-y-6 ">
                  <h1 className=" text-2xl font-bold">
                    In 20 years, there could be more plastic in our oceans than
                    fish
                  </h1>
                  <h2 className=" text-2xl">
                    Plastic pollution injures more than 100.000 marine animals
                    every year.It takes around 450 years for one plastic bottle
                    to decompose
                  </h2>
                  <button className=" bg-blue-700"> Shop Now</button>
                </div>
              </div>
              <div data-aos="fade-right" className=" col-span-2 ">
                <img src={img} alt="" className="     " />
              </div>
              <div className=" col-span-1 mt-44 space-x-2 ">
                <ButtonBack className=" text-white text-7xl">
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <ButtonNext className=" text-white text-7xl">
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </ButtonNext>
              </div>
            </div>
          </Slide>

          <Slide index={1}>
            <div className=" grid grid-cols-5  bg-blue-700">
              <div className=" col-span-2 space-y-14 mx-4">
                <div className=" space-y-5">
                  <p className=" text-4xl">Closca Bottle</p>
                  <h1 className=" text-8xl">Beach</h1>
                  <h3 className=" text-5xl"> $39.90</h3>
                </div>
                <div className="  m-2 space-y-6 ">
                  <h1 className=" text-2xl font-bold">
                    In 20 years, there could be more plastic in our oceans than
                    fish
                  </h1>
                  <h2 className=" text-2xl">
                    Plastic pollution injures more than 100.000 marine animals
                    every year.It takes around 450 years for one plastic bottle
                    to decompose
                  </h2>
                  <button className=" bg-blue-700"> Shop Now</button>
                </div>
              </div>
              <div className=" col-span-2 ">
                <img src={img} alt="" className="     " />
              </div>
              <div className=" col-span-1 mt-44 space-x-2 ">
                <ButtonBack className=" text-white text-7xl">
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <button className=" text-white text-7xl">
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </button>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </>
  );
};

export default Hero;
