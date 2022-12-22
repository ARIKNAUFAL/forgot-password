import Image from "next/image";
import memory from "../../../images/memory.png";
import os from "../../../images/os.png";
import processor from "../../../images/processor.png";
import storage from "../../../images/storage.png";
import vga from "../../../images/vga.png";

export const SystemRequirement = () => {
  return (
    <section className='bg-[#FAFAFA] w-full mb-8 rounded-xl p-6 grid lg:grid-cols-2 grid-rows-1'>
      <div className=' flex flex-col justify-center items-start'>
        <div className='pl-8'>
          <p className='text-sm text-[#7B7B7B]'>
            Can My Computer Run this game ?
          </p>
          <h2 className='font-extrabold text-2xl '>System Requirement</h2>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 gap-3 py-10'>
        <div className='flex flex-row gap-6'>
          <div className='w-16 h-16'>
            <Image
              src={os}
              alt='os'
            />
          </div>
          <div className='flex-1 '>
            <h3 className='font-bold'>Operating System</h3>
            <p className='text-[#7B7B7B]'>
              Windows 7 64-bit only <br />
              (No OSX support at this time)
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          <div className='w-16 h-16'>
            <Image
              src={processor}
              alt='processor'
            />
          </div>
          <div className='flex-1 '>
            <h3 className='font-bold'>Processor</h3>
            <p className='text-[#7B7B7B]'>
              Intel Core 2 Duo @2.4GHz <br />
              or AMD Athlon X2 @ 2.8GHz
            </p>
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          <div className='w-16 h-16'>
            <Image
              src={memory}
              alt='memory'
            />
          </div>
          <div className='flex-1 '>
            <h3 className='font-bold'>Memory</h3>
            <p className='text-[#7B7B7B]'>4 GB RAM</p>
          </div>
        </div>
        <div className='flex flex-row gap-6'>
          <div className='w-16 h-16'>
            <Image
              src={storage}
              alt='storage'
            />
          </div>
          <div className='flex-1 '>
            <h3 className='font-bold'>Storage</h3>
            <p className='text-[#7B7B7B]'>8 GB available space</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 lg:col-span-2'>
          <div className='w-16 h-16'>
            <Image
              src={vga}
              alt='graphics'
            />
          </div>
          <div className='flex-1'>
            <h3 className='font-bold'>Graphics</h3>
            <p className='text-[#7B7B7B]'>
              NVIDIA GeForce GTX 660 2GB <br />
              AMD Radeon HD 7850 2GB DirectX11 (Shader Model S)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
