import React from 'react';
import { BoltIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';


const Home = () => {


    const courses = useLoaderData();

    console.log(courses)
    return (
        <div className='bg-[#dededebf] py-24'>
            <div className='home-container w-[70%] mx-auto'>

                {/* Unlock your Creative Potential */}
                <div className="flex-col justify-start items-center gap-5 flex">


                    <div className=" bg-neutral-50 rounded-xl flex justify-center items-center gap-6 border border-zinc-100 py-3 px-6">
                        <BoltIcon className="h-12 w-12 bg-amber-100 p-2 rounded-md" />
                        <span className="text-amber-500 text-5xl font-semibold font-['Be Vietnam Pro'] leading-[72px]">Unlock</span><span className="text-zinc-900 text-5xl font-semibold font-['Be Vietnam Pro'] leading-[72px]"> Your Creative Potential</span>
                    </div>
                    <div className="self-stretch h-[94px] flex-col justify-start items-center gap-2.5 flex">
                        <div className="self-stretch text-center text-neutral-800 text-[38px] font-medium font-['Be Vietnam Pro'] leading-[57px]">with Online Design and Development Courses.</div>
                        <div className="self-stretch text-center text-neutral-800 text-lg font-normal font-['Be Vietnam Pro'] leading-[27px]">Learn from Industry Experts and Enhance Your Skills.</div>
                    </div>

                    <div className="flex justify-center items-center gap-5">

                        <div className="flex justify-center items-center gap-3">
                            <Link to="/courses"><button className="bg-amber-500 text-white rounded-md py-3 px-6 hover:bg-amber-400">Explore Courses</button></Link>
                            <Link to="/about"><button className="bg-neutral-50 text-neutral-800 rounded-md py-3 px-6">Learn More</button></Link>
                        </div>
                    </div>
                </div>



                {/* Courses Slider */}
                <div className='my-60'>

                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col w-[60%] gap-2'>
                            <h1>Our Courses</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        </div>
                        <Link to="/courses"><button className="bg-neutral-100 text-neutral-800 rounded-md py-3 px-6 hover:bg-amber-400">View All</button></Link>
                    </div>

                    {/* Courses Cards */}
                    <div className="grid grid-cols-2 gap-12 my-14 w-full">
                        {
                            courses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;