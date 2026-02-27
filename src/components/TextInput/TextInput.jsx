function TextInput({
  type = "text",
  label,
  placeholder = "Enter your input",
  onChangeHandler,
  value = "",
  className = ""
}) {
  return (
    <label className="flex flex-col items-start w-full">
      <span className="text-gray-700 mt-6 font-medium">{label}</span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        className={`
          mt-2 px-4 py-3 border border-gray-300
          rounded-xl w-full
          focus:outline-none focus:ring-2 focus:ring-indigo-400
          transition-all duration-200
          ${className}
        `}
      />
    </label>
  );
}

export default TextInput;