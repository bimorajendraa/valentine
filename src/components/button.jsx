import React from "react";

function Button() {
  const handleButtonClick = () => {
    const tombol = document.getElementById('tombol');
    const ukuranSekarang = window.getComputedStyle(tombol).getPropertyValue('font-size');
    const ukuranBaru = parseFloat(ukuranSekarang) + 2;
    tombol.style.fontSize = ukuranBaru + 'px';
  };

  return (
    <button id="tombol" className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300" onClick={handleButtonClick}>
      Tekan Saya
    </button>
  );
}

export default Button;

