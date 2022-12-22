import React, { useEffect } from "react";
import step1 from "../../../images/step1.svg";
import step2 from "../../../images/step2.svg";
import step3 from "../../../images/step3.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const WhatSpecial = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='py-14'>
      <h2 className='text-4xl font-[700] text-center mb-16'>
        Lets Play Together
      </h2>
      <div
        className='flex flex-col lg:flex-row gap-20 justify-center'
        data-aos='fade-up'
        data-aos-offset='100'
        data-aos-duration='500'>
        <div>
          <div className='card lg:w-96 bg-[#f9faff] shadow-md max-h-96'>
            <img
              src={step1}
              className='w-24 mx-5 mt-1'
              alt='step1'
            />
            <div className='card-body'>
              <h2 className='card-title'>1. Start</h2>
              <p>Choose the game you like</p>
            </div>
          </div>
        </div>
        <div>
          <div className='card lg:w-96 bg-[#f9faff] shadow-md'>
            <img
              src={step2}
              className='w-24 mx-5 mt-1'
              alt='step1'
            />
            <div className='card-body'>
              <h2 className='card-title'>2. Login to play</h2>
              <p>Login to your account</p>
            </div>
          </div>
        </div>
        <div>
          <div className='card lg:w-96 bg-[#f9faff] shadow-md'>
            <img
              src={step3}
              className='w-24 mx-5 mt-1'
              alt='step1'
            />
            <div className='card-body'>
              <h2 className='card-title'>3. Be a Champion</h2>
              <p>Beat the enemy, be a number one</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
