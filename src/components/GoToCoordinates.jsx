import React, { useState } from "react";

function GoToCoordinates({ goToCoordinates, imageId }) {
  const [xCoordinate, setXCoordinate] = useState("");
  const [yCoordinate, setYCoordinate] = useState("");

  const handleGoTo = () => {
    if (xCoordinate !== "" && yCoordinate !== "" && imageId !== "") {
      goToCoordinates(parseInt(imageId), xCoordinate, yCoordinate);
    } else {
      console.log("Invalid coordinates or Image ID");
    }
  };

  return (
    <div className="mb-4 bg-purple-400 p-2 rounded-lg hover:bg-purple-600 transition-all duration-200">
      <label className="block text-lg font-semibold ">Go to (X, Y)</label>
      <div className="flex space-x-2">
        <input
          type="number"
          value={xCoordinate}
          onChange={(e) => setXCoordinate(e.target.value)}
          placeholder="X"
          className="border px-2 py-1 rounded-md w-20"
        />
        <input
          type="number"
          value={yCoordinate}
          onChange={(e) => setYCoordinate(e.target.value)}
          placeholder="Y"
          className="border px-2 py-1 rounded-md w-20"
        />
        <button
          onClick={handleGoTo}
          className="px-2 py-2 bg-gray-500 text-white rounded-md active:scale-90 active:shadow-inner hover:bg-gray-600 transition-all duration-200"
        >
          Go to Coordinates
        </button>
      </div>
    </div>
  );
}

export default GoToCoordinates;
