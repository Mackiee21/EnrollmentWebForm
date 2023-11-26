import { Link, useNavigate } from 'react-router-dom'
import Button from '../../reusable/Button';
import { useState } from 'react'
import axios from 'axios'
import MessageBox from '../../reusable/MessageBox';
import Retry from '../../reusable/Retry';

function AddStudent(){
    const navigate = useNavigate()
    const [duplicate, setDuplicate] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [errorFetching, setErrorFetching] = useState(false)
    const [data, setData] = useState({
        Course: "BSIT",
        MiddleName: "",
        Year: 1,
        Remarks: "Old",
        ImageUrl: "https://tse4.mm.bing.net/th?id=OIP.p1U_G67ouFOGjaEBUmXwrgEsEs&pid=Api&P=0&h=220"
    })

    const handleSave = async () => {
       try {
            setErrorFetching(false)
            if(!navigator.onLine) setErrorFetching(true)
             // console.log(data)
            const response = await axios.post('/addStudent', data)
            // console.log(response)
            if(response.data.duplicate && response !== null){
                setDuplicate(true)
            }else if(response.data.success){
                    navigate(response.data.redirectTo) //return user to students index view if sa eldnet pa
            }else{
                console.log(response)
            }
       } catch (error) {
            setErrorFetching(true)
       }
    }

    const handleInputChange = async (e) => {
        const key = e.target.name
        if(e.target.name === "ImageUrl"){
            valideateImage(e.target.value)
        }
        setData(prev => {
            return {
                ...prev,
                [key]: e.target.value

            }
        })
    }
    const handleClose = () => {
        setDuplicate(false)
    }
    function valideateImage(url){
        console.log(url)
        const img = new Image();
        img.src = url;
        img.onload = function(){
            setIsValid(true)
        }
        img.onerror = function() {
            setIsValid(false)
            setData(prev => {
                return {
                    ...prev,
                    ImageUrl: "https://tse4.mm.bing.net/th?id=OIP.p1U_G67ouFOGjaEBUmXwrgEsEs&pid=Api&P=0&h=220"
                }
            })
        }
    }
    return(
        <div className="flex justify-center relative">
           {!errorFetching && <div className='flex justify-center relative w-full'>
                <div className='w-8/12 mt-3 py-7 px-9 border border-gray-300 rounded-md shadow ms-2 shadow-sinc-300'>
                    <form method="post">
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2'>
                                <div className="flex flex-col mb-2">
                                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">ID Number</label>
                                    <input name='IDNumber' value={`${data["IDNumber"] ?? ""}`} onChange={handleInputChange} className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">Firstname</label>
                                    <input name='Firstname' value={`${data["Firstname"] ?? ""}`} onChange={handleInputChange} className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                                </div>
                            </div>
                            <div className='flex justify-center h-40'>
                                <img src={`${data["ImageUrl"] ?? ''}`} className='w-2/3 object-cover object-center h-auto border-2 shadow-lg shadow-zinc-300 cursor-pointer transition-all duraction-75 ease-in-out rounded-lg hover:scale-105'  alt="student photo" />
                            </div>
                        </div> {/* end of first row */}

                        <div className='grid grid-cols-2 gap-3'>
                            <div className="flex flex-col mb-2">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Middle Name</label>
                                <input name='MiddleName' value={`${data["MiddleName"] ?? ""}`} onChange={handleInputChange} className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Image URL</label>
                                <input name='ImageUrl' onChange={handleInputChange} placeholder='Paste your url here...' className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                                {!isValid && <span className='text-red-500 mt-1 font-medium text-xsm tracking-wide'>Invalid Image Url</span>}
                            </div>
                            <div className="flex flex-col mb-2">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Lastname</label>
                                <input name='Lastname' value={`${data["Lastname"] ?? ""}`} onChange={handleInputChange} className="form-input rounded-md focus:outline-none focus:border focus:border-main p-1.5" type="text" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Course</label>
                                <select name='Course' value={`${data["Course"] ?? ""}`} onChange={handleInputChange} className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
                                    <option value="bsit">BSIT</option>
                                    <option value="BSIS">BSIS</option>
                                    <option value="BSANIM">BSANIM</option>
                                </select>
                            </div>
                            <div className="flex flex-col mb-2">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Year</label>
                                <select name='Year' value={`${data["Year"] ?? ""}`} onChange={handleInputChange} className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-zinc-600 font-semibold text-xsm">Remarks</label>
                                <select name='Remarks' value={`${data["Remarks"] ?? ""}`} onChange={handleInputChange} className="form-select cursor-pointer rounded-md focus:outline-none focus:border focus:border-main p-1.5">
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
            </div>}
            {errorFetching && <Retry onRetry={handleSave} />}
        </div>
    );
}

export default AddStudent