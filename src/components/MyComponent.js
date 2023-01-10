import { useState } from "react";

function MyComponent() {
  const [ChangeNumber, setInitialNumber] = useState(100);
  console.log(ChangeNumber);

  const changeN = () => {
    setInitialNumber(Math.random());
  };

  return (
    <div>
      <h1>{ChangeNumber}</h1>
      <button onClick={changeN}>Button for generate</button>
    </div>
  );
}

export default MyComponent;
