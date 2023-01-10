import { useState } from "react";
import generateRandomNumber from "../utils/generateRandomNumber";

function ChangingNumber() {
  const [initialNumber, setInitialNumber] = useState(generateRandomNumber());

  const myFna = () => {
    setInitialNumber(generateRandomNumber());
  };

  return (
    <div>
      <h1>{initialNumber}</h1>
      <button onClick={myFna}>If you click number will change</button>
    </div>
  );
}

export default ChangingNumber;
