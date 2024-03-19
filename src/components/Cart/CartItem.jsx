import React from 'react';
import { useContext } from 'react';
import { CartInfoContext } from '../../contexts/CartContext';
import { XMarkIcon } from '@heroicons/react/24/solid'

const CartItem = ({ course }) => {

    const { removeItem } = useContext(CartInfoContext);
    const { id, name, price, discount_percentage, instructor, images } = course;




    return (
        <div className='bg-white rounded-xl w-[80%] mx-auto'>
            <div className='flex gap-4 items-center p-4 '>
                <img src={images.thumbnail} alt={name} className='w-24 h-24 rounded-lg object-cover' />
                <div className='grid grid-cols-4 justify-center items-center w-full'>
                    <div className='flex flex-col gap-2 col-span-2'>
                        <h1 className='text-[24px] font-bold'>{name}</h1>
                        <p className='text-[18px] font-normal'>By {instructor.name}</p>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <p className='text-[24px] font-bold bg-green-500 rounded-md p-2 text-white'>${price}</p>
                        <p className='text-[18px] font-normal line-through'>${price + (price * discount_percentage / 100)}</p>
                    </div>
                    <button onClick={() => removeItem(id)} className='place-self-end bg-transparent hover:bg-transparent'><XMarkIcon className='w-6 h-6 text-white bg-red-500 p-1 rounded-full'></XMarkIcon></button>

                </div>

            </div>
            <hr className='my-4' />


        </div>
    );
};

export default CartItem;