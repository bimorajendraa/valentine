import React, { useState } from "react";
import Button from "./components/button";
import OtherButton from "./components/otherbutton";

function App() {
  const [size, setSize] = useState(1); // Ukuran awal tombol lainnya
  const [count, setCount] = useState({ button1: 0, button2: 0 }); // State untuk menghitung jumlah klik tombol 1 dan tombol 2

  const handleButtonClick = () => {
    console.log("Button 1 clicked");
    setSize(size + 0.5); // Menambah ukuran saat tombol ditekan
    setCount((prevCount) => ({ ...prevCount, button1: prevCount.button1 + 1 })); // Menambah jumlah klik tombol 1
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 clicked");
    setCount((prevCount) => ({ ...prevCount, button2: prevCount.button2 + 1 })); // Menambah jumlah klik tombol 2
  };

  return (
    <div className="container md:mx-auto px-20 text-center">
      <h1 className="text-3xl font-bold mt-20 py-20 ">
        Selamat datang di Halaman Awal
      </h1>
      <Button onClick={handleButtonClick} />
      <OtherButton onClick={handleButtonClick2} size={size} />
    </div>
  );
}

export default App;
