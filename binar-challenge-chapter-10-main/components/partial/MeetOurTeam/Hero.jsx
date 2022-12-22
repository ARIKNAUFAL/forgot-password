import Image from "next/image";
import hero from "../../../images/team.jpg";

export const Hero = () => {
  return (
    <section className='container mx-auto mt-28 grid grid-rows-1'>
      <div className='flex justify-center flex-col px-6 gap-5'>
        <h1 className='font-extrabold text-[52px] leading-normal'>
          Meet Our &nbsp;
          <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#A96EFF]/20 relative inline-block'>
            <span className='relative text-slate-900'>Team</span>
          </span>
        </h1>
        <p className='text-[#7B7B7B]'>
          This web application was created as a prerequisite for graduating from
          Binary Bootcamp
        </p>
        <div className='w-full'>
          <Image
            src={hero}
            alt='team'
            className='object-cover w-full'
          />
        </div>
      </div>
    </section>
  );
};
