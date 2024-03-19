import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({ course }) => {

    const { id, name, excerpt, level, duration, instructor, images, curriculum } = course;
    return (
        <div className='bg-white rounded-xl p-12'>

            <div className='flex justify-between items-center'>
                <div className='flex flex-col w-[80%] gap-3'>
                    <h1 className='text-[32px]'>{name}</h1>
                    <p>{excerpt} {excerpt} </p>
                </div>
                <Link to={`/courses/${id}`} className='mt-2 text-center bg-neutral-200 hover:bg-amber-500 hover:text-white font-bold py-4 px-5 rounded-lg'>
                    View Course
                </Link>
            </div>
            <div className="grid gap-4 grid-cols-3 mt-8 mb-4">
                <img src={images.img_1} alt={name} className='rounded-xl h-[400px] object-cover' />
                <img src={images.img_2} alt={name} className='rounded-xl h-[400px] object-cover' />
                <img src={images.img_3} alt={name} className='rounded-xl h-[400px] object-cover' />
            </div>

            <div className="flex justify-between items-center">
                <div className='flex gap-4 my-4'>
                    <h2 className='bg-white text-neutral-800 border rounded-lg border-neutral-200 font-semibold px-4 py-3'>{duration}</h2>
                    <h2 className='bg-white text-neutral-800 border rounded-lg border-neutral-200 font-semibold px-4 py-3'>{level}</h2>
                </div>

                <p className='font-semibold'>By {instructor.name}</p>
            </div>


            <div className='border rounded-lg p-6 mt-4'>
                <h1 className='text-[24px] font-bold'>Curriculum</h1>
                <hr className='my-5' />
                <div className='flex justify-between items-center gap-4'>
                    {
                        curriculum.map((item, index) =>
                            <div key={index} className='flex gap-2 flex-col'>
                                <h1 className='text-[42px] font-bold'>0{index + 1}</h1>
                                <p>{item}</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;