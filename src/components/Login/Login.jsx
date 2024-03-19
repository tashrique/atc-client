import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    const { user, login, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSubmit = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                setError(error.message)
            })

    }


    return (
        <div>
            <div className="hero bg-[#dededebf]">
                <div className="hero-content flex-col lg:flex-row my-[120px]">
                    <div className="text-center lg:text-left mr-16">
                        <h1 className="text-5xl font-bold">Students Testimonials</h1>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>

                        <div className="rounded-lg bg-white p-8 my-14">
                            <p>The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</p>
                            <div className="flex justify-between items-center gap-4 mt-6">
                                <div className="flex justify-start items-center gap-4">
                                    <img src="https://www.tashrique.com/wp-content/uploads/2022/06/IMG-20200306-WA0011.jpg" className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <h2 className="text-lg font-bold">Komor Uddin</h2>
                                        <p className="text-neutral-500">Student, Scholarshome, Sylhet</p>
                                    </div>
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                    <AcademicCapIcon className="w-8 h-8 text-amber-500" />
                                    <p className="text-amber-500 font-bold">Web Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body " onSubmit={handleSubmit}>

                            <div className='flex flex-col justify-center items-center text-center gap-4'>
                                <h1 className='text-[32px] font-bold'>Login</h1>
                                <p>Welcome back! Please log in to access your account.</p>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 flex gap-3 flex-col">
                                <button className="btn bg-amber-500 hover:bg-amber-400" name="submit">Login</button>
                                <button className="btn bg-gray-200" onClick={handleGoogleSubmit}><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6 h-6" />Login with Google</button>
                                <p className='text-red-500'>{error}</p>
                                <p className='mt-4'>Not a member? <Link to={'/signup'} className='text-amber-500'>Sign Up here</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;