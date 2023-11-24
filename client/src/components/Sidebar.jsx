import {UserPlusIcon, BookIcon, SearchIcon, Calendar, FolderCheck} from 'lucide-react'

function Sidebar({ mTop }){
    return(
        <div style={{minHeight: `calc(100dvh - ${mTop}px)` }} className="w-1/6 bg-zinc-100 fixed left-0">
               <nav className="py-2 px-3">
                    <ul className="">
                        <li className="mb-3 font-medium flex items-center gap-2">
                            <UserPlusIcon size={19} />
                            <a>Students</a>
                        </li>
                        <li className="mb-3 font-medium flex items-center gap-2">
                            <BookIcon size={19} />
                            <a>Subjects</a>
                        </li>
                        <li className="mb-3 font-medium flex items-start gap-2">
                            <SearchIcon size={20} className="" />
                            <a>Search Subject Prerequisite</a>
                        </li>
                        <li className="mb-3 font-medium flex items-center gap-2">
                            <Calendar size={18} />
                            <a>Subject Schedule</a>
                        </li>
                        <li className="mb-3 font-medium flex items-center gap-2">
                            <FolderCheck size={18} />
                            <a>Enrollment</a>
                        </li>
                    </ul>
               </nav>
        </div>
    );
}

export default Sidebar