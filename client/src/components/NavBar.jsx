import { forwardRef } from 'react';
import { LogOut } from 'lucide-react'
import Button from '../reusable/Button';

function NavBar(_, ref){
    const classes = "shadow-md shadow-header/50 bg-header text-white";
    return(
        <div ref={ref} className="flex align-center justify-between py-3 px-5 sticky top-0 z-50 
        border-b-2">
            <div className="hero font-bold text-xl uppercase tracking-widest">
                Mackiee
            </div>
           <nav className='nav-header flex gap-2 items-center'>
                <ul className="flex text-sm font-semibold gap-5">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
                <Button text="Logout" icon={<LogOut size={18} />} />
                {/* <button className='rounded-full py-2 px-4 bg-main text-white font-semibold text-sm tracking-wide'>Logout</button> */}
           </nav>
        </div>
    );
}

export default forwardRef(NavBar)