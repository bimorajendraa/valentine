import React from "react";
import Button from "./components/button";

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">My App</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default App;
