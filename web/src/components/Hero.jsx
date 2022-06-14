import React from "react";
import "./Hero.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import img from "../img/2.avif";
import img2 from "../img/3.avif";
import img3 from "../img/4.avif";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import img1 from "../img/0.avif";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={4}
        infinite={true}
        isPlaying={true}
        touchEnabled={true}
        dragEnabled={true}
      >
        <Slider>
          <Slide index={0}>
            <div
              className=" home md:w-full absolute    h-[80%]  "
              style={{backgroundImage: `url(${img1})`}}
            >
              <div className=" text-center bg-black  mx-20  md:mt-44  md:opacity-75 xl:mx-96 drop-shadow-2xl mt-3 shadow-2xl border-4 border-amber-500 md:text-5xl rounded-3xl text-xl   md:bg-black  md:text-[#1abc9c]   md:space-y-8">
                <h1 className=" font-black text-center  "> Best offers for</h1>{" "}
                <p className=" md:font-bold">
                  <span className=" text-amber-400">hours </span>
                  products{" "}
                </p>
                <div>
                  <Link to="/Menu">
                    <button className=" mb-7"> SHOP NOW </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="  ">
                <ButtonBack
                  className={
                    " hover:text-white text-4xl  rounded-t-xl text-[#1abc9c] md:text-7xl"
                  }
                >
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <ButtonNext
                  className={
                    " text-[#1abc9c] text-4xl hover:text-white  md:text-7xl"
                  }
                >
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </ButtonNext>
              </div>
            </div>
          </Slide>
          <Slide index={3}>
            <div
              className=" home md:w-full absolute    h-[80%]  "
              style={{backgroundImage: `url(${img})`}}
            >
              <div className=" text-center bg-black  mx-20  md:mt-44  md:opacity-75 xl:mx-96 drop-shadow-2xl mt-3 shadow-2xl border-4 border-amber-500 md:text-5xl rounded-3xl text-xl   md:bg-black  md:text-[#1abc9c]   md:space-y-8">
                <h1 className=" font-black text-center  "> Best offers for</h1>{" "}
                <p className=" md:font-bold">
                  <span className=" text-amber-400">hours </span>
                  products{" "}
                </p>
                <div>
                  <Link to="/Menu">
                    <button className=" mb-7"> SHOP NOW </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="  ">
                <ButtonBack
                  className={
                    " hover:text-white text-4xl  rounded-t-xl text-[#1abc9c] md:text-7xl"
                  }
                >
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <ButtonNext
                  className={
                    " text-[#1abc9c] text-4xl hover:text-white  md:text-7xl"
                  }
                >
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </ButtonNext>
              </div>
            </div>
          </Slide>
          <Slide index={2}>
            <div
              className=" home md:w-full absolute    h-[80%]  "
              style={{backgroundImage: `url(${img2})`}}
            >
              <div className=" text-center bg-black  mx-20  md:mt-44  md:opacity-75 xl:mx-96 drop-shadow-2xl mt-3 shadow-2xl border-4 border-amber-500 md:text-5xl rounded-3xl text-xl   md:bg-black  md:text-[#1abc9c]   md:space-y-8">
                <h1 className=" font-black text-center  "> Best offers for</h1>{" "}
                <p className=" md:font-bold">
                  <span className=" text-amber-400">hours </span>
                  products{" "}
                </p>
                <div>
                  <Link to="/Menu">
                    <button className=" mb-7"> SHOP NOW </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="  ">
                <ButtonBack
                  className={
                    " hover:text-white text-4xl  rounded-t-xl text-[#1abc9c] md:text-7xl"
                  }
                >
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <ButtonNext
                  className={
                    " text-[#1abc9c] text-4xl hover:text-white  md:text-7xl"
                  }
                >
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </ButtonNext>
              </div>
            </div>
          </Slide>
          <Slide index={1}>
            <div
              className=" home md:w-full absolute    h-[80%]  "
              style={{backgroundImage: `url(${img3})`}}
            >
              <div className=" text-center bg-black  mx-20  md:mt-44  md:opacity-75 xl:mx-96 drop-shadow-2xl mt-3 shadow-2xl border-4 border-amber-500 md:text-5xl rounded-3xl text-xl   md:bg-black  md:text-[#1abc9c]   md:space-y-8">
                <h1 className=" font-black text-center  "> Best offers for</h1>{" "}
                <p className=" md:font-bold">
                  <span className=" text-amber-400">hours </span>
                  products{" "}
                </p>
                <div>
                  <Link to="/Menu">
                    <button className=" mb-7"> SHOP NOW </button>{" "}
                  </Link>
                </div>
              </div>
              <div className="  ">
                <ButtonBack
                  className={
                    " hover:text-white text-4xl  rounded-t-xl text-[#1abc9c] md:text-7xl"
                  }
                >
                  <ArrowCircleLeftOutlinedIcon fontSize="inherit" />
                </ButtonBack>
                <ButtonNext
                  className={
                    " text-[#1abc9c] text-4xl hover:text-white  md:text-7xl"
                  }
                >
                  <ArrowCircleRightOutlinedIcon fontSize="inherit" />
                </ButtonNext>
              </div>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </>
  );
};

export default Hero;
