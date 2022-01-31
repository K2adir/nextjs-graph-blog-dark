import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer
      className="lg:py-12 sm:py-10 py-6 dark:bg-neutral-900 bg-neutral-200 dark:text-neutral-100 text-neutral-800 
    dark:selection:bg-teal-400 selection:bg-teal-700 dark:selection:text-neutral-800 selection:text-neutral-200 border-t dark:border-neutral-700 border-neutral-400"
    >
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:text-left text-center">
          <Link href="/">
            <div className="flex space-x-2 items-center justify-center">
              <svg
                className="h-12 w-12 dark:fill-teal-400 fill-teal-700 cursor-pointer"
                viewBox="0 0 154 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.6157 18.8147C10.6161 16.6178 11.489 14.511 13.0424 12.9576C14.5958 11.4042 16.7025 10.5314 18.8994 10.531L24.6808 10.5225C28.7596 10.7456 32.6398 12.3545 35.6799 15.0828L63.195 42.5979C65.1587 44.5616 66.2619 47.2248 66.2619 50.0018C66.2619 52.7789 65.1588 55.4422 63.1951 57.4058L21.6491 98.9518C20.7467 99.8503 19.5984 100.461 18.3491 100.708C17.0998 100.955 15.8054 100.827 14.6291 100.339C13.4527 99.8512 12.4471 99.0261 11.739 97.9678C11.0308 96.9094 10.6519 95.665 10.6499 94.3916L10.6157 18.8147ZM94.5275 143.564C95.802 143.562 97.0473 143.182 98.1062 142.473C99.1651 141.764 99.9901 140.756 100.477 139.579C100.964 138.401 101.091 137.105 100.842 135.855C100.594 134.606 99.9801 133.457 99.0793 132.556L57.4991 90.9757C55.5355 89.012 52.8721 87.9089 50.0951 87.9089C47.3181 87.9089 44.6547 89.012 42.6911 90.9757L15.1674 118.499C12.4432 121.542 10.8351 125.421 10.6072 129.499L10.6158 135.28C10.6161 137.477 11.4889 139.584 13.0423 141.137C14.5957 142.69 16.7025 143.563 18.8994 143.564L94.5275 143.564ZM96.5856 63.1104C98.5523 65.0726 101.217 66.1738 103.996 66.1722C106.774 66.1706 109.438 65.0663 111.402 63.1018L138.917 35.5867C141.641 32.544 143.25 28.6651 143.478 24.5874L143.477 18.8146C143.476 16.6158 142.602 14.5075 141.047 12.9527C139.492 11.3979 137.384 10.5238 135.185 10.5225L59.5913 10.5054C58.3179 10.5074 57.0736 10.8864 56.0152 11.5945C54.9568 12.3026 54.1317 13.3082 53.644 14.4846C53.1563 15.6609 53.0277 16.9554 53.2746 18.2047C53.5214 19.454 54.1326 20.6022 55.0311 21.5046L96.5856 63.1104ZM118.405 138.833C121.446 141.563 125.331 143.169 129.412 143.384L135.185 143.384C137.382 143.384 139.489 142.511 141.042 140.958C142.596 139.404 143.469 137.297 143.469 135.101L143.486 59.4896C143.49 58.2136 143.114 56.9652 142.407 55.903C141.7 54.8409 140.693 54.013 139.514 53.5243C138.335 53.0356 137.038 52.9081 135.787 53.1583C134.536 53.4085 133.387 54.025 132.487 54.9294L90.9237 96.4924C88.9593 98.4568 87.8549 101.121 87.8533 103.899C87.8517 106.677 88.953 109.342 90.9151 111.309L118.405 138.833Z" />
              </svg>
              <span className="lg:text-3xl sm:text-2xl text-xl">Frus</span>
            </div>
          </Link>
          <div className="mt-8 lg:mt-0">
            <div className="flex sm:flex-row flex-col sm:space-x-4 items-center justify-center">
              <NavLink href="/">Blog</NavLink>
              <NavLink href="/">Bookmarks</NavLink>
              <NavLink href="/">Dashboard</NavLink>
              <NavLink href="/">Contact</NavLink>
              <Link href="https://twitter.com/frusdev">
                <a>
                  <svg
                    className="w-5 h-5 fill-[#1DA1F2]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
