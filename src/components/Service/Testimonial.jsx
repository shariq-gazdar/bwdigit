"use client";

import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";


 const testimonials = [
   {
     id: 1,
     name: "Ricardo Leuven",
     position: "Startup Founder",
     image: "/service/avatar1.png",
     review:
       "BW Digit supported us from concept to launch with professionalism and clarity. Whether it was development, design, or system optimization, they delivered consistently high-quality results.",
   },
   {
     id: 2,
     name: "Sophia Klein",
     position: "Head of Digital Strategy",
     image: "/service/avatar1.png",
     review:
       "Their team has a strong grasp of modern technology and user expectations. BW Digit helped us improve our digital performance across multiple platforms.",
   },
   {
     id: 3,
     name: "Martin Schneider",
     position: "Project Director",
     image: "/service/avatar2.png",
     review:
       "A highly reliable partner with excellent communication. BW Digit handled every phase of our project with precision, from planning to execution.",
   },
   {
     id: 4,
     name: "Sophia Klein",
     image: "/service/avatar1.png",
     position: "Head of Digital Strategy",
     rating: 5,
     review:
       "Their team has a strong grasp of modern technology and user expectations. BW Digit helped us improve our digital performance across multiple platforms.",
   },
   {
     id: 5,
     name: "Martin Schneider",
     image: "/service/avatar2.png",
     position: "Project Director",
     rating: 5,
     review:
       "A highly reliable partner with excellent communication. BW Digit handled every phase of our project with precision, from planning to execution.",
   },
   {
     id: 6,
     name: "Isabella Fischer",
     image: "/service/avatar1.png",
     position: "E-commerce Owner",
     rating: 5,
     review:
       "BW Digit delivered exactly what we needed: a stable, user-friendly solution that enhanced our customers’ experience and supported our business growth.",
   },
 ];

export default function TestimonialsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-primary lg:text-5xl">
            What Clients Say About Working With BW Digit
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-primary/70">
            Real feedback from companies and professionals who trusted BW Digit
            with their digital transformation, from web development to mobile
            apps, UI/UX, e-commerce and AI-driven solutions.
          </p>
        </div>

        {/* Slider */}

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
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
          className="pb-14"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-3xl border border-primary/10 bg-card p-10 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="mx-auto rounded-full"
                />

                <h3 className="mt-6 text-2xl font-bold text-primary">
                  {item.name}
                </h3>

                <div className="mt-4 flex justify-center gap-1 text-primary-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="#5EEAD4" />
                  ))}
                </div>

                <p className="mt-5 font-semibold text-primary-accent">
                  {item.position}
                </p>

                <p className="mt-6 text-lg leading-8 text-primary/70">
                  "{item.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: hsl(var(--primary));
          opacity: 0.2;
        }

        .swiper-pagination-bullet-active {
          background: hsl(var(--primary-accent));
          opacity: 1;
          width: 28px;
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
