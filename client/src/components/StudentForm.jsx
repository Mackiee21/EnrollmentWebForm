function StudentForm(){
    return(
        <div className="flex justify-center">
            <form className="w-9/12 mt-3 grid md:grid-cols-2 sm:grid-cols-1 gap-3 tracking-wide border rounded-md py-5 px-7">
                <div className="flex flex-col">
                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">ID Number</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-zinc-600 font-semibold text-xsm">Course</label>
                    <select className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5">
                        <option selected>BSIT</option>
                        <option>BSIS</option>
                        <option>BSANIM</option>
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
                        <option selected>Old</option>
                        <option>New</option>
                        <option>Returnee</option>
                        <option>Transferee</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Lastname</label>
                    <input className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5" type="text" />
                </div>
                <div className="flex flex-col">
                    <label className="my-2 text-zinc-600 font-semibold text-xsm">Status</label>
                    <select className="border-2 rounded-md focus:outline-none focus:border-2 focus:border-main p-1.5">
                        <option selected>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                <div className="border-t border-black grid-cols-2">

                </div>
            </form>
        </div>
    );
}

export default StudentForm