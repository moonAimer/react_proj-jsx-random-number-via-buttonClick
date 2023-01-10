import { useState } from "react";

function MyComponent({ initialChangeN }) {
  const [ChangeNumber, setInitialNumber] = useState(initialChangeN);
  console.log(ChangeNumber);

  const changeN = () => {};
  return (
    <div>
      <h1>100</h1>
      <button>Button for generate</button>
    </div>
  );
}

export default MyComponent;
