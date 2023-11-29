import { Plus, LucideArrowDownSquare, UserPlus, RefreshCwIcon } from 'lucide-react'
import Button from './Button';
import { Link } from 'react-router-dom'

function Header({title, filterBy, handleFilter, handleRefresh, fetching}){
    const classes = "focus:outline-none focus:ring focus:ring-main ";
    return(
        <div className="flex items-center justify-between w-full pt-3 ps-2 pe-3 pb-1 me-5 mb-1">
            <div className="text-base font-extrabold bg-gradient-to-r from-main/80 to-main/95 text-white py-2 px-4 rounded tracking-wide flex items-center gap-3">
                <div className='flex items-center gap-1'>
                    <UserPlus size={18} />
                    {title}
                </div>
            </div>
           <div className='flex gap-3'>
           <button disabled={fetching} onClick={handleRefresh} className='flex items-center focus:outline-none hover:text-main text-sm font-bold text-gray-600 gap-1 cursor-pointer'>
                    <RefreshCwIcon size={14} />
                    Refresh
                </button>
            <label className="text-sm tracking-wide mb-0 font-bold text-gray-600">Filter : 
                <select onChange={(e) => handleFilter(e.target.value)} className="from-select ms-2 border-2 text-xsm font-normal py-1 ps-3 pe-9 rounded cursor-pointer focus:outline-none focus:bg-outline-main">
                        {filterBy.map((filt, i) => {
                            return <option key={i}>{filt}</option>
                        })}
                    </select>               
            </label>
            
            <Link to={'/records/students/add'}><Button text="Add" className="bg-main" icon={<Plus size={18} />} /></Link>
            {/* <button className="ms-2 flex gap-1 items-center bg-main py-1.5 px-4 text-white text-sm tracking-wide font-semibold border-solid border-2 border-main rounded-full">Add<Plus size={20} /></button> */}
           </div>
        </div>
    );
}

export default Header