import Student from './Student/Student';
import StudentContainer from './Student/StudentContainer'
import AddStudent from './Student/AddStudent'
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Home from './Home'
import RedirectUser from './RedirectUser'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import ErrorPage from '../reusable/errorPage';
import Subject from './Subject/Subject';
import Contact from './Contact';
function App(){
    const router = createBrowserRouter([
            {
                path: '/',
                element: <MainRoutes  />,
                errorElement: <ErrorPage />,
                children:[
                    {
                        index: true,
                        element: <Home />

                    },
                    {
                        path: "/records",
                        element: <SidebarRoutes />,
                        errorElement: <ErrorPage />,
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
                    {
                        path: '/contact',
                        element: <Contact />
                    },
                ]
            }
        ]
    )
   return(
    <div className='m-0 p-0 box-border bg-gray-50 h-screen max-h-screen'>
            <RouterProvider router={router} />
    </div>
   );
}
const MainRoutes = () => {
    return(
        <div className='flex flex-col w-full h-screen'>
             <div className=''>
                <NavBar />
             </div>
             {/**flex-1 means take the reaming space sa screen thank you */}
            <div className='flex-1  w-full overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    );
}
const  SidebarRoutes = () => {
    return(
        <div className="flex w-full h-full"> 
            <Sidebar />
            <div className='w-full flex-1 bg-zinc-50 overflow-y-auto' style={{scrollbarGutter: "stable"}}>
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
//and more routes to come hahahahh
export default App