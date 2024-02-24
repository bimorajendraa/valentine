import React, { useState } from "react";
import Button from "./components/button";
import OtherButton from "./components/otherbutton";

function App() {
  const [size, setSize] = useState(1);
  const [count, setCount] = useState({ button1: 0, button2: 0 });
  const [button1Clicked, setButton1Clicked] = useState(false);
  const [otherButtonClicked, setOtherButtonClicked] = useState(false);

  const handleButtonClick = () => {
    console.log("Button 1 clicked");
    setSize(size + 1);
    setCount((prevCount) => ({ ...prevCount, button1: prevCount.button1 + 1 }));
    setButton1Clicked(true);
  };

  const handleButtonClick2 = () => {
    console.log("Button 2 clicked");
    setCount((prevCount) => ({ ...prevCount, button2: prevCount.button2 + 1 }));
    setOtherButtonClicked(true);
  };

  let message;
  let imgPath;
  if (!button1Clicked) {
    message = "Wanna be my valentine??";
    imgPath = "public/static/gambar0.jpg";
  } else {
    if (count.button1 === 1) {
      message = "Kok sempet sempetnya mencet no jir????";
      imgPath = "public/static/gambar1.jpg";
    } else if (count.button1 === 2) {
      message = "Jir no nya 2 kali??";
      imgPath = "public/static/gambar2.jpg";
    } else if (count.button1 === 3) {
      message = "Jir udah lgsg pencet yes";
      imgPath = "public/static/gambar3.jpg";
    } else if (count.button1 === 4) {
      message = "bang udah bang";
      imgPath = "public/static/gambar4.jpg";
    } else if (count.button1 === 5) {
      message = "please ini mah pencet yes nya";
      imgPath = "public/static/gambar5.jpg";
    } else if (count.button1 === 6) {
      message = "COKKK PENCET YESSS";
      imgPath = "public/static/gambar6.jpg";
    } else if (count.button1 === 7) {
      message = "YAKALI GA DIPENCET YESNYA";
      imgPath = "public/static/gambar7.jpg";
    } else if (count.button1 === 8) {
      message = "LIAT TOMBOL YES NYA MAKIN GEDE JIR";
      imgPath = "public/static/gambar8.jpg";
    } else if (count.button1 === 9) {
      message = "kira kira ini situasi anjir apa buset";
      imgPath = "public/static/gambar9.jpg";
    } else if (count.button1 === 10) {
      message = "cepet pencet yes sebelum aku ngambek";
      imgPath = "public/static/gambar10.jpg";
    } else if (count.button1 === 11) {
      message = "dah lah bete aku";
      imgPath = "public/static/gambar11.jpg";
    } else if (count.button1 === 12) {
      message = "AOWKAOKWOKOAKOWKOK TOMBOL NO NYA ILANG";
    }
  }

  return (
    <div className="bg-[#FAE3D9] min-h-screen">
      <div className="container md:mx-auto px-20 text-center">
        {otherButtonClicked ? (
          <>
            <img
              src="public/static/gambarfinal.jpg"
              className="block mx-auto max-w-80 max-h-64 py-4"
            />
            <h1 className="text-3xl font-bold mt-18 text-[#459cff]">
              HEHEHEHE, hi my valentine i love you
            </h1>
          </>
        ) : (
          <>
            <img
              src={imgPath}
              className="block mx-auto max-w-80 max-h-64 py-4"
            />
            <h1 className="text-3xl font-bold mt-18 text-[#459cff]">
              {message}
            </h1>
            <div className="py-6">
              {count.button1 < 12 && <Button onClick={handleButtonClick} />}
              <OtherButton onClick={handleButtonClick2} size={size} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
