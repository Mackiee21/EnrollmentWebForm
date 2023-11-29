import Header from '../../reusable/Header'
import Loading from '../../reusable/Loading'
import NOData from '../../reusable/NoData'
import Retry from '../../reusable/Retry'
import { Trash2, Edit } from 'lucide-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import HelmetComp from '../../reusable/HelmetComp'

function Student(){
    const [students, setStudents] = useState([])
    const [fetching, setFetching] = useState(false)
    const [errorFetching, setErrorFetching] = useState(false)
    const [option, setOption] = useState("all");

    useEffect(() => {
        getStudents(option);
    }, [])

    const getStudents = async(option) => {
      try {
        setErrorFetching(false)
        setFetching(true);
        if(!navigator.onLine) {
            setErrorFetching(true) 
            return;
        }
        const response = await axios.get(`/student/${option}`);
        setErrorFetching(false)
        if(response.status !== 200){
            
            setErrorFetching(true)
        }
        setStudents(response.data);
        setFetching(false)
        // console.log(students)
      } catch (error) {
        console.log(error)
        setErrorFetching(true);
      }
    }
    const handleFilter = (opt) => {
        setOption(opt)
        getStudents(opt)
    }

    const handleRefresh = () => {
        getStudents(option); //wow works on the first try man dayon mak hahahah
    }
    const filterBy = ['All', 'BSIT', 'BSIS', 'BSN', 'BSCPE']
    return(
        <div className='ps-2'>
           <HelmetComp title="University of Cebu - Students" />
            <Header title="Students" filterBy={filterBy} handleRefresh={handleRefresh} handleFilter={handleFilter} fetching={fetching} />
            {!errorFetching && <div className='overflow-x-auto'>
                { fetching && <Loading /> }
               { !fetching &&  students.length === 0 &&  <NOData /> }
                { !fetching && students.length > 0 && <table className="table-auto w-full">
                    <thead className=''>
                        <tr className='border-b-2 bg-zinc-100 text-sm'>
                            <th className='py-2.5 px-2 text-start'>ID Number</th>
                            <th className='px-3 text-start'>Firstname</th>
                            <th className='px-3 text-start'>Middle Name</th>
                            <th className='px-3 text-start'>Lastname</th>
                            <th className='px-3 text-start'>Course</th>
                            <th className='px-3 text-start'>Year</th>
                            <th className='px-3 text-start'>Remarks</th>
                            <th className='px-3 text-start'>Status</th>
                            <td className='px-3 text-start'></td>
                        </tr>
                    </thead>
                    <tbody className='border border-gray-300 text-sm'>
                        {students && students.map(student => {
                            return(
                                <tr className='text-start border-b border-gray-300' key={student.StudentIDNumber}>
                                    <td className='px-2 py-3 font-bold tracking-wide'>{student.StudentIDNumber}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentFName}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentMName}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentLName}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentCourse}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentYr}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentRemarks}</td>
                                    <td className='px-3 capitalize tracking-wide'>{student.StudentStatus}</td>
                                    <td className='px-1 py-2 flex gap-4'>
                                        <Edit size={20} color="#077acc" className='cursor-pointer' />
                                        <Trash2 size={20} color="red" className='cursor-pointer' />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> } 
            </div>}
            {/**when connection is off */}
            {errorFetching && <Retry onRetry={handleRefresh}/>}
        </div>
    );
}

export default Student