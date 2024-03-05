import React from "react";
import Link from "next/link";
import Image from "next/image";

import { SocialMedia } from "../../../constants";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-gray-100 w-full rounded-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" passHref>
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="m-3 text-xl">Projects</span>
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" passHref>
            <div className="mr-5 hover:text-gray-900 cursor-pointer">Home</div>
          </Link>
          <Link href="/contac-me" passHref>
            <div className="mr-5 hover:text-gray-900 cursor-pointer">
              Contacto
            </div>
          </Link>
          <Link href="/projects" passHref>
            <div className="mr-5 hover:text-gray-900 cursor-pointer">
              Proyectos
            </div>
          </Link>
          <Link href="/fourth" passHref>
            <div className="mr-5 hover:text-gray-900 cursor-pointer">
              Fourth Link
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
