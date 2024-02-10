"use client";
import { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Projects() {
  const slides = [
    {
      url: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/355672099_225651513613552_2363816169201920318_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bw_qrOCDLfEAX_BQPth&_nc_oc=AQkdnzwLrQi-EOp98sjs2tJq8SSqxDV6oc0WzHqh8CNcwMl95ExRLFc1BfjWTYVuFGo&_nc_ht=scontent-mia3-2.xx&oh=00_AfCQTWpcztmeTNhxpUd2SCL5Xn7oP8PkjbBWK87oGEPnyg&oe=653377E9",
    },
    {
      url: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/352566341_225652246946812_6145797518441958269_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=li-ItoRdE8wAX87PfLc&_nc_ht=scontent-mia3-2.xx&oh=00_AfBv1-Y1idCogpIYHS1PQw6WOUbnNc8Z1JQPkV0qjDkuaQ&oe=6533AC55",
    },
    {
      url: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/341293245_205940238840743_7816079377549875964_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8cUgPq_D0xQAX-9gecJ&_nc_ht=scontent-mia3-2.xx&oh=00_AfCMwvgxFmlbDlWpfhLQqkMk-fTuKzWkQwt9URZXtqbXrA&oe=65341640",
    },
    {
      url: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/341273497_112166725167402_804870917279045287_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m9g_rOEG0Z8AX-34xUS&_nc_ht=scontent-mia3-1.xx&oh=00_AfCjbk3vXXp1uCVu_Dlh_kbevuLMPH1mdiHW_t2BIakQjQ&oe=65339C31",
    },
    {
      url: "https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/341263235_1443099116428533_8454144390344090630_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0sZcITgPGDAAX9Ad2hh&_nc_ht=scontent-mia3-2.xx&oh=00_AfA4UQB0z1HjhDUpF_V1PrelQsPygUtQkQSa3LyALGDoZA&oe=653541A5",
    },
    {
      url: "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/340254723_1168955220338760_1612138036669686136_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Qtkh7aLy2-cAX96raXT&_nc_ht=scontent-mia3-1.xx&oh=00_AfCZBXrTlsEJqo3URsEwfYw55xXDgv6QWXuqrKUYyHKxug&oe=653527CD",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 mx-auto max-w-[1400px]">
      <div className="gradient -z-30"></div>
      <h1 className="mb-4 text-4xl text-slate-950">Projects</h1>
      <p className="max-w-[1000px] text-lg text-neutral-700">
        Our team likes to take pride in our hard work and dedication to make
        your home look brand new. Here we would like to show a few of many
        restoration jobs we have done. Below you can see before and after
        picture of our previous jobs!
      </p>
      <div className="max-w-[1400px] h-[973px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex justify-center py-2 top-4">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
