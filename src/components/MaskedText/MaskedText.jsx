function MaskedText({ text = "", revealedIndices = [] }) {
  return (
    <>
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="mx-3 text-2xl font-bold text-indigo-700"
        >
          {revealedIndices.includes(idx) || char === " "
            ? char
            : "_"}
        </span>
      ))}
    </>
  );
}

export default MaskedText;