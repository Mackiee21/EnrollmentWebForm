import { Link, useNavigate } from 'react-router-dom'
import Button from '../../reusable/Button';
import { useState, useRef } from 'react'
import axios from 'axios'
import MessageBox from '../../reusable/MessageBox';
import Retry from '../../reusable/Retry';
import HelmetComp from '../../reusable/HelmetComp';
import FieldInput from '../../reusable/FieldInput';
import SelectField from '../../reusable/SelectField';

function AddStudent(){
    const navigate = useNavigate()
    const formRef = useRef(null)
    const [duplicate, setDuplicate] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [errorFetching, setErrorFetching] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [failed, setFailed] = useState(false)
    const [isValidating, setIsValidating] = useState(false);
    const [invalidFields, setInvalidFields] = useState({
        IDNumber: false,
        Firstname: false,
        Lastname: false,
        ImageUrl: false
    })
    const [data, setData] = useState({
        Course: "BSIT",
        MiddleName: "",
        Year: 1,
        Remarks: "Old",
        ImageUrl: null
    })

    const handleSave = async () => {
       if(!CheckInputs()){
            try {
                setErrorFetching(false)
                if(!navigator.onLine) setErrorFetching(true)
                // console.log(data)
                setProcessing(true)
                const response = await axios.post('/addStudent', data)
                setProcessing(false)
                // console.log(response)
                if(response.data.duplicate && response !== null){
                    setDuplicate(true)
                }else if(response.data.success){
                        navigate(response.data.redirectTo) //return user to students index view if sa eldnet pa
                }else{
                    setFailed(true)
                }
        } catch (error) {
                setErrorFetching(true)
        }
       }
    }

    const CheckInputs = () => {
        let hasInvalid = false;
        formRef.current.querySelectorAll("input").forEach(input => {
            if(!input.value && input.name !== "MiddleName"){
                const name = input.name;
                hasInvalid = true;
                setInvalidFields(prev => {
                    return {
                        ...prev,
                        [name]: true
                    }
                })
            }
        })
        return hasInvalid
    }
    const handleInputChange = async (e) => {
        const key = e.target.name
        setInvalidFields(prev => {
            return {
                ...prev,
                [key]: false
            }
        })
        if(e.target.name === "ImageUrl"){
            setIsValidating(true)
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
            setIsValidating(false)
        }
        img.onerror = function() {
            setIsValid(false)
            setIsValidating(false)
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
           <HelmetComp title="University of Cebu - Add Student" />
           {!errorFetching && !failed && <div className='flex justify-center relative w-full'>
                <div className='md:w-9/12 lg:w-8/12 my-3 py-7 px-9 bg-gray-50 border border-gray-300 rounded-md shadow shadow-sinc-300'>
                    <form method="post" ref={formRef}>
                        <h1 className='text-center mb-7 font-black text-xl uppercase tracking-wider text-white bg-main/90 rounded-md shadow shadow-main/70 py-3 px-6'>Student Form</h1>
                        <div className='grid grid-cols-3 gap-2 mb-1'>
                            <div className='col-span-2'>
                                <div className="flex flex-col mb-4">
                                    <FieldInput label="ID Number" name="IDNumber" onChange={handleInputChange} data={data} errorSpan={invalidFields.IDNumber} />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <FieldInput label="Firstname" name="Firstname" onChange={handleInputChange} data={data} errorSpan={invalidFields.Firstname} />
                                </div>
                            </div>
                            <div className='flex justify-center h-40'>
                                <img src={`${data["ImageUrl"] ?? 'https://tse4.mm.bing.net/th?id=OIP.p1U_G67ouFOGjaEBUmXwrgEsEs&pid=Api&P=0&h=220'}`} className='w-2/3 object-cover object-center h-auto border-2 shadow-lg shadow-zinc-300 cursor-pointer transition-all duraction-75 ease-in-out rounded-lg hover:scale-105'  alt="student photo" />
                            </div>
                        </div> {/* end of first row */}

                        <div className='grid grid-cols-2 gap-4'>
                            <div className="flex flex-col">
                                <FieldInput label="Middle Name" optional name="MiddleName" onChange={handleInputChange} data={data} />
                            </div>
                            <div className="flex flex-col">
                                <label className="">Image URL</label>
                                <input name='ImageUrl' value={isValid ? `${data.ImageUrl || ""}` : ""} onChange={handleInputChange} placeholder='Paste your url here...' type="text" />
                                {!isValid && !isValidating && !invalidFields.ImageUrl &&  <span className='text-red-500 mt-1 font-medium text-xsm tracking-wide'>Invalid Image Url</span>}
                                {isValidating && <span className='font-normal text-gray-700 tracking-wide ms-0.5 mt-1 text-base'>Validating...</span>}
                                {invalidFields.ImageUrl && !isValidating && <span className='text-red-500 my-1 font-medium text-xsm'>This field is required</span>}
                            </div>
                            <div className="flex flex-col">
                                <FieldInput label="Lastname" name="Lastname" onChange={handleInputChange} data={data} errorSpan={invalidFields.Lastname} />
                            </div>
                            <div className="flex flex-col">
                                <SelectField label="Course" name="Course" data={data} onChange={handleInputChange} options={['BSIT', 'BSIS', 'BSANIM']} values={['bsit', 'bsis', 'bsanim']} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <SelectField label="Year" name="Year" data={data} onChange={handleInputChange} options={['1st Year', '2nd Year', '3rd Year', '4th Year']} values={[1, 2, 3, 4]} />
                            </div>
                            <div className="flex flex-col">
                                <SelectField label="Remarks" name="Remarks" data={data} onChange={handleInputChange} options={['Old', "New", "Returnee", "Transferee"]} values={["old", "new", "returnee", "transferee"]} />
                            </div>
                        </div> {/*end of second grid basta subaya lang hehe */}
                    </form>
                    <div className="flex gap-2 items-center justify-end mt-3 border-t border-gray-300 py-3">
                 {/*CHANGE HERE */}<Link to='/records/students'><Button disabled={processing} text="Back" shadow="neutral-600" className="px-9 bg-neutral-600" /></Link>
                            <Button text={processing ? "Saving..." : "Save"} shadow="emerald-600" onClick={handleSave} className="px-9 bg-emerald-600">
                              {processing &&   
                              <div className="spinner-border h-4 w-4 ms-1" role="status"></div>}
                            </Button>
                        </div>
                    </div>
                {duplicate && <MessageBox message="Duplicate Entry" header="Failed" handleClose={handleClose} /> }
            </div>}
            {errorFetching && <Retry onRetry={handleSave} />}
            {failed && <Retry text="Back" onRetry={() => setFailed(false)} message="Failed, please verify your inputs and try again" />}
        </div>
    );
}

export default AddStudent