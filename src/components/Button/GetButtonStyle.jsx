function GetButtonStyle(styleType){
    if(styleType === "primary") {
        return "bg-blue-500";
    }
    else if(styleType === "secondary") {
        return "bg-gray-500";
    }
    else if(styleType === "danger") {
        return "bg-red-500";
    }
    else if(styleType === "success") {
        return "bg-green-500";
    }
    return "bg-blue-500"; 
}

export default GetButtonStyle;