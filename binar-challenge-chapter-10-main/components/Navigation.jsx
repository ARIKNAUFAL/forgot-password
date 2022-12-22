import { useState } from "react";
import logo from "../images/logo.png";
import Link from "next/link";
import Image from "next/image";

const Sidebar = ({ visible, close }) => {
  console.log(visible);
  return (
    <div
      onClick={close}
      className={`fixed inset-0 bg-white backdrop-blur-sm bg-opacity-30 flex justify-start z-30 ${
        visible ? "translate-x-0" : "translate-x-full"
      } duration-300`}>
      <div
        className={`bg-white h-screen w-8/12 absolute right-0 ${
          visible ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}>
        <ul className='flex flex-col w-full items-center text-base cursor-pointer pt-16'>
          <li className='hover:text-[#761A79] text-slate-900 p-2 font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-[#761A79]  text-slate-900 p-2 font-bold menu-item'>
            <Link href='/game'>Games</Link>
          </li>
          <li className='hover:text-[#761A79]  text-slate-900 p-2 font-bold menu-item'>
            <Link href='/meet-our-team'>Meet Our Team</Link>
          </li>
          <li className='p-2 font-bold w-full menu-item'>Login</li>
        </ul>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [showModalSideBar, setShowModalSidebar] = useState(false);
  const onCloseSidebarHandler = () => setShowModalSidebar(false);

  return (
    <nav className='fixed top-0 left-0 bg-white w-full shadow lg:top-3 lg:w-8/12 lg:left-[50%] lg:-translate-x-[50%] lg:translate-y-0 lg:rounded-full lg:h-16 lg:py-1 z-10 lg:glass p-3'>
      <div className='container m-auto flex justify-between items-center text-slate-500'>
        <div className='w-16 h-14'>
          <Image
            src={logo}
            alt={"logo"}
          />
        </div>
        <ul className='p-0 flex-row gap-[30px] items-center hidden lg:flex'>
          <li className='hover:text-[#761A79] transition-all duration-200 text-slate-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-[#761A79] transition-all duration-200 text-slate-500'>
            <Link href='/game'>Games</Link>
          </li>
          <li className='hover:text-[#761A79] transition-all duration-200 text-slate-500'>
            <Link href='/meet-our-team'>Meet Our Team</Link>
          </li>
        </ul>
        <button
          className='block lg:hidden py-3 px-4 mx-2 btn-ghost focus:outline-none'
          onClick={() => {
            setShowModalSidebar(true);
          }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
          </svg>
        </button>

        <Link
          className='px-6 py-3 hidden lg:block rounded-full h-[48px] bg-[#A96EFF] text-white'
          href='#'>
          Login
        </Link>
      </div>
      <Sidebar
        close={onCloseSidebarHandler}
        visible={showModalSideBar}
      />
    </nav>
  );
};
