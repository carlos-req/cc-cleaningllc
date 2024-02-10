"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import companyLogoSM from "../public/Logo.png";
import companyLogo from "../public/Logo With Text.png";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

const Nav = () => {
  //Handles toggle on Hamburger Menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  //Page sites and Links
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "SERVICES", link: "/services" },
    { id: 3, name: "PROJECTS", link: "/projects" },
    { id: 4, name: "CONTACT", link: "/contact" },
  ];
  return (
    <React.Fragment>
      <div className="bg-transparent font-sans max-w-[1440px] h-[120px] flex justify-between items-center mx-auto">
        {/*Regular Menu*/}
        <div className="mt-2 ml-10 md:ml-20 md:mt-0">
          <Link href="/">
            <Image
              className="hidden md:block"
              priority={true}
              src={companyLogo}
              width={60}
              height={60}
              alt="CC Cleaning Services Logo"
            />
            <Image
              className="md:hidden"
              src={companyLogoSM}
              width={50}
              height={50}
              alt="CC Cleaning Services Logo"
            />
          </Link>
        </div>
        <ul className="hidden text-lg md:flex md:gap-4">
          {links.map((link) => {
            return (
              <li key={link.id} className="mx-1 text-slate-950">
                <a href={link.link}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <section className="flex mr-20">
          <div className="hidden md:pt-2 md:mr-10 md:block">
            <FaPhoneAlt
              className="inline-flex pb-1 mr-2"
              size={20}
              color="#0ea5e9"
            />
            <a
              href="tel:3189631052"
              className="text-lg underline text-slate-950"
            >
              318-963-1075
            </a>
          </div>
          <button className="w-40 hidden lg:block rounded-full bg-sky-500 px-3.5 py-2.5 shadow-base text-lg text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
            <Link href="/contact">Book Now</Link>
          </button>
        </section>
        {/* Hamburger */}
        <div onClick={handleClick} className="z-40 mr-6 md:hidden">
          {!nav ? (
            <FaBars size={28} />
          ) : (
            <FaTimes
              className="fixed right-6 top-12"
              size={24}
              color="#f1f5f9"
            />
          )}
        </div>

        <div className="fixed z-30 w-full h-screen md:hidden">
          {/*Mobile Menu*/}
          <ul
            className={
              !nav
                ? "hidden"
                : "z-30 absolute top-[43%] left-0 w-full h-screen bg-[#171717] flex flex-col justify-center items-center"
            }
          >
            {links.map((link) => {
              return (
                <li key={link.id} className="py-6 text-4xl text-slate-100">
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Nav;
