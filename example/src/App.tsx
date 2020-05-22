import React from "react";

import { OpacityTransition } from "./components/OpacityTransition";

function Square() {
  return <div style={{ background: "red", width: 100, height: 100 }}></div>;
}

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <button onClick={() => void setShow(!show)}>show</button>

      <OpacityTransition>{show && <Square />}</OpacityTransition>
    </div>
  );
}

export default App;
