import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck} from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar({ mTop }){
    return(
        <div style={{minHeight: `calc(100dvh - ${mTop}px)` }} className="w-1/6 text-xsm bg-zinc-50 fixed left-0 overflow-y-auto overflow-x-hidden">
               <nav className="py-4 px-5">
                    <ul className="tracking-wide">
                        <li className="mb-4 font-medium flex items-center gap-2">
                            <UserPlusIcon size={18} color="#077acc" />
                            <Link to="/">Students</Link>
                        </li>
                        <li className="mb-4 font-medium flex items-center gap-2">
                            <BookIcon size={18} color="#077acc" />
                            <Link to="/subjects">Subjects</Link>
                        </li>
                        <li className="mb-4 font-medium flex items-start gap-2">
                            <SearchIcon size={20} color="#077acc" />
                            <Link to="search-prerequisites">Search Subject Prerequisite</Link>
                        </li>
                        <li className="mb-4 font-medium flex items-center gap-2">
                            <Calendar size={18} color="#077acc" />
                            <a>Subject Schedule</a>
                        </li>
                        <li className="mb-4 font-medium flex items-center gap-2">
                            <FolderCheck size={18} color="#077acc" />
                            <a>Enrollment</a>
                        </li>
                    </ul>
               </nav>
        </div>
    );
}

export default Sidebar