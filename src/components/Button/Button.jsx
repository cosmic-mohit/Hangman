import GetButtonStyle from "./GetButtonStyle";

function Button({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
  className = ""
}) {
  return (
    <button
      type={type}
      onClick={onClickHandler}
      className={`
        px-6 py-3 rounded-xl font-semibold
        shadow-md transition-all duration-200
        hover:scale-105 active:scale-95
        ${GetButtonStyle(styleType)}
        ${className}
      `}
    >
      {text}
    </button>
  );
}

export default Button;