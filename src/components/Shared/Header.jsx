import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-screen'>
            <Link to="/courses"><div className=" h-[55px] bg-amber-500 rounded-lg justify-center items-center gap-[23px] flex">
                <div className="text-white text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Free Courses 🌟 Sale Ends Soon, Get It Now</div>
                <img src="icons/right.svg" className='w-6 h-6 relative' />
            </div></Link>



            <div className="h-[99px] px-[132px] pt-5 pb-6 border-b border-zinc-100">
                <div className="flex justify-between items-center gap-[50px]">

                    {/* Logo */}
                    <div className="w-[54px] h-[54px] p-[7px] bg-amber-500 rounded-lg justify-center items-center flex">
                        <div className="w-10 h-10 relative flex-col justify-center items-center flex font-black">ATC.</div>
                    </div>


                    {/* Navigation */}
                    <div className="flex justify-between items-center gap-[50px] flex-grow">

                        {/* Left Nav */}
                        <div className='justify-start items-center gap-[26px] flex'>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Home</NavLink>
                            <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Courses</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>About Us</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Contact</NavLink>
                        </div>

                        {/* Right Nav */}
                        <div className='justify-end items-center gap-[30px] flex'>
                            <Link to="/login" className='text-neutral-800 text-lg font-normal leading-[27px]'>Login</Link>
                            <button className='px-8 py-3.5 bg-amber-500'>
                                <Link to="/signup" className=' rounded-lg justify-start items-center gap-2 flex'><div className='text-white text-lg font-normal leading-[27px]'>Sign Up</div></Link>
                            </button>
                        </div>


                    </div>

                </div>

            </div>
        </div >
    );
};

export default Header;