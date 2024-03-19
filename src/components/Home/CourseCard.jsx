import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { CartInfoContext } from '../../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const CourseCard = ({ course }) => {


    const { id, name, excerpt, level, duration, instructor, images, rating, reviews } = course;
    const { addItem } = useContext(CartInfoContext);

    const image = images.thumbnail;
    const instructorName = instructor.name;


    const handleAddToCart = () => {
        addItem(id);
        toast(`Added ${name} to cart`)
    }

    return (
        <div className='bg-white p-8 rounded-xl'>
            <img src={image} alt={name} className='rounded-xl h-[400px] w-full object-cover' />

            <div className="flex justify-between items-center my-4">
                <div className='flex gap-4 my-4'>
                    <h2 className='bg-white text-neutral-800 border rounded-lg border-neutral-200 font-semibold px-4 py-3'>{duration}</h2>
                    <h2 className='bg-white text-neutral-800 border rounded-lg border-neutral-200 font-semibold px-4 py-3'>{level}</h2>
                </div>

                <p className='font-semibold'>By {instructorName}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[28px] font-bold'>{name}</h1>
                    <div className='flex justify-start gap-2 items-center'>
                        <StarIcon className="h-6 w-6 text-amber-500" />
                        <p>{rating} ({reviews})</p>
                    </div>
                </div>

                <p className=''>{excerpt} {excerpt}</p>
                <Link to={`/courses/${id}`} className='mt-2 w-full text-center bg-neutral-200 hover:bg-amber-500 hover:text-white font-bold py-3 px-4 rounded-lg'>
                    Course Details
                </Link>
                <button className='w-full text-center hover:bg-amber-400 bg-amber-500 hover:text-white font-bold py-3 px-4 rounded-lg' onClick={handleAddToCart}>
                    Add to Cart
                </button>

            </div>

        </div>
    );
};

export default CourseCard;