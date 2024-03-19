import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'


const Footer = () => {
    return (
        <div className='w-screen'>

            <div className='grid grid-cols-5 p-36'>

                <div className="col-span-2 flex flex-col justify-start gap-2 items-start">
                    {/* Logo */}
                    <div className="w-[54px] h-[54px] p-[7px] bg-amber-500 rounded-lg justify-center items-center flex mb-8">
                        <div className="w-10 h-10 relative flex-col justify-center items-center flex font-black">ATC.</div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <EnvelopeIcon className="h-6 w-6 text-neutral-800" />
                        <div className="text-neutral-800 text-lg font-normal leading-[27px]">hello@atcentral.com</div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <PhoneIcon className="h-6 w-6 text-neutral-800" />
                        <div className="text-neutral-800 text-lg font-normal leading-[27px]">+1 4135 988 0998</div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <MapPinIcon className="h-6 w-6 text-neutral-800" />
                        <div className="text-neutral-800 text-lg font-normal leading-[27px]">Amberkhana, Sylhet</div>
                    </div>

                </div>


                <div className='col-span-1'>
                    <div className='justify-start items-start gap-6 flex flex-col'>
                        <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Home</NavLink>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Courses</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>About Us</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-500 text-lg font-bold leading-[27px]' : 'text-neutral-800 text-lg font-normal leading-[27px]'}>Contact</NavLink>
                    </div>
                </div>


                <div className='col-span-1'>
                    <div className='justify-start items-start gap-6 flex flex-col'>
                        <a href='#' className='text-neutral-800 text-lg font-normal leading-[27px]'>Privacy Policy</a>
                        <a href='#' className='text-neutral-800 text-lg font-normal leading-[27px]'>Terms and Conditions</a>
                        <a href='#' className='text-neutral-800 text-lg font-normal leading-[27px]'>Refund Policy</a>
                    </div>
                </div>

                <div className='col-span-1'>
                    <div className='justify-start items-start gap-6 flex flex-col'>
                        <h2 className='font-bold text-xl'>Social Profiles</h2>
                        <div className='flex gap-4'>
                            <SocialIcon url="https://www.facebook.com" className="h-6 w-4" />
                            <SocialIcon url="https://www.linkedin.com" />
                            <SocialIcon url="https://www.twitter.com" />
                        </div>
                    </div>
                </div>




            </div>

            <div className="self-stretch h-[0px] border border-zinc-100"></div>
            <div className="self-stretch text-center text-stone-500 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">© 2024 ATC. All rights reserved. Developed by <a href="http://www.tashrique.com">Tashrique Ahmed</a></div>
        </div>
    );
};

export default Footer;