import { useEffect, useState } from "react";
import axios from "../api/axios";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";
import consoleImg from "../../images/console.png";
import Layout from "../../components/Layout";

const Index = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    AOS.init();
    const fetchData = async () => {
      try {
        const response = await axios.get("/games/list");
        setGameData(response.data);
      } catch (error) {
        console.log(error, "error");
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <section className='container mx-auto mt-28 p-5'>
        <h2 className='text-2xl lg:text-4xl font-[700] md:text-start mb-16 text-start lg:text-center'>
          Our Available Games <br />
        </h2>
        <div
          className='grid grid-rows-1 md:grid-cols-3 gap-4 place-content-center'
          data-aos='fade-right'
          data-aos-offset='100'
          data-aos-duration='500'>
          {gameData.map((datum) => {
            return (
              <div
                className='max-w-sm rounded-lg overflow-hidden shadow-lg relative group hover:-translate-y-3 transition-all duration-[.4s]'
                key={datum.id}>
                <Image
                  src={datum.image}
                  alt={datum.name}
                  className='w-full object-fill h-60'
                />
                <Link to={`/game/${datum.id}`}>
                  <div className='w-full h-full top-0 -right-full group-hover:right-0 absolute bg-[#1f3d4738] backdrop-blur-[5px] rounded-[15px] text-white transition-all duration-[1s]'>
                    <div className='flex flex-col justify-center items-center h-full'>
                      <Image
                        src={consoleImg}
                        alt='console'
                        className='w-20 h-20'
                      />
                      <p className='font-bold'>PLAY</p>
                    </div>
                  </div>
                </Link>

                <div className='px-6 py-4'>
                  <div className='font-bold text-xl mb-2'>{datum.name}</div>
                </div>
                <div class='px-6 pt-4 pb-2'>
                  <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {datum.type}
                  </span>
                  <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    {datum.difficulty}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
