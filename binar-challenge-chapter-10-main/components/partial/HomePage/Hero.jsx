import React from "react";
import hero from "../../../images/hero.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className='container mx-auto mt-24'>
      <div className='min-h-[540px] bg-[#FAFAFA] grid grid-rows-1 lg:grid-cols-2 gap-1 rounded-2xl'>
        <div className='flex justify-center flex-col px-6 gap-5'>
          <span className='text-[#7B7B7B]'>Hello gamers,</span>
          <h1 className='font-extrabold text-[52px] leading-normal'>
            Experience a new
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#A96EFF]/20 relative inline-block'>
              <span className='relative text-slate-900'>Traditional</span>
            </span>
            &nbsp;game play!
          </h1>
          <p className='text-[#7B7B7B]'>
            If you miss your childhood, we provide many traditional games here
          </p>
          <button className='btn btn-primary bg-[#7189FF] border-none w-48 rounded-full'>
            Get Started
          </button>
        </div>
        <div className='rounded-2xl overflow-hidden hidden lg:block'>
          <Image
            src={hero}
            alt='player one'
            className='object-cover h-full'
          />
        </div>
      </div>
    </section>
  );
};
