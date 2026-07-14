import React from 'react'
import Link from 'next/link'
import CtaButton from '../CtaButton'
import Image from 'next/image'

function Hero({title , description , cta ,image}) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 py-10 gap-y-10 lg:gap-y-0 lg:mb-0 bg-background pt-30 ">
      {/* Mobile Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-secondary-accent/5 to-primary-accent/20 blur-2xl z-0 lg:hidden"></div>
      {/* Left */}
      <div className="relative z-10 flex flex-col gap-y-5 mx-10 ">
        <h1 className="hero-gradient text-5xl text-center lg:text-start lg:text-6xl font-heading">
          {title}
        </h1>
        <p className="text-primary text-lg text-center lg:text-start">
          {description}
        </p>
        <div className="mt-5 flex flex-col lg:flex-row gap-x-2 gap-y-5 lg:gap-y-0">
          <Link href={"/#about"}>
            <CtaButton
              changeStyle={
                "bg-transparent text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center"
              }
            >
              {cta}
            </CtaButton>
          </Link>
          {/* <Link href={"/#contact"}>
            <CtaButton
              changeStyle={
                "bg-transparent text-primary px-6 py-3 rounded-3xl border-2 border-primary-accent font-semibold hover:bg-primary-accent/90 transition-colors cursor-pointer w-full lg:w-fit shadow-[0_20px_90px_-100px_rgba(94,234,212,0.5),0_8px_10px_-6px_rgba(94,234,212,0.5)] text-center flex flex-row justify-center items-center "
              }
              >
              {"Request Demo"}
            </CtaButton>
              </Link> */}
        </div>
      </div>
      {/* Right */}
      <div className="relative hidden lg:block">
        {/* Gradient Overlay */}
        <div className="absolute top-5 left-0 w-[85%] h-full bg-linear-to-br from-secondary-accent/20 to-primary-accent/5 blur-2xl  z-10"></div>
        <Image
          src={image}
          alt={title}
          className="w-full h-auto max-w-sm  absolute translate-x-1/2 z-20"
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  );
}

export default Hero