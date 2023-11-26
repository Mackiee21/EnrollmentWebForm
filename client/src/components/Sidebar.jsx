import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck, Home} from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar({ mTop }){
    return(
        <div style={{minHeight: `calc(100dvh - ${mTop}px)` }} className="w-1/6 text-xsm bg-zinc-50 fixed left-0 overflow-y-auto overflow-x-hidden">
               <nav className="py-2 px-2">
                    <ul className="tracking-wider">
                    <li className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded">
                            <Home size={18} />
                            <Link to="/">Home</Link>
                        </li>
                        <li className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded">
                            <UserPlusIcon size={18} />
                            <Link to="/students">Students</Link>
                        </li>
                        <li className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded-md">
                            <BookIcon size={18}  />
                            <Link to="/subjects">Subjects</Link>
                        </li>
                        <li className="font-medium flex items-start gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded">
                            <SearchIcon size={20} />
                            <Link to="search-prerequisites">Search</Link>
                        </li>
                        <li className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded">
                            <Calendar size={18} />
                            <Link>Schedule</Link>
                        </li>
                        <li className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 py-2.5 px-2 rounded">
                            <FolderCheck size={18} />
                            <Link>Enrollment</Link>
                        </li>
                    </ul>
               </nav>
        </div>
    );
}

export default Sidebar