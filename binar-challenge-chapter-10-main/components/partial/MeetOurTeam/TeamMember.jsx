import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const TeamMember = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className='py-14'>
      <h2 className='text-4xl font-[700] text-center mb-32'>FSW 25</h2>
      <div
        className='grid grid-rows-1 lg:grid-cols-3 gap-28 place-content-center place-items-center'
        data-aos='fade-up'
        data-aos-offset='100'
        data-aos-duration='500'>
        <div className='card lg:w-96 w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Muhammad Charis'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Muhammad Charis Azwar</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card lg:w-96  w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Mirzanda Abimanyu'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Mirzanda Abimanyu</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card lg:w-96  w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Aaron'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Aaron</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card lg:w-96 w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Kelvin'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Kelvin</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card lg:w-96 w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Adli'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Adli</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='card lg:w-96 w-full bg-[#f9faff] shadow-md h-48 relative'>
          <div className='absolute -top-20 left-[50%] -translate-x-[50%] w-36 h-36 bg-green-200 rounded-full'>
            <img
              src='https://ui-avatars.com/api/?name=Raynato Fontana'
              alt='step1'
              className='object-cover  w-36 h-36 rounded-full'
            />
          </div>

          <div className='mt-20'>
            <div className='flex flex-col gap-5 justify-center items-center p-4'>
              <h2 className='flex-1 card-title'>Raynato Fontana</h2>
              <div>
                <div className='grid grid-flow-col gap-4'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      className='fill-current'>
                      <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
