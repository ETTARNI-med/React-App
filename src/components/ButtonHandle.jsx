import { useState } from "react";

const ButtonHandle = () => {
  const [name, setName] = useState("mario");
//   const [age, setAge] = useState("");
  
  const HandleClick = () => {
    setName("luigi");
  };

  return (
    <div className="home">
      <h2>Hello Geeks </h2>
      <p>{name}</p>
      <button onClick={HandleClick}>Click Me</button>
    </div>
  );
};

export default ButtonHandle;




