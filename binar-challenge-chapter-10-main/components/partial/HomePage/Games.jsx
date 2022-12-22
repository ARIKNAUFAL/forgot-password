import React, { useEffect, useState } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import axios from "../../../pages/api/axios";
import consoleImg from "../../../images/console.png";
import Image from "next/image";

export const Games = () => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        const response = await axios.get("/games/list-top-game");
        setGameData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  }, []);

  return (
    <section className='container mx-auto'>
      <h2 className='text-4xl font-[700] md:text-start mb-16 text-center'>
        Our Beloved <br />
        Games This Year
      </h2>
      <div
        className='grid grid-rows-1 md:grid-cols-4 gap-4 place-content-center'
        data-aos='fade-right'
        data-aos-offset='100'
        data-aos-duration='500'>
        {gameData?.map((datum) => {
          return (
            <div
              className='h-52 lg:w-80 rounded-[20px] relative overflow-hidden group hover:-translate-y-3 transition-all duration-[.4s]'
              key={datum.id}>
              <Image
                src={datum.image}
                alt={datum.name}
                className='w-full h-52 object-fill rounded-[15px]'
              />

              <Link to={`/game/${datum.id}`}>
                <div className='w-full h-52 top-0 -right-full group-hover:right-0 absolute bg-[#1f3d4738] backdrop-blur-[5px] rounded-[15px] text-white transition-all duration-[1s]'>
                  <div className='flex flex-col justify-center h-52 items-center'>
                    <Image
                      src={consoleImg}
                      alt='console'
                      className='w-20 h-20'
                    />
                    <p className='font-bold'>{datum.name}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className='w-full flex justify-center py-10'>
        <Link
          className='btn btn-outline btn-ghost w-48 rounded-full'
          href='/game'>
          View More
        </Link>
      </div>
    </section>
  );
};
