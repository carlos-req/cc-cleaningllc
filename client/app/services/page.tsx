import ServicesHome from "@components/Home/ServicesHome";
import Link from "next/link";

export default function Services() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 max-w-[1440px] mx-auto">
      <div className="min-h-full gradient bg-blend-soft-light -z-30"></div>
      <h1 className="mb-4 text-4xl text-slate-950">Services</h1>
      <p className="max-w-[1000px] -mb-4 text-lg text-center lg:text-left text-neutral-700">
        At our cleaning service, we are passionate about providing our clients
        with the highest level of cleanliness possible. We understand that a
        clean environment is not only essential for health and safety, but also
        for peace of mind and a sense of comfort within your home, office,
        workplace and rentals.
      </p>
      <ServicesHome />
      <section className="flex flex-col gap-10 my-10 md:flex-row ">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="mb-5 text-2xl">
            Didn&#39;t find the service you were looking for?
          </h3>
          <p className="mb-5 text-lg">
            We are always open to discussing different services to help you
            enjoy a clean environment, click on the button below to send us a
            detailed inquiry, of what service you were looking for
          </p>
          <button className="w-40 block rounded-full bg-sky-500 px-3.5 py-2.5 shadow-base text-lg text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
            <Link href="/contact">Message Us</Link>
          </button>
        </div>
        <div class="hidden md:block h-[250px] min-h-[2em] w-0.5 self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-100"></div>
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="mb-5 text-2xl">Ready to book one of our services?</h3>
          <p className="mb-5 text-lg">
            We are always excited to start working with new or existing clients,
            feel free to click the button below or call to leave us a detailed
            message with what services you are ready to book!
          </p>
          <button className="w-40  block rounded-full bg-sky-500 px-3.5 py-2.5 shadow-base text-lg text-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700">
            <Link href="/contact">Book Now</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
