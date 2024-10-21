import React, { useState } from "react";

function MoveYAxis({ updatePositionY, imageId, setInputValueY }) {
  const [inputValueYLocal, setInputValueYLocal] = useState(""); // Local state for the input field

  const handleInputChangeY = (e) => {
    setInputValueYLocal(e.target.value);
    setInputValueY(e.target.value); // Send the input value to the parent
  };

  const handleMoveY = () => {
    if (!isNaN(inputValueYLocal) && inputValueYLocal !== "" && imageId !== "") {
      updatePositionY(parseInt(imageId), Number(inputValueYLocal)); // Use the input value for movement
    } else {
      console.log("Invalid input for Y-axis or Image ID");
    }
  };

  return (
    <div className="mb-2 bg-green-400 p-2 rounded-lg hover:bg-green-600  transition-all duration-200">
      <label className="block text-lg font-semibold">Move Y-axis</label>
      <input
        type="number"
        value={inputValueYLocal}
        onChange={handleInputChangeY}
        placeholder="Y steps"
        className="border px-2 py-1 rounded-md w-24"
      />{" "}
      <button
        onClick={handleMoveY}
        className="px-2 py-2 bg-gray-500 text-white rounded-md active:scale-90 active:shadow-inner hover:bg-gray-600 transition-all duration-200"
      >
        Move on Y-axis
      </button>
    </div>
  );
}

export default MoveYAxis;
