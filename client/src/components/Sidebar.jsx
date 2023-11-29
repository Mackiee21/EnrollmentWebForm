import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck, Home} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar(){
    return(
        <div className="w-1/6 text-xsm bg-gray-100 sticky left-0 top-0 overflow-y-auto overflow-x-hidden">
               <nav className="py-2 px-2 sidebar">
                    <ul className="tracking-wide text-sm font-semibold text-gray-600">
                        <li>
                            <NavLink to="/records/students"
                            className={({isActive}) => [
                                isActive ? "active": ""
                            ].join(" ")
                            }>
                                <UserPlusIcon size={17} />
                                Students
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/records/subjects" 
                            className={({isActive}) => [
                                isActive ? "active": ""
                            ].join(" ")
                            }>
                                <BookIcon size={17}  />
                                Subjects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => [
                                isActive ? "active": ""
                            ].join(" ")
                            } to="/development">
                                <SearchIcon size={18} />
                                Prerequisites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => [
                                isActive ? "active": ""
                            ].join(" ")
                            } to="/development">
                                <Calendar size={17} />
                                Schedules
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            className={({isActive}) => [
                                isActive ? "active": ""
                            ].join(" ")
                            } to="/development">
                                <FolderCheck size={17} />
                                Enrollment
                            </NavLink>
                        </li>
                    </ul>
               </nav>
        </div>
    );
}

export default Sidebar