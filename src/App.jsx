import React, { useState } from "react";
import Button from "./components/button";
import OtherButton from "./components/otherbutton";

function App() {
  const [size, setSize] = useState(1); // Ukuran awal tombol lainnya
  const [count, setCount] = useState({ button1: 0, button2: 0 }); // State untuk menghitung jumlah klik tombol 1 dan tombol 2
  const [button1Clicked, setButton1Clicked] = useState(false); // State untuk melacak apakah tombol 1 telah ditekan

  const handleButtonClick = () => {
    console.log("Button 1 clicked");
    setSize(size + 1); // Menambah ukuran saat tombol ditekan
    setCount((prevCount) => ({ ...prevCount, button1: prevCount.button1 + 1 })); // Menambah jumlah klik tombol 1
    setButton1Clicked(true); // Mengatur bahwa tombol 1 telah ditekan
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 clicked");
    setCount((prevCount) => ({ ...prevCount, button2: prevCount.button2 + 1 })); // Menambah jumlah klik tombol 2
  };

  let message;
  let imgPath;
  if (!button1Clicked) {
    message = "Wanna be my valentine??";
    imgPath = "src/assets/gambar1.jpg";
  } else {
    if (count.button1 === 1) {
      message = "Kok sempet sempetnya mencet no jir????";
      imgPath = "src/assets/gambar1.jpg";
    } else if (count.button1 === 2) {
      message = "Jir no nya 2 kali??";
      imgPath = "src/assets/gambar2.jpg";
    } else if (count.button1 === 3) {
      message = "Jir udah lgsg pencet yes";
      imgPath = "src/assets/gambar3.jpg";
    } else if (count.button1 === 4) {
      message = "bang udah bang";
      imgPath = "src/assets/gambar4.jpg";
    } else if (count.button1 === 5) {
      message = "please ini mah pencet yes nya";
      imgPath = "src/assets/gambar5.jpg";
    } else if (count.button1 === 6) {
      message = "COKKK PENCET YESSS";
      imgPath = "src/assets/gambar6.jpg";
    } else if (count.button1 === 7) {
      message = "YAKALI GA DIPENCET YESNYA";
      imgPath = "src/assets/gambar7.jpg";
    } else if (count.button1 === 8) {
      message = "LIAT TOMBOL YES NYA MAKIN GEDE JIR";
      imgPath = "src/assets/gambar8.jpg";
    } else if (count.button1 === 9) {
      message = "kira kira ini situasi anjir apa buset";
      imgPath = "src/assets/gambar9.jpg";
    } else if (count.button1 === 10) {
      message = "cepet pencet yes sebelum aku ngambek";
      imgPath = "src/assets/gambar10.jpg";
    } else if (count.button1 === 11) {
      message = "dah lah bete aku";
      imgPath = "src/assets/gambar11.jpg";
    }
  }

  return (
    <>
      <div className="container md:mx-auto px-20 text-center">
        <img src={imgPath} className="block mx-auto max-w-80 max-h-48" />
        <h1 className="text-3xl font-bold mt-20">{message}</h1>
        <div className="py-6"> 
          <Button onClick={handleButtonClick} />
          <OtherButton onClick={handleButtonClick2} size={size} />
        </div>
      </div>
    </>
  );
}

export default App;