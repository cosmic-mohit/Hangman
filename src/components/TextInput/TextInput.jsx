function TextInput({type = "text", label, placeholder = "Enter your input", onChangeHandler}) {

    return(
            
        <label className="flex flex-col items-start">
            <span className="text-gray-700 mt-10">{label}</span>
            <input 
                type={type}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full"
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </label>
            
    )

}

export default TextInput;