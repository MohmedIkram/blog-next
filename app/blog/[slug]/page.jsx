import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
// import BlockContent from "@sanity/block-content-to-react";


export default async function Page({ params , blog}) {
  
  const { slug } = params;

  const blogData = [
    {
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      alt: "Image 1",
      title: "Our first office",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      read_time: "2 minutes",
      url: "#",
    },
    {
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
      alt: "Image 2",
      title: "Enterprise design tips",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      read_time: "12 minutes",
      url: "#",
    },
    {
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png",
      alt: "Image 3",
      title: "We partnered with Google",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      read_time: "8 minutes",
      url: "#",
    },
    {
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
      alt: "Image 4",
      title: "Our first project with React",
      description:
        "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      read_time: "4 minutes",
      url: "#",
    },
  ];
  if (!slug) {
    return {
      notFound: true,
    };
  }
  const query =
    `*[ _type == "blog" && slug.current == "${slug}" ]{
      title,
      body
    }`
  const data = await client.fetch(query, { slug });

  return (
    <>
      {/* <PortableText value={product.info} /> */}
      <main className="pt-8 pb-16 antialiased bg-white lg:pt-16 lg:pb-24 dark:text-black">
        <div className="flex justify-center max-w-screen-xl px-4 mx-auto ">
          <article className="w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <Image
                    height={64}
                    width={64}
                    className="w-16 h-16 mr-4 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <Link
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900"
                    >
                      Avinesh
                    </Link>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Web Developer, Graphic Designer, Entrepreneur & CEO
                      Avicore
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-center text-gray-900 lg:mb-6 lg:text-4xl xl:text-5xl dark:text-black">
                {data[0]?.title}
              </h1>
            </header>
            {/* <p className="lead">
            {data[0]?.body[0]?.children[0]?.text}
            </p> */}

            <PortableText
              value={data[0]?.body}
            // components={/* optional object of custom components to use */}
            />

          </article>
        </div>
      </main>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 w-[50%]" />

      <aside aria-label="Related articles" className="py-8 lg:py-24">
        <div className="max-w-screen-xl px-4 mx-auto">
          <h2 className="mb-8 text-2xl font-bold text-center xl:text-5xl dark:text-black">
            You May Also Like
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {blogData.map((data, index) => {
              return (
                <article key={index} className="max-w-xs">
                  <Link href="#">
                    <Image
                      height={180}
                      width={276}
                      src={data.image}
                      className="mb-5 rounded-lg"
                      alt="Image 1"
                    />
                  </Link>
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-black">
                    <Link href="#">{data.title}</Link>
                  </h2>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    {data.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    {data?.read_time}
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </aside>

      <section className="pb-[5%]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 bg-white dark:bg-gray-900 rounded-[60px]">
          <div className="max-w-screen-md mx-auto sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Sign up for our newsletter
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    className="block w-full p-3 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg pl-9 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-5 py-3 text-sm font-medium text-center text-white border rounded-lg cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="max-w-screen-sm mx-auto text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                We care about the protection of your data.
                <Link
                  href="#"
                  className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >
                  Read our Privacy Policy
                </Link>
                .
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
