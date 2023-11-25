import { Plus, LucideArrowDownSquare, UserCheck, RefreshCwIcon } from 'lucide-react'
import Button from './Button';
import { Link } from 'react-router-dom'

function Header({title, filterBy, handleRefresh, fetching}){
    const classes = "focus:outline-none focus:ring focus:ring-main ";
    return(
        <div className="flex items-center justify-between w-full p-3 pb-1 me-5 mb-2">
            <div className="text-base font-bold tracking-wide flex items-center gap-3">
                <div className='flex items-center gap-1'>
                    <UserCheck size={18} />
                    {title}
                </div>
            </div>
           <div className='flex gap-3'>
           <button disabled={fetching} onClick={handleRefresh} className='flex items-center focus:outline-none hover:text-main text-base gap-1 cursor-pointer'>
                    <RefreshCwIcon size={16} />
                    Refresh
                </button>
            <label className="text-base tracking-wide">Filter By: 
                <select className="from-select ms-2 border text-base font-normal py-1.5 ps-3 pe-9 rounded cursor-pointer focus:outline-none focus:bg-outline-main">
                        {filterBy.map((filt, i) => {
                            return <option key={i}>{filt}</option>
                        })}
                    </select>               
            </label>
            
            <Link to={'/students/add'}><Button text="Add" className="bg-main" icon={<Plus size={18} />} /></Link>
            {/* <button className="ms-2 flex gap-1 items-center bg-main py-1.5 px-4 text-white text-sm tracking-wide font-semibold border-solid border-2 border-main rounded-full">Add<Plus size={20} /></button> */}
           </div>
        </div>
    );
}

export default Header