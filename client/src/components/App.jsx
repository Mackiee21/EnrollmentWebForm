import Student from './Student/Student';
import StudentForm from './Student/StudentForm'
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
                        element: <Home />
                    },
                    {
                        path: 'students',
                        element: <Student />,
                    
                    },
                    {
                        path: 'students/add',
                        element: <StudentForm />
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
            <div className='overflow-y-auto w-full'>
                <Outlet />
            </div>
        </div>
    );
}
export default App