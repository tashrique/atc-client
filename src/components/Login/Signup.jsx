import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {

    const { user, createAccount, googleLogin, emailVerification } = useContext(AuthContext);
    const notify = () => toast("Sign Up Successful!");


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/'


    const [error, setError] = useState(null);

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user)
                notify();
                navigate('/');
            })
            .catch((error) => {
                setError(error.message);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        createAccount(email, password)
            .then((result) => {

                const user = result.user;
                console.log(user)


                // Check if email is verified
                if (!user.emailVerified) {
                    emailVerification(); // Send verification email
                    setError('Please verify your email address.');
                    return; // Prevent further actions or navigation
                }

                form.reset();
                setError(null);
                notify();
                navigate('/');


                result.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        console.log('Profile Updated')
                    })
                    .catch((error) => {
                        setError(error.message);
                    })
            })
            .catch((error) => {
                setError(error.message);
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
                                <h1 className='text-[32px] font-bold'>Sign Up</h1>
                                <p>Create an account to unlock exclusive features.</p>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" name="name" placeholder="Enter your Name" className="input input-bordered" required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your Email" className="input input-bordered" required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required onChange={(e) => setPassword(e.target.value)} />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="Retype your Password" className="input input-bordered" required onChange={(e) => setConfirm(e.target.value)} onPaste={(e) => e.preventDefault()} />
                            </div>

                            <div className="form-control mt-2">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input type="checkbox" className="checkbox w-5 h-5 rounded-md" required />
                                    <span className="label-text">I agree to the <Link to={'/about'}>Terms and Conditions</Link> </span>
                                </label>
                            </div>
                            <div className="form-control mt-6 flex gap-3 flex-col">
                                <button className="btn bg-amber-500 hover:bg-amber-400" disabled={!name || !email || !password || !confirm || password !== confirm}>Sign Up</button>
                                <button className="btn bg-gray-200" onClick={handleGoogleLogin}><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-6 h-6" />Sign Up with Google</button>
                                <p className='mt-4 text-red-500'>{error}</p>
                                <p className='mt-4'>Already a member? <Link to={'/login'} className='text-amber-500'>Login here</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;