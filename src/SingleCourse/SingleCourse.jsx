import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PlayIcon, RectangleStackIcon, UserIcon, ClockIcon, TrophyIcon } from '@heroicons/react/24/solid'
import CourseSidebar from './CourseSidebar';


const SingleCourse = () => {

    const course = useLoaderData();

    const { id, name, excerpt, welcome, category, level, duration, instructor, images, curriculum, price, discount_percentage, rating, reviews } = course;


    const handleVideoPlay = () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    return (
        <div className='bg-[#dededebf] py-24 grid grid-cols-8'>
            <div className='courses-container col-span-6 mx-auto w-[90%]'>

                {/* Top Head */}
                <div className="grid grid-cols-2 gap-24 mb-24 items-center">
                    <h1 className='text-[46px] leading-[60px]'>{name}</h1>
                    <p>{welcome}</p>
                </div>

                {/* Course Video */}
                <div className='rounded-xl flex justify-center items-center cursor-pointer' onClick={handleVideoPlay}>
                    <img src={images.thumbnail} alt={name} className='rounded-xl h-[500px] w-full object-cover' />
                    <PlayIcon className="h-16 w-16 text-white bg-[#ffffff30] py-3 pr-1 pl-2 rounded-full absolute hover:text-[#ffffff] ease-in-out duration-150 hover:bg-amber-500 cursor-pointer" />

                </div>

                {/* Course Details */}
                <div>
                    <div className='grid grid-cols-4 gap-4 my-14'>
                        <div className="p-12 rounded-xl bg-white flex flex-col justify-center items-start hover:bg-amber-500 ease-in-out duration-300">
                            <RectangleStackIcon className="h-12 w-12 text-neutral-800 mb-4" />
                            <h3 className='text-[24px] leading-[36px] font-bold'>Category</h3>
                            <p>{category}</p>
                        </div>
                        <div className="p-12 rounded-xl bg-white flex flex-col justify-center items-start  hover:bg-amber-500 ease-in-out duration-300">
                            <TrophyIcon className="h-12 w-12 text-neutral-800 mb-4" />
                            <h3 className='text-[24px] leading-[36px] font-bold'>Level</h3>
                            <p>{level}</p>
                        </div>
                        <div className="p-12 rounded-xl bg-white flex flex-col justify-center items-start  hover:bg-amber-500 ease-in-out duration-300">
                            <ClockIcon className="h-12 w-12 text-neutral-800 mb-4" />
                            <h3 className='text-[24px] leading-[36px] font-bold'>Duration</h3>
                            <p>{duration}</p>
                        </div>
                        <div className="p-12 rounded-xl bg-white flex flex-col justify-center items-start  hover:bg-amber-500 ease-in-out duration-300">
                            <UserIcon className="h-12 w-12 text-neutral-800 mb-4" />
                            <h3 className='text-[24px] leading-[36px] font-bold'>Instructor</h3>
                            <p>{instructor.name}</p>
                        </div>

                    </div>
                </div>

                {/* Course Curriculum */}
                <div className='my-40'>
                    <h1 className='text-[32px] text-center'>Course Curriculum</h1>
                    <div className='grid grid-cols-2 gap-4 my-14'>
                        {
                            curriculum.map((curriculum, index) => <div key={index} className="p-12 rounded-xl bg-white flex flex-col justify-center items-start hover:bg-amber-500 ease-in-out duration-300">
                                <h3 className='text-[24px] leading-[36px] font-bold'></h3>
                                <h3 className='text-[24px] leading-[36px] font-bold'>0{index + 1}. {curriculum}</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quae, eveniet doloremque rem voluptates omnis reiciendis voluptatem nesciunt pariatur soluta doloribus quaerat amet mollitia modi nulla recusandae cupiditate, totam eum.</p>
                            </div>)
                        }
                    </div>
                </div>

                {/* See all courses */}
                <div className='flex justify-center items-center gap-5'>
                    <Link to="/courses"><button className="bg-gray-300 text-neutral-800 rounded-md py-3 px-6 hover:bg-amber-400">View All Courses</button></Link>
                    <Link to="/checkout"><button className="bg-amber-500 text-white rounded-md py-3 px-6 hover:bg-amber-400">Enroll in This Course</button></Link>
                </div>

            </div>

            <div className='col-span-2'>
                <CourseSidebar course={course}></CourseSidebar>
            </div>
        </div>
    );
};

export default SingleCourse;