import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { CartInfoContext } from '../../contexts/CartContext';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'



const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const { cart } = useContext(CartInfoContext);

    const handleLogout = () => {
        logout();
    }





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

                        {
                            user && user.uid ?

                                < div className='justify-end items-center gap-[30px] flex'>
                                    <div className='flex gap-4 items-center'>
                                        <img src={user?.photoURL || `https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png`} className='w-10 h-10 rounded-full' />
                                        <div className='text-lg font-normal leading-[27px]'>{user?.displayName} ({user?.email})</div>


                                        <Link to="/cart" className='items-center'>
                                            <div className=''>
                                                <button className='flex flex-row gap-2 items-center justify-center'><ShoppingCartIcon className='w-5 h-5 text-white'></ShoppingCartIcon>({cart.length})</button>
                                            </div>
                                        </Link>


                                        <button onClick={handleLogout} className=''>Logout</button>

                                    </div>

                                </div> :

                                <div className='justify-end items-center gap-[30px] flex'>
                                    <Link to="/login" className='text-neutral-800 text-lg font-normal leading-[27px]'>Login</Link>
                                    <button className='px-8 py-3.5 bg-amber-500'>
                                        <Link to="/signup" className=' rounded-lg justify-start items-center gap-2 flex'><div className='text-white text-lg font-normal leading-[27px]'>Sign Up</div></Link>
                                    </button>
                                    <Link to="/cart" className='items-center'>
                                        <div className=''>
                                            <button className='flex flex-row gap-2 items-center justify-center'><ShoppingCartIcon className='w-5 h-5 text-white'></ShoppingCartIcon>({cart.length})</button>
                                        </div>
                                    </Link>
                                </div>
                        }






                    </div>

                </div>

            </div>
        </div >
    );
};

export default Header;