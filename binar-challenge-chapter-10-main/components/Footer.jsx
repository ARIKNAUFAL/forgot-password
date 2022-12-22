import React from "react";
import Logo from "../images/logo.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className='grid grid-rows-1 gap-2 place-content-center place-self-center place-items-center mt-10 p-10 bg-[#f9faff] text-slate-700'>
      <div className='flex items-center flex-col'>
        <div className='w-52  h-52'>
          <Image
            src={Logo}
            alt={"logo"}
          />
        </div>

        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};
