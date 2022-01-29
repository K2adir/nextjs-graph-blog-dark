import Link from "next/link";
import React from "react";

const NavLink = ({ children, href }) => {
  return (
    <Link href={href || "/"}>
      <a className="dark:text-neutral-300 text-neutral-700 md:text-lg dark:hover:text-neutral-100 hover:text-neutral-500 transition-all duration-200 ease-in-out transform ml-3 sm:ml-0 block p-2">
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
