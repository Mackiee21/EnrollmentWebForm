import Student from './Student/Student';
import AddStudent from './Student/AddStudent'
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Home from './Home'
import { useRef, useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import ErrorPage from '../reusable/errorPage';
import Subject from './Subject/Subject';
function App(){
   const navBarRef = useRef(null);

   const [mTop, setMTop] = useState(0);
    const getNavHeight = () => {
        return navBarRef.current.clientHeight;
    }
    const router = createBrowserRouter([
            {
                path: '/',
                element: <Rootables mTop={mTop} />,
                errorElement: <ErrorPage />,
                children:[
                    {
                        index: true,
                        element: <Student />,
                    
                    },
                    {
                        path: 'students/add',
                        element: <AddStudent />
                    },
                    {
                        path: 'subjects',
                        element: <Subject />
                    }
                ]
            }
        ]
    )

    useEffect(() => {
       setMTop(getNavHeight());
    }, []);

   return(
    <div className='m-0 p-0 box-border bg-gray-50 h-screen max-h-screen'>
        <NavBar ref={navBarRef} />
        <RouterProvider router={router} />
    </div>
   );
}

const  Rootables = ({ mTop }) => {
    return(
        <div className="flex ps-content"> 
            <Sidebar mTop={mTop} />
            <div className='overflow-y-auto overflow-x-hidden w-full bg-zinc-50'>
                <Outlet />
            </div>
        </div>
    );
}
export default App