import React from "react";
import Button from "./components/button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container md:mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">My App</h1>
      <Button/>
    </div>
  );
};

export default App;
