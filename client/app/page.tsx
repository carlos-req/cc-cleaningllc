import AboutSnip from "@components/Home/AboutSnip";
import Hero from "@components/Home/Hero";
import ServicesHome from "@components/Home/ServicesHome";

export default function Home() {
  return (
    <main className="w-full h-full p-0 m-0">
      <div className="mx-auto gradient"></div>
      <Hero />
      <AboutSnip />
      <ServicesHome />
    </main>
  );
}
