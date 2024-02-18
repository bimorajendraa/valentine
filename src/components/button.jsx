import React from "react";

function Button({ onClick }) {
  return (
    <button
      className="py-2 px-4 bg-[#FF7D7D] text-white font-semibold rounded-lg transition-all duration-300"
      onClick={onClick}
    >
      NO
    </button>
  );
}

export default Button;
