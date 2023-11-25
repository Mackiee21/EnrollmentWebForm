import Header from '../../reusable/Header'
import Loading from '../../reusable/Loading'
import NOData from '../../reusable/NoData'
import { Trash2, Edit } from 'lucide-react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Student(){
    const [students, setStudents] = useState([])
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = async() => {
      try {
        setFetching(true);
        const response = await axios.get("/student");
        setStudents(response.data);
        setFetching(false)
        // console.log(students)
      } catch (error) {
        console.log(error)
      }
    }

    const handleRefresh = () => {
        getStudents(); //wow works on the first try man dayon mak hahahah
    }
    const filterBy = ['All', 'BSIT', 'BSIS', 'BSN', 'BSCPE']
    return(
        <div className='w-full px-3'>
            <Header title="Students" filterBy={filterBy} handleRefresh={handleRefresh} />
            <div className=''>
                { fetching && <Loading /> }
               { !fetching &&  students.length === 0 &&  <NOData /> }
                { !fetching && students.length > 0 && <table className="table-auto w-full">
                    <thead className=''>
                        <tr className='border-b-2 bg-zinc-100 text-xsm'>
                            <th className='py-2.5 px-3 text-start'>ID Number</th>
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
                    <tbody className='border border-gray-300 text-xsm'>
                        {students.map(student => {
                            return(
                                <tr className='text-start border-b border-gray-300' key={student.StudentIDNumber}>
                                    <td className='px-2 py-3 font-bold tracking-wider'>{student.StudentIDNumber}</td>
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
            </div>
        </div>
    );
}

export default Student