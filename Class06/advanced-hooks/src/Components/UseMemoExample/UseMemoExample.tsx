import { useState } from "react";

export const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [bgColor, setBgColor] = useState("lightblue");

  return (
    <section style={{ backgroundColor: bgColor }}>
      <h1>UseMemo Example</h1>
      <h2>{number}</h2>
      <h2>0</h2>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * 100));
        }}
      >
        Change Number
      </button>
      <button
        onClick={() => {
          setBgColor((prevColor) =>
            prevColor === "lightblue" ? "lightgreen" : "lightblue"
          );
        }}
      >
        Change Background
      </button>
    </section>
  );
};
