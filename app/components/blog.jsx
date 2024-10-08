"use client";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import Lottie from "react-lottie";
import Skeleton from "./blogSkeleton";
import Link from "next/link";
// import animationData from './loadAnimation.json';

function Blog({ data }) {
  const [displayedData, setDisplayedData] = useState(data.slice(0, 6));
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    const newLength = displayedData.length + 3;
    const newData = data.slice(0, newLength);
    setDisplayedData(newData);

    if (newData.length >= data.length) {
      setHasMore(false);
    }
  };

  return (
    <>
      <section className="w-full max-w-screen-xl pb-20 mx-auto">
        <h1 className="mb-12 font-sans text-5xl font-bold text-center">
          Our Blog
        </h1>
        <div className="grid w-full grid-cols-1 gap-5 p-5 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {data.map((item, key) => {
            return (
              <Suspense key={key} fallback={<Skeleton />}>
                <Link href={"blog/" + item?.slug?.current ?? "#"}>
                  <article
                    key={key}
                    className={`h-full overflow-hidden border-2 border-gray-200 rounded-lg shadow-lg group border-opacity-60`}
                  >
                    <Image
                      height={347}
                      width={192}
                      className="object-cover object-center w-full h-16 transition duration-500 ease-in-out transform group-hover:scale-105 md:h-36 lg:h-48"
                      src={
                        data?.image_url ??
                        "https://images.unsplash.com/photo-1660569883128-765b7c16f731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      }
                      alt="blog"
                    />
                    <h2 className="inline-block px-6 pt-4 pb-1 text-xs font-semibold tracking-widest text-orange-600 uppercase cursor-pointer title-font hover:font-bold">
                      {item?.title}
                    </h2>
                    <div className="px-6 py-1">
                      <h1 className="inline-block mb-3 text-xl font-extrabold tracking-wide text-gray-800 cursor-pointer title-font capitali">
                        {item.title}
                      </h1>
                      <p className="mb-3 overflow-hidden leading-relaxed text-gray-500 cursor-pointer line-clamp-6">
                        {item.description}
                      </p>
                    </div>
                    {/* <div className="flex flex-wrap items-center justify-between px-6 pt-1 pb-4">
                    <div className="flex flex-wrap text-sm text-gray-500">
                      <span className="mr-1">{item?.date}</span>
                      <span className="">{item?.read_time}</span>
                    </div>
                    <div className="mt-1">
                      <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                        {item?.views}
                      </span>
                    </div>
                  </div> */}
                  </article>
                </Link>
              </Suspense>
            );
          })}
        </div>
        <div className="flex justify-center w-full">
          {hasMore && (
            <button
              onClick={loadMore}
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Button Text
              </span>
            </button>
          )}
        </div>
        {/* <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      /> */}
      </section>
    </>
  );
}

export default Blog;
