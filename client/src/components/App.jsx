import Student from './Student';
import StudentForm from './StudentForm'
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import { useRef, useEffect, useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import ErrorPage from '../reusable/errorPage';
function App(){
   const navBarRef = useRef(null);

   const [mTop, setMTop] = useState(0);
    const getNavHeight = () => {
        return navBarRef.current.clientHeight;
    }
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Rootables mTop={mTop} />}>
                <Route index element={<Student />}></Route>
                <Route path='/add' element={<StudentForm />}></Route>
                <Route path="/" element={<ErrorPage />}></Route>
            </Route>
        )
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