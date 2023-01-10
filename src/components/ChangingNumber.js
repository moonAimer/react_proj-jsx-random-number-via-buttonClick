import { useState } from "react";

function ChangingNumber() {
  const [initialNumber, setInitialNumber] = useState(500);

  const myFna = () => {
    setInitialNumber(Math.random());
  };

  return (
    <div>
      <h1>{initialNumber}</h1>
      <button onClick={myFna}>If you click number will change</button>
    </div>
  );
}

export default ChangingNumber;
