// import Swiper core and required modules
import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    title: "SPRING EXCLUSIVE BUNDLE 💐",
    subtitle: "UPGRADE FOR $10/MONTH - 50% OFF",
    link: "https://www.nasm.org/become-a-personal-trainer",
  },
  {
    title: "HAVE QUESTIONS?",
    subtitle: "TALK TO A PROGRAM ADVISOR TODAY",
    link: "tel:8004606276",
  },
  {
    title: "50% OFF ELITE TRAINER BUNDLE 💐",
    subtitle: "START TODAY FOR $129/MONTH",
    link: "https://www.nasm.org/fitness-certifications/elite-personal-trainer-program",
  },
];

function ContinuityBar() {
  return (
    <div className="h-[70px] text-[var(--brand-color-dark)] bg-[var(--brand-color-highlight)] lg:flex lg:items-center">
      {/* Carousel */}
      <Swiper
        className="h-[70px] w-full"
        modules={[Navigation, A11y]}
        direction="vertical"
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <a
              href={slide.link}
              className="block h-full w-full pb-[6px] flex flex-col items-center justify-center text-center lg:pl-4 lg:justify-start lg:flex-row lg:gap-2"
            >
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Phone CTA */}
      <div className="hidden items-center pr-4 shrink-0 lg:flex">
        <h2 className="text-[18px] [font-variation-settings:'wght'_800]">
          <a href="tel:+18004606276">1.800.460.6276</a>
        </h2>
      </div>
    </div>
  );
}

export default ContinuityBar;
