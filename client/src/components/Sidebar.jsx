import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck, Home} from 'lucide-react'
import { Link } from 'react-router-dom'

function Sidebar({ mTop }){
    return(
        <div style={{minHeight: `calc(100dvh - ${mTop}px)` }} className="w-1/6 text-xsm bg-gray-100 fixed left-0 overflow-y-auto overflow-x-hidden">
               <nav className="py-2 px-2">
                    <ul className="tracking-wide text-xsm">
                        <li> {/**wrapper nalng ni hahahhah */}
                            <Link className='font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded w-full' to="/development">
                                <Home size={17} />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded' to="/">
                                <UserPlusIcon size={17} />
                                Students
                            </Link>
                        </li>
                        <li>
                            <Link className='font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded-md' to="/development">
                                <BookIcon size={17}  />
                                Subjects
                            </Link>
                        </li>
                        <li>
                            <Link className="font-medium flex items-start gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
                                <SearchIcon size={18} />
                                Prerequisites
                            </Link>
                        </li>
                        <li>
                            <Link className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
                                <Calendar size={17} />
                                Schedules
                            </Link>
                        </li>
                        <li>
                            <Link className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
                                <FolderCheck size={17} />
                                Enrollment
                            </Link>
                        </li>
                    </ul>
               </nav>
        </div>
    );
}

export default Sidebar