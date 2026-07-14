"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inspirations = [
  {
    title: "Klur Skincare",
    category: "Beauty & Skincare",
    image: "/images/inspirations/klur.webp",
    url: "#",
  },
  {
    title: "Little's Coffee",
    category: "E-commerce",
    image: "/images/inspirations/littles.webp",
    url: "#",
  },
  {
    title: "Studio Coffee",
    category: "Coffee Brand",
    image: "/images/inspirations/coffee.webp",
    url: "#",
  },
  {
    title: "Plant Boutique",
    category: "Lifestyle",
    image: "/images/inspirations/plants.webp",
    url: "#",
  },
  {
    title: "Modern Fashion",
    category: "Fashion Store",
    image: "/images/inspirations/fashion.webp",
    url: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-10 bg-background text-primary">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Real-World Small Business Websites For Design Inspiration
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Boutique shops, small businesses and niche brands with clean UX,
            modern design and solid usability — useful references for web,
            e-commerce, mobile or service projects.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={30}
          
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="pb-16 "
        >
          {inspirations.map((item) => (
            <SwiperSlide key={item.title}>
              <a
                href={item.url}
                className="group block overflow-hidden rounded-3xl border bg-card shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm font-medium text-accent">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Clean layouts, intuitive navigation and conversion-focused
                    design patterns worth studying for your next project.
                  </p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
