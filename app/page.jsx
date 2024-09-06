// import Image from "next/image";
// import Blog from "./components/blog";
// import Carousel from "./components/carousel";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const Blog = dynamic(() => import("./components/blog"), { ssr: false });
import { client } from "@/sanity/lib/client";

async function getData(){
  const query =`
  *[_type == "blog"] | order(_createdAt desc){
  title,
  body,
  slug}
  `
  const data = await client.fetch(query)
  return data
}

export default async function Home() {
  const data = await getData()  

  return (
    <main className="min-h-screen md:px-14 xl:px-24 ">
      {/* <Carousel /> */}
      {/* <!-- component --> */}
      {/* <div className="flex items-center justify-center text-black">
        <div className="px-4 2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 w-96 sm:w-auto">
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              Editors Choice
            </h1>
            <p className="w-11/12 mt-4 text-base leading-normal text-center text-gray-600 lg:w-1/2 md:w-10/12">
              If youre looking for random paragraphs, youve come to the right
              place. When a random word or a random sentence isnt quite enough
            </p>
          </div>
          <div className="items-stretch mt-8 lg:flex md:mt-12">
            <div className="lg:w-1/2">
              <div className="items-center justify-between sm:flex xl:gap-x-8 gap-x-6">
                <div className="relative sm:w-1/2">
                  <div>
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold text-white 5">
                        The Decorated Ways
                      </h2>
                      <p className="mt-2 text-base leading-4 text-white">
                        Dive into minimalism
                      </p>
                      <Link
                        href="/"
                        className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/DYxtCJq/img-1.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="relative mt-4 sm:w-1/2 sm:mt-0">
                  <div>
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold text-white 5">
                        The Decorated Ways
                      </h2>
                      <p className="mt-2 text-base leading-4 text-white">
                        Dive into minimalism
                      </p>
                      <Link
                        href="/"
                        className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3C5HvxC/img-2.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <h2 className="text-xl font-semibold text-white 5">
                      The Decorated Ways
                    </h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Dive into minimalism
                    </p>
                    <Link
                      href="/"
                      className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/Ms4qyXp/img-3.png"
                  alt="sitting place"
                  className="hidden w-full mt-8 md:mt-6 sm:block"
                />
                <img
                  className="w-full mt-4 sm:hidden"
                  src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="flex-col justify-between mt-4 lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 lg:flex">
              <div className="relative">
                <div>
                  <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
                    12 April 2021
                  </p>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <h2 className="text-xl font-semibold text-white 5">
                      The Decorated Ways
                    </h2>
                    <p className="mt-2 text-base leading-4 text-white">
                      Dive into minimalism
                    </p>
                    <Link
                      href="/"
                      className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/6Wfjf2w/img-4.png"
                  alt="sitting place"
                  className="hidden w-full sm:block"
                />
                <img
                  className="w-full sm:hidden"
                  src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                  alt="sitting place"
                />
              </div>
              <div className="items-center justify-between mt-4 sm:flex xl:gap-x-8 gap-x-6 md:mt-6">
                <div className="relative w-full">
                  <div>
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold text-white 5">
                        The Decorated Ways
                      </h2>
                      <p className="mt-2 text-base leading-4 text-white">
                        Dive into minimalism
                      </p>
                      <Link
                        href="/"
                        className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/3yvZBpm/img-5.png"
                    className="w-full"
                    alt="chair"
                  />
                </div>
                <div className="relative w-full mt-4 sm:mt-0">
                  <div>
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                      12 April 2021
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold text-white 5">
                        The Decorated Ways
                      </h2>
                      <p className="mt-2 text-base leading-4 text-white">
                        Dive into minimalism
                      </p>
                      <Link
                        href="/"
                        className="flex items-center mt-4 text-white cursor-pointer focus:outline-none focus:underline hover:text-gray-200 hover:underline"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <img
                    src="https://i.ibb.co/gDdnJb5/img-6.png"
                    className="w-full"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <article className="py-4 d-flex w-[20%] flex-column">
  <a href="https://github.blog/2024-06-03-how-github-reduced-testing-time-for-ios-apps-with-new-runner-features/" className="mb-3 overflow-hidden d-block col-12 position-relative rounded-2 tease-thumbnail">
  <Image src="/Productivity-DarkMode-3.webp" width="800" height="425" alt="How GitHub reduced testing time for iOS apps with new runner features" className="d-block width-full height-auto rounded-2 tease-thumbnail__img cover-image" loading="lazy" decoding="async" /></a>
  <div className="col-12 tease-text">
    <h3 className="h6-mktg mb-12px">
      <a href="https://github.blog/2024-06-03-how-github-reduced-testing-time-for-ios-apps-with-new-runner-features/" className="Link--primary">How GitHub reduced testing time for iOS apps with new runner features</a>
      </h3>
      <p className="mb-0 f4-mktg color-fg-muted">Learn how GitHub used macOS and Apple Silicon runners for GitHub Actions to build, test, and deploy our iOS app faster.</p>
      <div className="mt-14px">
 		<div className="d-flex flex-items-center">
 			
 			<div className="flex-wrap d-flex flex-items-end mt-[-4px]">
 				<span className="mt-1 authors-wrap mr-12px f5-mktg text-bold"><a className="d-inline-block Link--primary color-fg-default" href="https://github.blog/author/steveglass/" title="Stephen Glass">Stephen Glass</a> &amp; <a className="d-inline-block Link--primary color-fg-default" href="https://github.blog/author/eliperkins/" title="Eli Perkins">Eli Perkins</a></span>
 				
 			</div>
 		</div></div></div></article> */}
      <Blog data={data}/>
    </main>
  );
}
