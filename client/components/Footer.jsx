import Image from "next/image";
import Link from "next/link";
import companyLogoSM from "../public/Logo.png";

const Footer = () => {
  return (
    <footer className="w-full mt-10 font-sans text-gray-700 bg-slate-900">
      <div className="container flex flex-col flex-wrap px-5 py-20 mx-auto md:ml-36 lg:items-start md:flex-col xl:flex-row ">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:text-left lg:w-1/4 ">
          <Link href="/" className="flex items-center ml-16 md:ml-0">
            <Image
              className="ml-7"
              src={companyLogoSM}
              width={60}
              height={60}
              alt="CC Cleaning Services Logo"
            />
          </Link>
          <p className="mt-2 text-sm text-gray-200">CC Cleaning LLC</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=100085061131221"
                className="text-gray-200 cursor-pointer hover:text-sky-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="ml-3 text-gray-200 cursor-pointer hover:text-sky-500"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="/"
                className="ml-3 text-gray-200 cursor-pointer hover:text-sky-500"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="/"
                className="ml-3 text-gray-200 cursor-pointer hover:text-sky-500"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
            <p>
              <a
                href="https://github.com/Innovelope"
                className="mt-2 text-xs text-gray-200 hover:text-sky-600"
              >
                Made by Carlos R
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h4 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              About
            </h4>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link
                  href="/"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Company
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/careers"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Careers
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Blog
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h4 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              Support
            </h4>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link
                  href="/contact"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Contact Support
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Help Resources
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  News
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h4 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              Platform
            </h4>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link
                  href="/terms"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Terms &amp; Privacy
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/contact"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Pricing
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  FAQ
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h4 className="mb-3 text-sm font-medium tracking-widest text-gray-400 uppercase title-font">
              Contact
            </h4>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link
                  href="/contact"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  Send a Message
                </Link>
              </li>
              <li className="mt-3">
                <a className="text-gray-200 cursor-pointer hover:text-sky-600">
                  Request a Quote
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="tel:3189631052"
                  className="text-gray-200 cursor-pointer hover:text-sky-600"
                >
                  318-963-1075
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-slate-950">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-center text-gray-300 capitalize">
            © 2023 All rights reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
