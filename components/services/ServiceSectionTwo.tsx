"use client"
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import SectionTitle from '../Common/SectionTitle';
import Lottie from 'lottie-web';

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

const ServiceSectionTwo = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: "Animations/Animation - 1706686025139.json",
    });
    anim.current.setSpeed(1);

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
            <div
                ref={animationContainer}
                className="relative h-[400px]"
              ></div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="International Operations"
                paragraph="We Are A 100% Nationally Owned
                Car Rental Company That Takes
                Advantage Of The Growing
                Demand For Hire Vehicles, Fueled
                By Increased Business Activities."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSectionTwo