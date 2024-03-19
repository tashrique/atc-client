import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';

const Courses = () => {


    const courses = useLoaderData();

    return (
        <div className='bg-[#dededebf] py-24'>
            <div className='courses-container w-[70%] mx-auto'>

                {/* Top Head */}
                <div className="grid grid-cols-2 gap-24 mb-24">
                    <h1 className='text-[46px] leading-[60px]'>Online Courses on Design and Development</h1>
                    <p>Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.</p>
                </div>

                {/* Courses */}
                <div className='flex flex-col gap-8'>
                    {
                        courses.map(course => <CourseDetails
                            key={course.id}
                            course={course}
                        ></CourseDetails>)
                    }
                </div>








            </div>
        </div>
    );
};

export default Courses;