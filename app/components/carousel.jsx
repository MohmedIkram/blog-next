"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

function Carousel() {
  const data = [
    {
      title: "5 advantages of using next Js",
      sub_title:
        "Ahoy! Discover the Pod Pirates Collection, featuring a fun crew of pirate-themed characters!",
      image_url: "/Claude.webp",
    },
    {
      title: "5 advantages of using next Js",
      sub_title:
        "Ahoy! Discover the Pod Pirates Collection, featuring a fun crew of pirate-themed characters!",
      image_url: "/Claude.webp",
    },
    {
      title: "5 advantages of using next Js",
      sub_title:
        "Ahoy! Discover the Pod Pirates Collection, featuring a fun crew of pirate-themed characters!",
      image_url: "/Claude.webp",
    },
  ];
  return (
    <section className="w-full xl:w-[80%] overflow-hidden  rounded-3xl  mx-auto pt-[5%]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        {data.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="flex flex-col xl:flex-row items-center overflow-hidden bg-[#84C7F2]  justify-center border-2 border-black rounded-3xl ">
                <div className="w-full xl:w-[45%] px-[2%] py-[5%] rounded-l-3xl  font-semibold">
                  <p className="text-6xl pb-[3%]">{item?.title}</p>
                  <p className="text-xl">{item?.sub_title}</p>
                </div>
                <div className="flex items-center justify-center w-full xl:w-[65%]  transition duration-500 ease-in-out transform hover:scale-105">
                  <Image
                    className="object-cover object-center w-full"
                    src={item?.image_url}
                    height={300}
                    width={600}
                    alt="Image"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
        {/*<SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-20 w-[80%]" />
    </section>
  );
}

export default Carousel;
