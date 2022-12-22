import Image from "next/image";
import image from "../../../images/mailbox.jpg";

export const Newsletter = () => {
  return (
    <section className='container mx-auto my-6'>
      <div className='min-h-[540px]  grid grid-rows-1 lg:grid-cols-2 gap-1 rounded-2xl'>
        <div className='rounded-2xl overflow-hidden hidden lg:block'>
          <Image
            src={image}
            alt='mailbox'
            className='object-cover h-full'
          />
        </div>
        <div className='flex justify-center flex-col px-6 gap-5'>
          <span className='text-[#7B7B7B]'>Want to stay in touch?</span>
          <h1 className='font-extrabold text-[52px] leading-normal'>
            Newsletter Subscribe
          </h1>
          <p className='text-[#7B7B7B]'>
            In case to start receiving our news, all you have to do is enter
            your email address. Everything else will be taken care of you. We
            will send you emails containing information about game. We
            don&apos;t spam.
          </p>
          <form>
            <label
              htmlFor='search'
              className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                </svg>
              </div>
              <input
                type='email'
                id='email'
                className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none rounded-full'
                placeholder='youremail@site.com'
                required
              />
              <button
                type='submit'
                className='btn outline-none text-white absolute right-0 top-0 lg:w-1/5 font-medium bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-full text-sm px-4 py-2 '>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
