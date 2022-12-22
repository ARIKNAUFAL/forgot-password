import { useState } from "react";
import Link from "next/link";
import axios from "./api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState("");

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const inputRegister = {
      email,
      password,
    };

    await axios
      .post("/users/register", JSON.stringify(inputRegister), {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.status === 403) {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <section className='h-screen grid place-content-center'>
      <div className='container w-80 lg:w-[30rem] bg-white border rounded-2xl border-gray-200 shadow-xl'>
        <div className='flex flex-col gap-1 justify-center items-start p-10'>
          <h2 className='text-lg lg:text-3xl font-normal tracking-tight text-gray-900'>
            Sign Up
          </h2>

          <p className='mt-2 text-start text-sm text-gray-600'>
            Join and play with us <br />
            Or
            <Link
              href='/login'
              className='font-medium text-indigo-600 hover:text-indigo-500 ml-1 underline'>
              Sign In
            </Link>
          </p>

          <form
            onSubmit={(e) => onSubmitHandle(e)}
            className='space-y-6 w-full lg:w-96 mt-6'
            action='#'
            method='POST'>
            <div className='relative'>
              <input
                type='email'
                autoComplete={"off"}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                className='block px-2.5 pl-[1.5rem] pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent border border-gray-300  outline-none rounded-[100px] bg-white border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              />
              <label
                htmlFor='email'
                className='absolute text-md text-slate-600 duration-300 bg-gray-50 grid place-items-center rounded-[100px] border-none h-[50px] transform -translate-y-3 scale-75 origin-[0] peer-focus:bg-white  px-5  peer-focus:text-blue-600 peer-focus:px-1 peer-focus:h-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-3 peer-focus:scale-100 peer-focus:-translate-y-6 -top-3 left-1 peer-focus:left-5'>
                Email
              </label>
            </div>

            <div className='relative'>
              <input
                type={isShowPassword ? "text" : "password"}
                required={true}
                autoComplete={"off"}
                onChange={(e) => setPassword(e.target.value)}
                className='block px-2.5 pl-[1.5rem] pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent border border-gray-300  outline-none rounded-[100px] bg-white border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
              />
              <div
                className='absolute flex justify-end top-3 right-7 text-gray-400'
                onClick={() => setIsShowPassword((prev) => !prev)}>
                {isShowPassword ? (
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    height='2em'
                    width='2em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z'></path>
                  </svg>
                ) : (
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 1024 1024'
                    height='2em'
                    width='2em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <defs>
                      <clipPath>
                        <path
                          fill='none'
                          d='M124-288l388-672 388 672H124z'
                          clipRule='evenodd'></path>
                      </clipPath>
                    </defs>
                    <path d='M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z'></path>
                    <path d='M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z'></path>
                  </svg>
                )}
              </div>
              <label
                htmlFor='password'
                className='absolute text-md text-slate-600 duration-300 bg-gray-50 grid place-items-center rounded-[100px] border-none h-[50px] transform -translate-y-3 scale-75 origin-[0] peer-focus:bg-white  px-5  peer-focus:text-blue-600 peer-focus:px-1 peer-focus:h-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-3 peer-focus:scale-100 peer-focus:-translate-y-6 -top-3 left-1 peer-focus:left-5'>
                Password
              </label>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <svg
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Index;
