import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import aboutIMG from "../../public/AboutUs.png";

const AboutSnip = () => {
  return (
    <section
      id="about"
      className="my-36 font-sans max-w-[1440px] flex flex-col md:flex-row gap-10 justify-between items-center mx-auto px-6"
    >
      <section className="w-full pl-2 grow">
        <h3 className="text-xl font-normal tracking-wider uppercase text-sky-500">
          About Us
        </h3>
        <h2 className="my-6 text-4xl font-semibold uppercase text-neutral-600">
          Quickly and Easy to Clean Your Office and House
        </h2>
        <p className="text-base">
          At CC Cleaning, we&#39;re dedicated to transforming spaces into
          spotless havens. With years of experience under our belts, we have
          honed our expertise in providing top-tier cleaning solutions that not
          only meet but exceed our clients&#39; expectations.
        </p>
        <section className="flex flex-row gap-3 mt-6 mb-4">
          <h4 className="text-base font-semibold uppercase text-neutral-600">
            You will love us
          </h4>
          <FaTrophy color="#0ea5e9" size={20} />
        </section>
        <p className="text-base">
          Our quick and effective cleaning services will leave you shocked at
          how nice your home and office look once our team has finished and
          complete our checklist system.
        </p>
      </section>
      <section className="w-full mt-10 grow md:mt-0">
        <Image
          width={900}
          height={900}
          quality={80}
          src={aboutIMG}
          alt="Group of people actively cleaning"
        />
      </section>
    </section>
  );
};

export default AboutSnip;
