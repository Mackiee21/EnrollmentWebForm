
import { NavLink } from 'react-router-dom'
import { LogOut, Home, PhoneIcon, Database } from 'lucide-react'
import Button from '../reusable/Button';

function NavBar(){
    const classes = "shadow-md shadow-header/50 bg-header text-white";
    return(
        <div className="flex align-center bg-gray-100 justify-between py-2 px-5 sticky top-0 z-50 
        border-b-2">
            <div className="font-extrabold text-lg text-main tracking-wide flex items-center gap-2">
                <div className='w-10 rounded-full border-2 border-gray-300'>
                    <img className='w-full h-auto rounded-full object-cover object-center' src="https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/299978409_2118215458348424_4457052968317549199_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIz21xspMn7cvotyf_NoCBcllEffGsjptyWUR98ayOm8lvkY5mjT7YVJSBjbAcw7dmiHrsXUfwhyApdD2udlB0&_nc_ohc=Nt6qWJNzb10AX-Q4vFY&_nc_ht=scontent.fceb2-1.fna&oh=00_AfDNybKOp4g8msi48rnSVqIj6APrZH67lxCUsitH1Oaaew&oe=656595FF" />
                </div>
               <a href='https://github.com/Mackiee21' target="_blank">Mackiee</a>  
            </div>
           <nav className='nav-header flex gap-6 items-center'>
                <ul className="flex text-sm gap-5">
                    <NavLink className={({isActive, isPending, isTransitioning}) => [
                        isActive ? "active" : "",
                        isTransitioning ? "transition" : ""
                        ].join(" ")
                    } 
                    to="/">
                        <Home size={16} />
                        Home
                    </NavLink>
                    <NavLink className={({isActive}) => [
                        isActive ? "active" : ""
                        ].join(" ")
                    } 
                    to="/records">
                        <Database size={16} />
                        Records
                    </NavLink>
                    <NavLink className={({isActive}) => [
                        isActive ? "active" : ""
                        ].join(" ")
                    } 
                     to="/contact" >
                        <PhoneIcon size={16} />
                        Contact Us
                    </NavLink>
                </ul>
                <Button text="Logout" className="bg-main" icon={<LogOut size={18} />} />
                {/* <button className='rounded-full py-2 px-4 bg-main text-white font-semibold text-sm tracking-wide'>Logout</button> */}
           </nav>
        </div>
    );
}

export default NavBar