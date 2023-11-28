export default function FieldInput({label, optional, name, onChange, data, errorSpan, type="text"}){
    return(
        <>
            <label>{label}{optional && <span className="ms-1.5 font-normal tracking-wide italic">(Optional)</span>}</label>
            <input name={name} value={`${data[name] || ""}`} onChange={onChange} type={type} />
            {errorSpan && <span className='text-red-500 mt-1 font-medium text-xsm'>This field is required</span>}
        </>
    );
}