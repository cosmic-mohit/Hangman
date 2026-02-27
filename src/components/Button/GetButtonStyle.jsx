function GetButtonStyle(styleType) {
  switch (styleType) {
    case "primary":
      return "bg-indigo-500 hover:bg-indigo-600 text-white";
    case "secondary":
      return "bg-gray-500 hover:bg-gray-600 text-white";
    case "danger":
      return "bg-red-500 hover:bg-red-600 text-white";
    case "success":
      return "bg-green-500 hover:bg-green-600 text-white";
    default:
      return "bg-indigo-500 hover:bg-indigo-600 text-white";
  }
}

export default GetButtonStyle;