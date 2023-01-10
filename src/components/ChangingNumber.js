import { useState } from "react";

function ChangingNumber() {
  const abc = Math.floor(Math.random() * 100);
  const [initialNumber, setInitialNumber] = useState(abc);

  const myFna = () => {
    const abcForChanging = Math.floor(Math.random() * 100);
    setInitialNumber(abcForChanging);
  };

  return (
    <div>
      <h1>{initialNumber}</h1>
      <button onClick={myFna}>If you click number will change</button>
    </div>
  );
}

export default ChangingNumber;
