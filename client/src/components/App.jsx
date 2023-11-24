import Student from './Student';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import axios from 'axios';
import { useRef, useEffect, useState } from 'react';
function App(){
   const navBarRef = useRef(null);

   const [mTop, setMTop] = useState(0);
    const getNavHeight = () => {
        return navBarRef.current.clientHeight;
    }
    useEffect(() => {
       setMTop(getNavHeight());
    }, []);

   return(
    <div className='m-0 p-0 box-border bg-gray-50 h-screen max-h-screen'>
        <NavBar ref={navBarRef} />
        <div className="flex ps-content">
            <Sidebar mTop={mTop} />
            <div className='overflow-y-auto w-full'>
                <Student />
            </div>
        </div>
    </div>
   );
}

export default App