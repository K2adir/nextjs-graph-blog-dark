import Link from "next/link";
import React from "react";
import { MenuIcon, MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useProvider } from "../context/context";
import { Transition } from "@headlessui/react";
import NavLink from "./NavLink";
import { useTheme } from "../context/theme";

const Navbar = () => {
  const { isOpen, setIsOpen } = useProvider();

  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <section className="dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-100 text-neutral-800 dark:selection:bg-teal-400 selection:bg-teal-700 dark:selection:text-neutral-800 selection:text-neutral-200">
      <header className="lg:py-8 sm:py-6 py-4">
        <nav className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
          <div className="sm:flex sm:flex-row flex flex-col justify-between items-center">
            <div className="flex items-center justify-between w-full">
              <Link href="/">
                <svg
                  className="h-12 w-12 dark:fill-teal-400 fill-teal-700 cursor-pointer"
                  viewBox="0 0 154 154"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.6157 18.8147C10.6161 16.6178 11.489 14.511 13.0424 12.9576C14.5958 11.4042 16.7025 10.5314 18.8994 10.531L24.6808 10.5225C28.7596 10.7456 32.6398 12.3545 35.6799 15.0828L63.195 42.5979C65.1587 44.5616 66.2619 47.2248 66.2619 50.0018C66.2619 52.7789 65.1588 55.4422 63.1951 57.4058L21.6491 98.9518C20.7467 99.8503 19.5984 100.461 18.3491 100.708C17.0998 100.955 15.8054 100.827 14.6291 100.339C13.4527 99.8512 12.4471 99.0261 11.739 97.9678C11.0308 96.9094 10.6519 95.665 10.6499 94.3916L10.6157 18.8147ZM94.5275 143.564C95.802 143.562 97.0473 143.182 98.1062 142.473C99.1651 141.764 99.9901 140.756 100.477 139.579C100.964 138.401 101.091 137.105 100.842 135.855C100.594 134.606 99.9801 133.457 99.0793 132.556L57.4991 90.9757C55.5355 89.012 52.8721 87.9089 50.0951 87.9089C47.3181 87.9089 44.6547 89.012 42.6911 90.9757L15.1674 118.499C12.4432 121.542 10.8351 125.421 10.6072 129.499L10.6158 135.28C10.6161 137.477 11.4889 139.584 13.0423 141.137C14.5957 142.69 16.7025 143.563 18.8994 143.564L94.5275 143.564ZM96.5856 63.1104C98.5523 65.0726 101.217 66.1738 103.996 66.1722C106.774 66.1706 109.438 65.0663 111.402 63.1018L138.917 35.5867C141.641 32.544 143.25 28.6651 143.478 24.5874L143.477 18.8146C143.476 16.6158 142.602 14.5075 141.047 12.9527C139.492 11.3979 137.384 10.5238 135.185 10.5225L59.5913 10.5054C58.3179 10.5074 57.0736 10.8864 56.0152 11.5945C54.9568 12.3026 54.1317 13.3082 53.644 14.4846C53.1563 15.6609 53.0277 16.9554 53.2746 18.2047C53.5214 19.454 54.1326 20.6022 55.0311 21.5046L96.5856 63.1104ZM118.405 138.833C121.446 141.563 125.331 143.169 129.412 143.384L135.185 143.384C137.382 143.384 139.489 142.511 141.042 140.958C142.596 139.404 143.469 137.297 143.469 135.101L143.486 59.4896C143.49 58.2136 143.114 56.9652 142.407 55.903C141.7 54.8409 140.693 54.013 139.514 53.5243C138.335 53.0356 137.038 52.9081 135.787 53.1583C134.536 53.4085 133.387 54.025 132.487 54.9294L90.9237 96.4924C88.9593 98.4568 87.8549 101.121 87.8533 103.899C87.8517 106.677 88.953 109.342 90.9151 111.309L118.405 138.833Z" />
                </svg>
              </Link>
              <button
                className="sm:hidden block"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MenuIcon className="h-8 w-8" />
              </button>
            </div>
            <div className="sm:flex items-center hidden sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto py-5 sm:py-0  dark:bg-neutral-900 bg-neutral-200 rounded-lg mt-3 sm:mt-0">
              <NavLink href="/">Blog</NavLink>
              <NavLink href="/">Bookmarks</NavLink>
              <NavLink href="/">Dashboard</NavLink>
              <NavLink href="/">Contact</NavLink>

              <button
                className="border h-7 w-7 inline-flex items-center justify-center border-neutral-500 rounded-lg focus:outline-2 focus:outline-transparent 
  focus:ring transition-all ease-in-out duration-200 transform focus:border-transparent dark:focus:ring-teal-400 focus:ring-teal-700"
                onClick={themeHandler}
              >
                {theme === "light" ? (
                  <>
                    <MoonIcon className="w-5 h-5 dark:text-neutral-300 text-neutral-700" />
                    <span className="sr-only">Dark</span>
                  </>
                ) : (
                  <>
                    <SunIcon className="w-5 h-5 dark:text-neutral-300 text-neutral-700" />
                    <span className="sr-only">Light</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`${
                isOpen
                  ? "sm:hidden space-y-4 py-5 pl-4 sm:py-0 dark:bg-neutral-700 bg-neutral-400 text-neutral-800 rounded-lg mt-3"
                  : "hidden"
              }`}
            >
              <NavLink href="/">Blog</NavLink>
              <NavLink href="/">Bookmarks</NavLink>
              <NavLink href="/">Dashboard</NavLink>
              <NavLink href="/">Contact</NavLink>
              <center>
                <button
                  className="border h-7 w-7 inline-flex items-center justify-center border-neutral-500 rounded-lg focus:outline-2 focus:outline-transparent 
                            focus:ring transition-all ease-in-out duration-200 transform focus:border-transparent dark:focus:ring-teal-400 focus:ring-teal-700"
                  onClick={themeHandler}
                >
                  {theme === "light" ? (
                    <>
                      <MoonIcon className="w-5 h-5 dark:text-neutral-300 text-neutral-700" />
                      <span className="sr-only">Dark</span>
                    </>
                  ) : (
                    <>
                      <SunIcon className="w-5 h-5 dark:text-neutral-300 text-neutral-700" />
                      <span className="sr-only">Light</span>
                    </>
                  )}
                </button>
              </center>
            </div>
          </Transition>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
