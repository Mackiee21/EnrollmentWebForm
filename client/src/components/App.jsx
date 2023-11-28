import Student from './Student/Student';
import StudentContainer from './Student/StudentContainer'
import AddStudent from './Student/AddStudent'
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Home from './Home'
import RedirectUser from './RedirectUser'
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
                element: <MainRoutes mTop={mTop} navBarRef={navBarRef} />,
                errorElement: <ErrorPage />,
                children:[
                    {
                        index: true,
                        element: <Home mTop={mTop} />

                    },
                    {
                        path: "/records",
                        element: <SidebarRoutes mTop={mTop} />,
                        children:[
                            {
                                index: true,
                                element: <RedirectUser /> //hahahahaha looya, mao rana ako nahuhunaan na option mak ahahhahah
                            },
                            {
                                path: "students",
                                element: <StudentRoutes />,
                                children:[
                                    {
                                        index: true,
                                        element: <Student />
                                    },
                                    {
                                        path: "add",
                                        element: <AddStudent />
                                    }
                                ]
                            
                            },
                            {
                                path: "subjects",
                                element: <Subject />
                            }
                        ]
                    },
                ]
            }
        ]
    )

    useEffect(() => {
       setMTop(getNavHeight());
    }, []);

   return(
    <div className='m-0 p-0 box-border bg-gray-50 h-screen max-h-screen overflow-x-hidden overflow-y-auto'>
        <RouterProvider router={router} />
    </div>
   );
}
const MainRoutes = ({mTop, navBarRef}) => {
    return(
        <div>
             <NavBar ref={navBarRef} />
            <div style={{height: `calc(100dvh - ${mTop + 4}px)`}}>
                <Outlet />
            </div>
        </div>
    );
}
const  SidebarRoutes = ({ mTop }) => {
    return(
        <div className="flex ps-content"> 
            <Sidebar mTop={mTop} />
            <div className='w-full  bg-zinc-50'>
                <Outlet />
            </div>
        </div>
    );
}

const StudentRoutes =() => {
    return(
        <div>
            <StudentContainer />
            <Outlet />
        </div>
    );
}
export default App