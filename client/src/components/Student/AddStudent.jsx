import { Link } from 'react-router-dom'
import Button from '../../reusable/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react'

function AddStudent(){
    return(
        <div className="flex justify-center">
            <form className="w-9/12 mt-3 tracking-wide border border-gray-300 rounded-md py-5 px-7 shadow shadow-zinc-300">
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-3'>
                <div className="flex flex-col">
                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">ID Number</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">Course</label>
                    <select className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5">
                        <option value="bsit">BSIT</option>
                        <option value="BSIS">BSIS</option>
                        <option value="BSANIM">BSANIM</option>
                    </select>
                </div>
                
                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Firstname</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Year</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>

                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Middle Name</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Remarks</label>
                    <select className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5">
                        <option value="old">Old</option>
                        <option value="new">New</option>
                        <option value="returnee">Returnee</option>
                        <option value="transferee">Transferee</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Lastname</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Status</label>
                    <select className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5">
                        <option value="ac">Active</option>
                        <option value="in">Inactive</option>
                    </select>
                </div>

                </div>
                <div className="border-t border-gray-300 mt-7 py-3 flex items-center justify-end gap-2">
                    <Link to='/students'><Button text="Back" iconLeft={<ChevronLeft size={18} />} /></Link>
                    <Button text="Submit" type="submit" icon={<ChevronRight size={18} />} />
                </div>
            </form>
        </div>
    );
}

export default AddStudent