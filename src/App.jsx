import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';

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
          path: '/courses/:id',
          element: <div>CourseID</div>
        },
        {
          path: '/login',
          element: <div>Login</div>
        },
        {
          path: '/signup',
          element: <div>Sign Up</div>
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
