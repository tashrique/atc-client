import React from 'react';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/UserContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading, emailVerification } = useContext(AuthContext);
    const location = useLocation();

    if (!user || !user.emailVerified) {
        return (
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center bg-green-400 p-10 w-[100%]'>
                    Verify your email address to access this page. Check your email for a verification link.
                </div>
                <button onClick={() => {
                    emailVerification(user.email)
                }}
                    className=''>Send Verification Email</button>
            </div>

        )

    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    )

};

export default PrivateRoute;