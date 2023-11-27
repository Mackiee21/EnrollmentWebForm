import { forwardRef } from 'react';
import { Link } from 'react-router-dom'
import { LogOut, User } from 'lucide-react'
import Button from '../reusable/Button';

function NavBar(_, ref){
    const classes = "shadow-md shadow-header/50 bg-header text-white";
    return(
        <div ref={ref} className="flex align-center bg-gray-100 justify-between py-2 px-5 sticky top-0 z-50 
        border-b-2">
            <div className="font-extrabold text-lg text-main tracking-wide flex items-center gap-1">
                <div className='w-10 rounded-full border-2 border-gray-300'>
                    <img className='w-full h-auto rounded-full object-cover object-center' src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/299978409_2118215458348424_4457052968317549199_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIz21xspMn7cvotyf_NoCBcllEffGsjptyWUR98ayOm8lvkY5mjT7YVJSBjbAcw7dmiHrsXUfwhyApdD2udlB0&_nc_ohc=Nt6qWJNzb10AX-Q4vFY&_nc_ht=scontent.fceb2-1.fna&oh=00_AfDNybKOp4g8msi48rnSVqIj6APrZH67lxCUsitH1Oaaew&oe=656595FF" />
                </div>
               <a href='https://github.com/Mackiee21' target="_blank">@Mackiee</a>  
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