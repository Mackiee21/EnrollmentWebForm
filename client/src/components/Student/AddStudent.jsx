import { Link } from 'react-router-dom'
import Button from '../../reusable/Button';
import { useRef, useState } from 'react'
import axios from 'axios'
import MessageBox from '../../reusable/MessageBox';

function AddStudent(){
    const formRef = useRef(null)
    const [duplicate, setDuplicate] = useState(false)

    const handleSave = async () => {
        const formData = new FormData(formRef.current)
        console.log(formData.get("ID Number"))
        const response = await axios.post('/addStudent', formData)
       if(response.data.duplicate && response !== null){
        alert("i get run??")
        setDuplicate(true)
       }else if(response.data.success){
        alert("success")
       }else{
        alert("error saving record")
       }
    }
    const handleClose = () => {
        setDuplicate(false)
    }
    return(
        <div className="flex justify-center relative">
            <div className='w-8/12 mt-3 py-7 px-9 border border-gray-300 rounded-md shadow ms-2 shadow-sinc-300'>
            <form method="post" ref={formRef} className=''>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
                        <div className="flex flex-col mb-2">
                            <label className="mb-2 text-zinc-600 font-semibold text-xsm">ID Number</label>
                            <input name='IDNumber' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-2 text-zinc-600 font-semibold text-xsm">Firstname</label>
                            <input name='Firstname' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                        </div>
                    </div>
                    <div className='flex justify-center h-40'>
                        <img className='w-2/3 object-cover object-center h-auto border-2 shadow-lg shadow-zinc-300 cursor-pointer transition-all duraction-75 ease-in-out rounded-lg hover:scale-105' src="https://cdn.pixabay.com/photo/2017/05/29/15/34/kitten-2354016_1280.jpg" alt="student photo" />
                    </div>
                </div> {/* end of first row */}

                <div className='grid grid-cols-2 gap-3'>
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Middle Name</label>
                        <input name='MiddleName' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Image URL</label>
                        <input name='ImageUrl' placeholder='Paste your url here...' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Lastname</label>
                        <input name='Lastname' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Course</label>
                        <select name='Course' className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
                            <option value="bsit">BSIT</option>
                            <option value="BSIS">BSIS</option>
                            <option value="BSANIM">BSANIM</option>
                        </select>
                    </div>
                    <div className="flex flex-col mb-2">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Year</label>
                        <select name='Year' className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2 text-zinc-600 font-semibold text-xsm">Remarks</label>
                        <select name='Remarks' className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
                            <option value="old">Old</option>
                            <option value="new">New</option>
                            <option value="returnee">Returnee</option>
                            <option value="transferee">Transferee</option>
                        </select>
                    </div>
                </div> {/*end of second grid basta subaya lang hehe */}
            </form>
            <div className="flex gap-2 items-center justify-end mt-3 border-t border-gray-300 py-3">
                       <Link to='/students'><Button text="Back" className="px-9 bg-neutral-600" /></Link>
                       <Button text="Save" onClick={handleSave} className="px-9 bg-emerald-600 " />
                </div>
            </div>
            {duplicate && <MessageBox message="Duplicate Entry" header="Error" handleClose={handleClose} /> }
        </div>
    );
}

export default AddStudent