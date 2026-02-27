import { useEffect, useState } from "react";

function CelebrationPopup({ show, message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible) return null;

  return (
    <div className="
      fixed bottom-6 left-1/2 -translate-x-1/2
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      text-white px-8 py-4 rounded-2xl shadow-2xl
      animate-slideUp
      text-lg font-bold
    ">
      🎉 {message}
    </div>
  );
}

export default CelebrationPopup;