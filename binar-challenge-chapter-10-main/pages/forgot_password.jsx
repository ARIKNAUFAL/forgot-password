import {useState} from "react";
import image from "../images/login.jpg";
import Link from "next/link";
import axios from "./api/axios";
import Image from "next/image";

const Index = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");


    const onSubmitHandle = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            setEmail('');
            // Tampilkan pesan sukses ke pengguna di sini
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }


    };


    return (
        <section className='mx-auto h-screen grid place-content-center w-screen'>
            <div className='container w-80 lg:w-screen'>
                <div className='grid grid-rows-1 lg:grid-cols-2 lg:gap-1'>
                    <div className='rounded-2xl lg:block hidden'>
                        <Image
                            src={image}
                            alt='player one'
                            className='object-cover'
                        />
                    </div>
                    <div className='lg:flex lg:justify-center'>
                        <div className='bg-white border border-gray-200 shadow-md p-6 rounded-lg '>
                            <div className='flex flex-col gap-1 lg:justify-center lg:items-center h-full'>
                                <div className='text-start lg:w-96 '>
                                    <h2 className='text-start text-lg lg:text-3xl font-bold tracking-tight text-gray-900'>
                                        Forgot Passpord
                                    </h2>
                                    <p className='mt-2 text-start text-sm text-gray-600'>
                                        Recovery email by sending email
                                    </p><br/>
                                    {error && <p>{error.message}</p>}
                                </div>
                                <form
                                    onSubmit={(e) => onSubmitHandle(e)}
                                    className='mt-8 space-y-6 lg:w-96'
                                    action='#'
                                    method='POST'>
                                    <div className='relative'>
                                        <input
                                            type='email'
                                            autoComplete={"off"}
                                            required={true}
                                            onChange={(e) => setEmail(e.currentTarget.value)}
                                            className='block px-2.5 pl-[1.5rem] pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent border border-gray-300  outline-none rounded-[100px] bg-white border-1 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                                        />
                                        <label
                                            htmlFor='email'
                                            className='absolute text-md text-slate-600 duration-300 bg-gray-50 grid place-items-center rounded-[100px] border-none h-[50px] transform -translate-y-3 scale-75 origin-[0] peer-focus:bg-white  px-5  peer-focus:text-blue-600 peer-focus:px-1 peer-focus:h-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2  peer-focus:top-3 peer-focus:scale-100 peer-focus:-translate-y-6 -top-3 left-1 peer-focus:left-5'>
                                            Email
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
                                            Send Me Email
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;
