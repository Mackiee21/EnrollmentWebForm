import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck, Home} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar(){
    return(
        <div className="w-1/6 text-xsm bg-gray-100 sticky left-0 top-0 overflow-y-auto overflow-x-hidden">
               <nav className="py-2 px-2 sidebar">
                    <ul className="tracking-wide text-sm">
                        <li>
                            <NavLink to="/records/students" style={({isActive}) => {
                                return{
                                    backgroundColor: isActive ? "#077acc": "",
                                    color: isActive ? "white" : ""
                                }
                            }} 
                            className='font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded'>
                                <UserPlusIcon size={17} />
                                Students
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/records/subjects" style={({isActive}) => {
                                return{
                                    backgroundColor: isActive ? "#077acc": "",
                                    color: isActive ? "white" : ""
                                }
                            }} 
                            className='font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded-md'>
                                <BookIcon size={17}  />
                                Subjects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={({isActive}) => {
                                return{
                                    backgroundColor: isActive ? "#077acc": "",
                                    color: isActive ? "white" : ""
                                }
                            }} 
                            className="font-medium flex items-start gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
                                <SearchIcon size={18} />
                                Prerequisites
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={({isActive}) => {
                                return{
                                    backgroundColor: isActive ? "#077acc": "",
                                    color: isActive ? "white" : ""
                                }
                            }} 
                            className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
                                <Calendar size={17} />
                                Schedules
                            </NavLink>
                        </li>
                        <li>
                            <NavLink style={({isActive}) => {
                                return{
                                    backgroundColor: isActive ? "#077acc": "",
                                    color: isActive ? "white" : ""
                                }
                            }} 
                            className="font-medium flex items-center gap-2 lg:hover:bg-neutral-200 hover:text-main py-2.5 px-2 rounded" to="/development">
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