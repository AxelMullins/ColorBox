import React from "react";

const AddColor = ({ handleColor }) => {
  return (
    <div>
      <input
        type="text"
        name="nameColor"
        id="nameColor"
        placeholder="Ingresa un color"
        style={{
          width: "60vw",
          height: "48px",
          padding: "20px",
          borderRadius: "10px",
        }}
        onChange={(e) => handleColor(e)}
      />
      <label htmlFor="nameColor" hidden>
        Color:
      </label>
    </div>
  );
};

export default AddColor;
