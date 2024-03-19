import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import SingleCourse from './SingleCourse/SingleCourse';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://atc-server-seven.vercel.app/courses')
          },
          element: <Home></Home>
        },
        {
          path: '/courses',
          loader: async () => {
            return fetch('https://atc-server-seven.vercel.app/courses')
          },
          element: <Courses></Courses>
        },
        {
          path: '/courses/:pid',
          loader: async ({ params }) => {
            return fetch(`https://atc-server-seven.vercel.app/courses/${params.pid}`)
          },
          element: <SingleCourse></SingleCourse>
        },
        {
          path: '/cart',
          loader: async () => {
            return fetch('https://atc-server-seven.vercel.app/courses')
          },
          element: <Cart></Cart>
        },
        {
          path: '/checkout',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>

        },
        {
          path: '/profile',
          element: <div>Profile</div>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/about',
          element: <div>About</div>
        },
        {
          path: '/contact',
          element: <div>Contact</div>
        }
      ]
    }
  ]);


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
