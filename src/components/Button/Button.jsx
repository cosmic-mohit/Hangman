import GetButtonStyle from "./GetButtonStyle";

function Button({text, onClickHandler, styleType = "primary", type="button"}) { 
    console.log(text);
    return(
        <button 
        type={type}
        onClick={onClickHandler}
        className={`px-4 ml-4 mt-4 border-slate-700 ${GetButtonStyle(styleType)} text-white`}
        > 
            {text}
        </button>
    );
}

export default Button















// props = {} object destructuring
// props is a object contains the parameters/properties passed to function

/* {} ==> jsx curlies iske andar js ka koi bhi valid piece of code likh
            skte h or ye use evaluate krke show krta h*/