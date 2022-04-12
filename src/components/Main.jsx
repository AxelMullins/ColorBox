import { useState } from "react";
import AddColor from "./AddColor";
import ColorBox from "./ColorBox";

const Main = () => {
  const [color, setColor] = useState("");

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ColorBox color={color} />
      <AddColor handleColor={handleColor} />
    </main>
  );
};

export default Main;
