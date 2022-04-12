import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div
      style={{
        width: "60vw",
        height: "60vh",
        border: "1px solid black",
        backgroundColor: `${color}`,
        borderRadius: "10px",
        margin: "10px 0",
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontWeight: "bold", color: color === "black" && "white" }}>
        {color ? color : "Ingresa un color"}
      </p>
    </div>
  );
};

export default ColorBox;
