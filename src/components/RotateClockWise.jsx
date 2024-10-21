import React, { useState } from "react";

function RotateClockwise({ rotateClockwise, imageId, setRotationValue }) {
  const [degree, setDegree] = useState("");

  const handleInputChange = (e) => {
    setDegree(e.target.value);
    setRotationValue(e.target.value);
  };

  const handleRotate = () => {
    if (!isNaN(degree) && degree !== "" && imageId !== "") {
      rotateClockwise(parseInt(imageId), Number(degree));
    } else {
      console.log("Invalid input for rotation or Image ID");
    }
  };

  return (
    <div className="mb-2 bg-orange-400 p-2 rounded-lg hover:bg-orange-600 transition-all duration-200">
      <label className="block text-lg font-semibold">Rotate Clockwise</label>
      <input
        type="number"
        value={degree}
        onChange={handleInputChange}
        placeholder="x degrees"
        className="border px-2 py-1 rounded-md w-28 mb-2"
      />{" "}
      <button
        onClick={handleRotate}
        className="px-2 py-2 bg-gray-500 text-white rounded-md active:scale-90 active:shadow-inner hover:bg-gray-600 transition-all duration-200"
      >
        Rotate Clockwise
      </button>
    </div>
  );
}

export default RotateClockwise;
