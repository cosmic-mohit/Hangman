const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

function LetterButtons({ onLetterClick }) {

  return (
    <div className="grid grid-cols-7 gap-3 mt-4">
      {ALPHABETS.map((letter) => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          className="h-12 w-12 text-lg font-bold rounded-xl 
                     bg-indigo-500 hover:bg-indigo-600 
                     active:scale-95 transition-all duration-200 
                     text-white shadow-md"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default LetterButtons;