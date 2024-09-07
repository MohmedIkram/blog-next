import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  return (
    <>
      <header class="py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav class="relative z-50 flex justify-between">
            <div class="flex items-center md:gap-x-12">
              <Link aria-label="Home" href="#">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 109 40"
                  class="h-10 w-auto"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    d="M55.528 26.57V15.842H52V13.97h9.108v1.872h-3.636V26.57h-1.944Z"
                    fill="#0F172A"
                  ></path>
                  <path
                    d="M83.084 26.57v-12.6h5.346c.744 0 1.416.18 2.016.54a3.773 3.773 0 0 1 1.44 1.44c.36.612.54 1.302.54 2.07 0 .78-.18 1.482-.54 2.106a4 4 0 0 1-1.44 1.494c-.6.36-1.272.54-2.016.54h-2.646v4.41h-2.7Zm2.664-6.84h2.376c.288 0 .546-.072.774-.216.228-.156.408-.36.54-.612a1.71 1.71 0 0 0 .216-.864c0-.324-.072-.606-.216-.846a1.394 1.394 0 0 0-.54-.576 1.419 1.419 0 0 0-.774-.216h-2.376v3.33ZM106.227 26.57V13.25h2.556v13.32h-2.556Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M95.906 26.102c.636.432 1.35.648 2.142.648.444 0 .864-.066 1.26-.198a4.25 4.25 0 0 0 1.062-.558 3.78 3.78 0 0 0 .702-.668v1.244h2.574v-9.522h-2.538v1.248a3.562 3.562 0 0 0-.648-.672 3.13 3.13 0 0 0-1.026-.558 3.615 3.615 0 0 0-1.278-.216c-.828 0-1.566.216-2.214.648-.648.42-1.164 1.002-1.548 1.746-.372.732-.558 1.578-.558 2.538 0 .96.186 1.812.558 2.556.372.744.876 1.332 1.512 1.764Zm4.104-1.908c-.36.228-.78.342-1.26.342-.468 0-.882-.114-1.242-.342a2.387 2.387 0 0 1-.828-.954c-.204-.42-.306-.906-.306-1.458 0-.54.102-1.014.306-1.422.204-.408.48-.726.828-.954.36-.24.774-.36 1.242-.36.48 0 .9.12 1.26.36.36.228.636.546.828.954.204.408.306.882.306 1.422 0 .552-.102 1.038-.306 1.458a2.218 2.218 0 0 1-.828.954Z"
                    fill="#2563EB"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m76.322 23.197 2.595 3.373h2.268l-3.662-4.787 3.338-4.663h-2.196l-2.162 3.334-2.554-3.334h-2.34l3.652 4.71-3.634 4.74h2.196l2.5-3.373ZM62.738 26.102a3.78 3.78 0 0 0 2.142.648c.456 0 .888-.072 1.296-.216.42-.144.798-.336 1.134-.576a3.418 3.418 0 0 0 .864-.835v1.447h1.872v-9.45h-1.872v1.45a3.118 3.118 0 0 0-.72-.82 3.2 3.2 0 0 0-1.062-.612 4.033 4.033 0 0 0-1.35-.216c-.828 0-1.578.21-2.25.63-.66.42-1.188 1.002-1.584 1.746-.384.732-.576 1.572-.576 2.52 0 .936.192 1.776.576 2.52.384.744.894 1.332 1.53 1.764Zm4.122-1.476c-.432.276-.93.414-1.494.414a2.682 2.682 0 0 1-1.476-.414 2.987 2.987 0 0 1-1.008-1.134c-.24-.492-.36-1.05-.36-1.674 0-.612.12-1.158.36-1.638.252-.48.588-.858 1.008-1.134a2.682 2.682 0 0 1 1.476-.414c.564 0 1.062.138 1.494.414.432.276.768.654 1.008 1.134.252.48.378 1.026.378 1.638 0 .624-.126 1.182-.378 1.674-.24.48-.576.858-1.008 1.134Z"
                    fill="#0F172A"
                  ></path>
                </svg>
              </Link>
              <div class="hidden md:flex md:gap-x-6">
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#features"
                >
                  Features
                </Link>
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#pricing"
                >
                  Pricing
                </Link>
              </div>
            </div>
            <div class="flex items-center gap-x-5 md:gap-x-8">
              <div class="hidden md:block">
                <Link
                  class="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/login"
                >
                  Sign in
                </Link>
              </div>
              <Link
                class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
                color="blue"
                variant="solid"
                href="/register"
              >
                <span>
                  Get started <span class="hidden lg:inline">today</span>
                </span>
              </Link>
              <div class="-mr-1 md:hidden">
                <div data-headlessui-state="">
                  <button
                    class="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                    aria-label="Toggle Navigation"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:R5v6fja:"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <path
                        d="M0 1H14M0 7H14M0 13H14"
                        class="origin-center transition"
                      ></path>
                      <path
                        d="M2 2L12 12M12 2L2 12"
                        class="origin-center transition scale-90 opacity-0"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <div
                hidden=""
                style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"
              ></div> */}
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section
        id="pricing"
        aria-label="Pricing"
        class="bg-slate-900 py-20 sm:py-32"
      >
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="md:text-center">
            <h2 class="font-display text-3xl tracking-tight text-white sm:text-4xl">
              <span class="relative whitespace-nowrap">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 281 40"
                  preserveAspectRatio="none"
                  class="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
                  ></path>
                </svg>
                <span class="relative">Simple pricing,</span>
              </span>
              for everyone.
            </h2>
            <p class="mt-4 text-lg text-slate-400">
              It doesn’t matter what size your business is, our software won’t
              work well for you.
            </p>
          </div>
          <div class="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
            <section class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
              <h3 class="mt-5 font-display text-lg text-white">Starter</h3>
              <p class="mt-2 text-base text-slate-400">
                Good for anyone who is self-employed and just getting started.
              </p>
              <p class="order-first font-display text-5xl font-light tracking-tight text-white">
                $9
              </p>
              <ul
                role="list"
                class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
              >
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Send 10 quotes and invoices</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Connect up to 2 bank accounts</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Track up to 15 expenses per month</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Manual payroll support</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Export up to 3 reports</span>
                </li>
              </ul>
              <Link
                class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                variant="outline"
                color="white"
                aria-label="Get started with the Starter plan for $9"
                href="/register"
              >
                Get started
              </Link>
            </section>
            <section class="flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-blue-600 py-8 lg:order-none">
              <h3 class="mt-5 font-display text-lg text-white">
                Small business
              </h3>
              <p class="mt-2 text-base text-white">
                Perfect for small / medium sized businesses.
              </p>
              <p class="order-first font-display text-5xl font-light tracking-tight text-white">
                $15
              </p>
              <ul
                role="list"
                class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white"
              >
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Send 25 quotes and invoices</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Connect up to 5 bank accounts</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Track up to 50 expenses per month</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Automated payroll support</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Export up to 12 reports</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Bulk reconcile transactions</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-white"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Track in multiple currencies</span>
                </li>
              </ul>
              <Link
                class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8"
                variant="solid"
                color="white"
                aria-label="Get started with the Small business plan for $15"
                href="/register"
              >
                Get started
              </Link>
            </section>
            <section class="flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8">
              <h3 class="mt-5 font-display text-lg text-white">Enterprise</h3>
              <p class="mt-2 text-base text-slate-400">
                For even the biggest enterprise companies.
              </p>
              <p class="order-first font-display text-5xl font-light tracking-tight text-white">
                $39
              </p>
              <ul
                role="list"
                class="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
              >
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Send unlimited quotes and invoices</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Connect up to 15 bank accounts</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Track up to 200 expenses per month</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">Automated payroll support</span>
                </li>
                <li class="flex">
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
                  >
                    <path
                      d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                      stroke-width="0"
                    ></path>
                    <circle
                      cx="12"
                      cy="12"
                      r="8.25"
                      fill="none"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></circle>
                  </svg>
                  <span class="ml-4">
                    Export up to 25 reports, including TPS
                  </span>
                </li>
              </ul>
              <Link
                class="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8"
                variant="outline"
                color="white"
                aria-label="Get started with the Enterprise plan for $39"
                href="/register"
              >
                Get started
              </Link>
            </section>
          </div>
        </div>
      </section>
      <section
        id="faq"
        aria-labelledby="faq-title"
        class="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
      >
        <Image
          alt=""
          loading="lazy"
          width="1558"
          height="946"
          decoding="async"
          data-nimg="1"
          class="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
          style={{ color: "transparent" }}
          src="/_next/static/media/background-faqs.55d2e36a.jpg"
        />
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="faq-title"
              class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
            >
              Frequently asked questions
            </h2>
            <p class="mt-4 text-lg tracking-tight text-slate-700">
              If you can’t find what you’re looking for, email our support team
              and if you’re lucky someone will get back to you.
            </p>
          </div>
          <ul
            role="list"
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
          >
            <li>
              <ul role="list" class="flex flex-col gap-y-8">
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    Does TaxPal handle VAT?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    Well no, but if you move your company offshore you can
                    probably ignore it.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    Can I pay for my subscription via purchase order?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    Absolutely, we are happy to take your money in all forms.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    How do I apply for a job at TaxPal?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    We only hire our customers, so subscribe for a minimum of 6
                    months and then let’s talk.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-8">
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    What was that testimonial about tax fraud all about?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    TaxPal is just a software application, ultimately your books
                    are your responsibility.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    TaxPal sounds horrible but why do I still feel compelled to
                    purchase?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    This is the power of excellent visual design. You just can’t
                    resist it, no matter how poorly it actually functions.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    I found other companies called TaxPal, are you sure you can
                    use this name?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    Honestly not sure at all. We haven’t actually incorporated
                    or anything, we just thought it sounded cool and made this
                    website.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-8">
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    How do you generate reports?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    You just tell us what data you need a report for, and we get
                    our kids to create beautiful charts for you using only the
                    finest crayons.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    Can we expect more inventory features?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    In life it’s really better to never expect anything at all.
                  </p>
                </li>
                <li>
                  <h3 class="font-display text-lg leading-7 text-slate-900">
                    I lost my password, how do I get into my account?
                  </h3>
                  <p class="mt-4 text-sm text-slate-700">
                    Send us an email and we will send you a copy of our latest
                    password spreadsheet so you can find your information.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
