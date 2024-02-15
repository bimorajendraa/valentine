// OtherButton.jsx
import React from "react";

function OtherButton({ onClick, size }) {
  return (
    <button
      onClick={onClick}
      style={{ fontSize: `${size}rem` }}
      className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg transition-all duration-300 ml-4"
    >
      YES
    </button>
  );
}

export default OtherButton;
