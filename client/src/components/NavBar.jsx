import { forwardRef } from 'react';
import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import Button from '../reusable/Button';

function NavBar(_, ref){
    const classes = "shadow-md shadow-header/50 bg-header text-white";
    return(
        <div ref={ref} className="flex align-center bg-gray-100 justify-between py-3 px-5 sticky top-0 z-50 
        border-b-2">
            <div className="font-bold text-xl uppercase text-main tracking-wide flex items-center gap-1">
                <User size={22}  />
                Mackiee
            </div>
           <nav className='nav-header flex gap-2 items-center'>
                <ul className="flex text-sm font-medium gap-5">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
                <Button text="Logout" className="bg-main" icon={<LogOut size={18} />} />
                {/* <button className='rounded-full py-2 px-4 bg-main text-white font-semibold text-sm tracking-wide'>Logout</button> */}
           </nav>
        </div>
    );
}

export default forwardRef(NavBar)