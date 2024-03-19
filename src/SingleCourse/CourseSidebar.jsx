import React from 'react';
import { useContext } from 'react';
import { CartInfoContext } from '../contexts/CartContext';
import { useState } from 'react';

const CourseSidebar = ({ course }) => {

    const { id, name, excerpt, welcome, category, level, duration, instructor, images, curriculum, price, discount_percentage, rating, reviews } = course;

    const { addItem } = useContext(CartInfoContext);

    const handleEnroll = () => {
        addItem(id);
    }

    return (
        <div className='bg-white p-12 rounded-xl sticky'>
            <div className="flex items-start gap-3">
                <h1 className='text-[32px] font-bold'>Pricing</h1>
                <div className=' text-black p-2 px-4 rounded-md bg-green-500'>{discount_percentage}% OFF</div>
            </div>


            <div className='flex gap-4 my-6'>
                <div className='flex justify-start items-center gap-4 bg-white p-4 rounded-md'>
                    <div className='text-amber-500 text-[24px] font-bold'>${price}</div>
                    <div className='text-neutral-800 text-[24px] line-through'>${price + (price * discount_percentage / 100)}</div>
                </div>
            </div>

            <div className='flex gap-2'>
                <button className="bg-amber-500 text-white rounded-md py-3 px-6" onClick={handleEnroll}>Enroll Now</button>
            </div>
        </div>
    );
};

export default CourseSidebar;