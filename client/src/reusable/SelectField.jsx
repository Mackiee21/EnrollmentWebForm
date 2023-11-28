export default function SelectField({label, name, data, onChange, options, values}){
    return(
        <>
            <label>{label}</label>
            <select name={name} value={`${data[name] || ""}`} onChange={onChange}>
               {options.map((option, i) => {
                return <option key={option} value={values[i]}>{option}</option>
               })}
            </select>
        </>
    );
}