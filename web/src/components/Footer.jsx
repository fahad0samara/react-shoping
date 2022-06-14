import img from "../img/1.png";
import img0 from "../img/2.avif";

const Footer = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl leading-6 text-center px-4">Testimonials</h2>
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold px-4 leading-10  mt-6 text-center">
          What our client says
        </h1>
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20 px-10 py-20 gap-6">
          <div>
            <div className="group text-black w-full bg-white relative flex flex-col items-center hover:bg-[#e8a6c6] cursor-pointer shadow-md md:p-12 p-6">
              <div className=" group-hover:text-white flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="xl:w-80 text-base leading-normal text-center mt-4"
                >
                  When our designs need an expert opinion or approval, I know I
                  can rely on your agency Thank you for all your help-I will be
                  recommending you to everyone
                </p>
              </div>
              <div className=" group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                src="https://i.ibb.co/ZgF5Zzz/avatar-1.png"
                alt="profile pictre"
                className="w-12 h-12"
              />
              <p className="text-base font-semibold leading-4 my-2 ">Tom</p>
              <p className="text-base leading-4 text-center ">Koch</p>
            </div>
          </div>
          <div>
            <div className="group text-black w-full bg-[#1abc9c]  relative flex flex-col items-center hover:text-black hover:bg-white cursor-pointer shadow-md md:p-12 p-6">
              <div className=" group-hover:text-black flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="xl:w-80 text-base leading-normal text-center mt-4"
                >
                  When our designs need an expert opinion or approval, I know I
                  can rely on your agency Thank you for all your help-I will be
                  recommending you to everyone
                </p>
              </div>
              <div className=" group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="flex flex-col items-center justify-center mt-10"
            >
              <img
                src={img0}
                alt="profile pictre"
                className="w-12 h-12 object-cover rounded-full"
              />
              <p className="text-base font-semibold leading-4 my-2 ">Fahad</p>
              <p className="text-base leading-4 text-center ">samara</p>
            </div>
          </div>
          <div>
            <div className="group w-full text-black bg-white relative flex flex-col items-center hover:bg-[#e8a6c6] cursor-pointer shadow-md md:p-12 p-6">
              <div className="group-hover:text-white flex flex-col items-center">
                <svg
                  width={26}
                  height={27}
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="24.5767"
                        height={27}
                        fill="white"
                        transform="translate(25.2578 27) rotate(-180)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  className="xl:w-80 text-base leading-normal text-center mt-4"
                >
                  When our designs need an expert opinion or approval, I know I
                  can rely on your agency Thank you for all your help-I will be
                  recommending you to everyone
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="group-hover:text-indigo-700 absolute bottom-0 -mb-6"
              >
                <svg
                  width={34}
                  height={28}
                  viewBox="0 0 34 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd)">
                    <path
                      d="M17 19L28.2583 3.25H5.74167L17 19Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd"
                      x="0.741699"
                      y="0.25"
                      width="32.5167"
                      height="27.75"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feMorphology
                        radius={1}
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow"
                      />
                      <feOffset dy={4} />
                      <feGaussianBlur stdDeviation={3} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      />
                      <feOffset dy={2} />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow"
                        result="effect2_dropShadow"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png"
                alt="profile pictre"
                className="w-12 h-12"
              />
              <p className="text-base font-semibold leading-4 my-2 ">Kera </p>
              <p className="text-base leading-4 text-center ">Joo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:flex xl:justify-end pt-16">
        <div className="container sm:mx-auto">
          <div className="block xl:flex justify-between xl:items-center lg:items-center md:flex">
            <div className="w-11/12 xl:w-4/12 mx-auto xl:mx-0 md:w-5/12">
              <h1 className=" text-3xl font-extrabold mb-3 pt-12 xl:pt-0">
                Sign Up for Product Updates
              </h1>
              <p
                data-aos="fade-zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="text-lg  mb-6"
              >
                Sign Up for our weekly newsletter to get the latest news updates
                and amazing offers delivered directly in your inbox.
              </p>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="flex w-full flex-wrap"
              >
                <div className="w-full">
                  <div className="flex flex-col mb-3">
                    <label
                      className="text-base font-bold  mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="johnstark97@gmail.com"
                      className="focus:outline-none focus:border-indigo-700 border-gray-300 border rounded-sm py-2 outline-none pl-2 pr-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className={
                      "focus:outline-none hover:bg-indigo-600 text-white text-base w-full py-3 px-6 rounded bg-[#1abc9c]   "
                    }
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="w-11/12  xl:w-5/12 mx-auto xl:mx-0 mt-8 xl:mt-0 flex justify-end md:w-5/12 gradienttt relative py-20"
            >
              <div className="h-4/5 w-4/5">
                <img
                  src={img}
                  className="h-full w-full overflow-hidden object-cover relative z-10  -ml-32 rounded"
                />
              </div>
              <div className="absolute bottom-0 right-0 pb-2 pr-2 z-0">
                <svg
                  width={243}
                  height={163}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#fff" fillRule="evenodd">
                    <rect width={5} height={5} rx="2.5" />
                    <rect x={30} width={5} height={5} rx="2.5" />
                    <rect x={59} width={5} height={5} rx="2.5" />
                    <rect x={89} width={5} height={5} rx="2.5" />
                    <rect x={119} width={5} height={5} rx="2.5" />
                    <rect x={148} width={5} height={5} rx="2.5" />
                    <rect x={178} width={5} height={5} rx="2.5" />
                    <rect x={208} width={5} height={5} rx="2.5" />
                    <rect x={238} width={5} height={5} rx="2.5" />
                    <rect y={20} width={5} height={5} rx="2.5" />
                    <rect x={30} y={20} width={5} height={5} rx="2.5" />
                    <rect x={59} y={20} width={5} height={5} rx="2.5" />
                    <rect x={89} y={20} width={5} height={5} rx="2.5" />
                    <rect x={119} y={20} width={5} height={5} rx="2.5" />
                    <rect x={148} y={20} width={5} height={5} rx="2.5" />
                    <rect x={178} y={20} width={5} height={5} rx="2.5" />
                    <rect x={208} y={20} width={5} height={5} rx="2.5" />
                    <rect x={238} y={20} width={5} height={5} rx="2.5" />
                    <rect y={39} width={5} height={5} rx="2.5" />
                    <rect x={30} y={39} width={5} height={5} rx="2.5" />
                    <rect x={59} y={39} width={5} height={5} rx="2.5" />
                    <rect x={89} y={39} width={5} height={5} rx="2.5" />
                    <rect x={119} y={39} width={5} height={5} rx="2.5" />
                    <rect x={148} y={39} width={5} height={5} rx="2.5" />
                    <rect x={178} y={39} width={5} height={5} rx="2.5" />
                    <rect x={208} y={39} width={5} height={5} rx="2.5" />
                    <rect x={238} y={39} width={5} height={5} rx="2.5" />
                    <rect y={60} width={5} height={5} rx="2.5" />
                    <rect x={30} y={60} width={5} height={5} rx="2.5" />
                    <rect x={59} y={60} width={5} height={5} rx="2.5" />
                    <rect x={89} y={60} width={5} height={5} rx="2.5" />
                    <rect x={119} y={60} width={5} height={5} rx="2.5" />
                    <rect x={148} y={60} width={5} height={5} rx="2.5" />
                    <rect x={178} y={60} width={5} height={5} rx="2.5" />
                    <rect x={208} y={60} width={5} height={5} rx="2.5" />
                    <rect x={238} y={60} width={5} height={5} rx="2.5" />
                    <rect y={79} width={5} height={5} rx="2.5" />
                    <rect x={30} y={79} width={5} height={5} rx="2.5" />
                    <rect x={59} y={79} width={5} height={5} rx="2.5" />
                    <rect x={89} y={79} width={5} height={5} rx="2.5" />
                    <rect x={119} y={79} width={5} height={5} rx="2.5" />
                    <rect x={148} y={79} width={5} height={5} rx="2.5" />
                    <rect x={178} y={79} width={5} height={5} rx="2.5" />
                    <rect x={208} y={79} width={5} height={5} rx="2.5" />
                    <rect x={238} y={79} width={5} height={5} rx="2.5" />
                    <rect y={99} width={5} height={5} rx="2.5" />
                    <rect x={30} y={99} width={5} height={5} rx="2.5" />
                    <rect x={59} y={99} width={5} height={5} rx="2.5" />
                    <rect x={89} y={99} width={5} height={5} rx="2.5" />
                    <rect x={119} y={99} width={5} height={5} rx="2.5" />
                    <rect x={148} y={99} width={5} height={5} rx="2.5" />
                    <rect x={178} y={99} width={5} height={5} rx="2.5" />
                    <rect x={208} y={99} width={5} height={5} rx="2.5" />
                    <rect x={238} y={99} width={5} height={5} rx="2.5" />
                    <rect y={119} width={5} height={5} rx="2.5" />
                    <rect x={30} y={119} width={5} height={5} rx="2.5" />
                    <rect x={59} y={119} width={5} height={5} rx="2.5" />
                    <rect x={89} y={119} width={5} height={5} rx="2.5" />
                    <rect x={119} y={119} width={5} height={5} rx="2.5" />
                    <rect x={148} y={119} width={5} height={5} rx="2.5" />
                    <rect x={178} y={119} width={5} height={5} rx="2.5" />
                    <rect x={208} y={119} width={5} height={5} rx="2.5" />
                    <rect x={238} y={119} width={5} height={5} rx="2.5" />
                    <rect y={139} width={5} height={5} rx="2.5" />
                    <rect x={30} y={139} width={5} height={5} rx="2.5" />
                    <rect x={59} y={139} width={5} height={5} rx="2.5" />
                    <rect x={89} y={139} width={5} height={5} rx="2.5" />
                    <rect x={119} y={139} width={5} height={5} rx="2.5" />
                    <rect x={148} y={139} width={5} height={5} rx="2.5" />
                    <rect x={178} y={139} width={5} height={5} rx="2.5" />
                    <rect x={208} y={139} width={5} height={5} rx="2.5" />
                    <rect x={238} y={139} width={5} height={5} rx="2.5" />
                    <rect y={158} width={5} height={5} rx="2.5" />
                    <rect x={30} y={158} width={5} height={5} rx="2.5" />
                    <rect x={59} y={158} width={5} height={5} rx="2.5" />
                    <rect x={89} y={158} width={5} height={5} rx="2.5" />
                    <rect x={119} y={158} width={5} height={5} rx="2.5" />
                    <rect x={148} y={158} width={5} height={5} rx="2.5" />
                    <rect x={178} y={158} width={5} height={5} rx="2.5" />
                    <rect x={208} y={158} width={5} height={5} rx="2.5" />
                    <rect x={238} y={158} width={5} height={5} rx="2.5" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 bg-[#1abc9c]  text-black">
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-2 text-xl font-bold tracking-wide text-blue-400 uppercase">
                  i
                </span>
              </a>
              <div data-aos="fade-down" className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  Provide deluxe hydration for those with dry or age-related
                  skin concerns.
                </p>
                <p className="mt-4 text-sm text-deep-purple-50">
                  They add intense moisture to dehydrated or mature skin,
                  alleviating uneven, sun-damaged textures to promote natural
                  radiance
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4"
            >
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Category
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Games
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      References
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Cherry
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Web
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      eCommerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Business
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Apples
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Brochure
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Nonprofit
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Educational
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div data-aos="fade-up">
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Business
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Infopreneur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Personal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Forum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm ">
              © Copyright 2020 FAHAD. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
