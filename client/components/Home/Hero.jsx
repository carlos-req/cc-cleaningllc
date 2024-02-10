import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroIMG from "../../public/HeroIMG.png";
import { BsCalendarPlus } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="z-10">
      <div className="flex max-w-[1440px] mx-auto mt-16">
        <section className="flex flex-col justify-center flex-1 pl-6 mb-4">
          <p className="my-5 text-xl text-slate-950">
            HIGHLY PROFESSIONAL CLEANING
          </p>
          <h1 className="text-5xl font-bold text-sky-500">
            STRESS-FREE CLEAN
            <br />
            <span className="text-neutral-600">HOUSE AND OFFICE</span>
          </h1>
          <p className="text-base my-5 text-slate-950 md:w-[80%]">
            Are you tired of spending your precious time scrubbing, dusting, and
            mopping? Look no further! At CC Cleaning, we specialize in providing
            top-notch cleaning solutions that will leave your home or office
            sparkling from floor to ceiling.
          </p>
          <button className="z-10 inline-flex justify-center items-center max-w-[250px] rounded-full bg-sky-500 px-2 py-2.5 shadow-sm text-base text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-sky-700">
            <Link href="/contact">
              <BsCalendarPlus className="inline-flex pb-1 mr-2" size={25} />
              Schedule Now
            </Link>
          </button>
        </section>

        <section className="hidden pr-6 lg:block">
          <Image
            priority={true}
            src={HeroIMG}
            alt="Lady Holding Cleaning supplies"
            width={650}
          />
        </section>
      </div>
      <div className="items-center justify-center hidden w-full h-32 md:flex bg-zinc-800">
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="self-center mr-2"
          />
          <p className="text-2xl text-slate-100 ">Trusted Cleaners</p>
        </section>
        <div className="h-10 mx-3 border-l-2 border-lgray"></div>
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="self-center mr-2"
          />
          <p className="text-2xl text-slate-100 ">100% Gurantee</p>
        </section>
        <div className="h-10 mx-3 border-l-2 border-lgray"></div>
        <section className="flex flex-row mx-10">
          <FaRegCheckCircle
            color="#39E70A"
            size={20}
            className="self-center mr-2"
          />
          <p className="text-2xl text-slate-100 ">5 Star Service</p>
        </section>
      </div>
    </div>
  );
};

export default Hero;
