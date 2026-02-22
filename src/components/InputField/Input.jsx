export default function Input ({type,placeholder,w, onChange, value, checked, onClick }){
    return(
        <input 
            type={type}
            placeholder={placeholder}
            className={` ${w} " text-sm border border-gray-300 rounded-lg p-4 "`}
            onChange={onChange}
            value={value}
            checked={checked}
            onClick={onClick}
        />
    )
}