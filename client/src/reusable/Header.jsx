import { Plus, LucideArrowDownSquare } from 'lucide-react'
import Button from './Button';

function Header({title, filterBy}){
    const classes = "focus:outline-none focus:ring focus:ring-main ";
    return(
        <div className="flex items-center justify-between w-full p-3 pb-1 me-5 mb-2">
            <div className="text-2xl font-bold tracking-wide">{title}</div>
           <div className='flex gap-3'>
            <label className="text-base tracking-wide relative">Filter By: 
                <select className="ms-2 text-base font-normal py-1.5 ps-3 pe-9 rounded cursor-pointer border-solid border-2 appearance-none">
                        {filterBy.map((filt, i) => {
                            return <option key={i}>{filt}</option>
                        })}
                    </select>
                    <LucideArrowDownSquare size={18} color="grey" className="absolute right-2 top-[28%]" />
                   
            </label>
            <Button text="Add" icon={<Plus size={18} />} />
            {/* <button className="ms-2 flex gap-1 items-center bg-main py-1.5 px-4 text-white text-sm tracking-wide font-semibold border-solid border-2 border-main rounded-full">Add<Plus size={20} /></button> */}
           </div>
        </div>
    );
}

export default Header