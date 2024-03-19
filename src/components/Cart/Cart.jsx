import React, { useEffect } from 'react';
import { useContext } from 'react';
import { CartInfoContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, clearCart } = useContext(CartInfoContext);
    const { user } = useContext(AuthContext);
    const courses = useLoaderData();


    let cartItems = []

    for (const courseId of cart) {
        const course = courses.find(course => course.id === courseId)
        cartItems.push(course)
    }

    console.log(cartItems)


    return (
        <div className='bg-[#dededebf] py-24'>
            <div className='home-container w-[90%] mx-auto'>

                <div className='grid grid-cols-4 gap-12'>

                    <div className='col-span-3'>
                        <h1 className='text-center text-[32px] my-12'>
                            {user?.displayName ? `${user.displayName}'s Cart` : 'Cart'}
                        </h1>

                        {
                            cartItems.map(course => <CartItem
                                key={course.id}
                                course={course}
                            ></CartItem>)
                        }
                    </div>


                    <div className="col-span-1 bg-white rounded-lg p-8 fixed right-10">
                        <h1 className='text-center text-[32px]'>Cart Summary</h1>

                        <div className='grid grid-cols-2 my-10 mx-4 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[18px]'>Total Items:</h1>
                                <h1 className='text-[18px]'>Cart Total:</h1>
                                <h1 className='text-[18px]'>Tax:</h1>
                                <hr />
                                <h1 className='text-[18px]'>Grand Total</h1>

                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-[18px]'>{cartItems.length}</h1>
                                <h1 className='text-[18px]'>${cartItems.reduce((acc, course) => acc + course.price, 0)}</h1>
                                <h1 className='text-[18px]'>${cartItems.reduce((acc, course) => acc + course.price * 0.065, 0)}</h1>
                                <hr />
                                <h1 className='text-[18px] text-amber-500'>${cartItems.reduce((acc, course) => acc + course.price * 1.065, 0)}</h1>
                            </div>

                            <Link to="/checkout">
                                <button className='bg-amber-500 text-white rounded-md py-3 px-6 mt-6'>Checkout</button>
                            </Link>
                            <Link to="/courses">
                                <button className='bg-gray-300 text-neutral-800 rounded-md py-3 px-6 mt-6'>More Courses</button>
                            </Link>






                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default Cart;