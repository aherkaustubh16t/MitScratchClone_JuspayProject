import React, { useState } from "react";

function MoveXAxis({ updatePositionX, imageId, setInputValueX }) {
  const [inputValueXLocal, setInputValueXLocal] = useState(""); // Local state for the input field

  const handleInputChangeX = (e) => {
    setInputValueXLocal(e.target.value);
    setInputValueX(e.target.value); // Send the input value to the parent
  };

  const handleMoveX = () => {
    if (!isNaN(inputValueXLocal) && inputValueXLocal !== "" && imageId !== "") {
      updatePositionX(parseInt(imageId), Number(inputValueXLocal)); // Use the input value for movement
    } else {
      console.log("Invalid input for X-axis or Image ID");
    }
  };

  return (
    <div className="mb-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-600 transition-all duration-200">
      <label className="block text-lg font-semibold">Move X-axis</label>
      <input
        type="number"
        value={inputValueXLocal}
        onChange={handleInputChangeX}
        placeholder="X steps"
        className="border px-2 py-1 rounded-md w-24"
      />{" "}
      <button
        onClick={handleMoveX}
        className="px-2 py-2 bg-gray-500 text-white rounded-md active:scale-90 hover:bg-gray-600 active:shadow-inner transition-all duration-200"
      >
        Move on X-axis
      </button>
    </div>
  );
}

export default MoveXAxis;
