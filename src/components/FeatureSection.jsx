import React, { useState } from "react";
import MoveXAxis from "./MoveXAxis";
import MoveYAxis from "./MoveYAxis";
import RotateClockwise from "./RotateClockwise";
import RotateAnticlockwise from "./RotateAnticlockwise";
import GoToCoordinates from "./GoToCoordinates";

function FeatureSection({
  updatePositionX,
  updatePositionY,
  rotateClockwise,
  rotateAnticlockwise,
  goToCoordinates,
}) {
  // Drag start event handler
  const handleDragStart = (e, feature) => {
    let data = {
      feature,
      inputValueX,
      inputValueY,
      rotationValue,
    };

    e.dataTransfer.setData("featureData", JSON.stringify(data)); // Send feature data
  };

  const [inputValueX, setInputValueX] = useState(""); // State to store input value from MoveXAxis
  const [inputValueY, setInputValueY] = useState(""); // State for input value of MoveYAxis
  const [rotationValue, setRotationValue] = useState("");
  const [imageId, setImageId] = useState(""); // Add state for image ID

  const [activeFeature, setactiveFeature] = useState(null); //dragable use state

  // Function to handle the change in image ID
  const handleImageIdChange = (e) => {
    setImageId(e.target.value);
  };

  // Function to handle the input value passed from the child
  const handleInputValueXChange = (value) => {
    setInputValueX(value); // Update the inputValueX state
  };

  // Function to handle the input value passed from the child (for Y-axis)
  const handleInputValueYChange = (value) => {
    setInputValueY(value);
  };

  // Function to handle the input value passed from the child (for Rotation)
  const handleRotationChange = (value) => {
    setRotationValue(value);
  };

  return (
    <div className="p-2">
      {/* Input for Image ID */}
      <div className="mb-6">
        <label className="block text-lg font-semibold">
          Image ID (Id Starts from 1)
        </label>
        <input
          type="text"
          value={imageId}
          onChange={handleImageIdChange}
          placeholder="Enter Image ID"
          className="border-2 border-sky-800 px-2 py-1 rounded-md w-full"
        />
      </div>
      <div draggable onDragStart={(e) => handleDragStart(e, "MoveXAxis")}>
        <MoveXAxis
          updatePositionX={updatePositionX}
          imageId={imageId}
          setInputValueX={handleInputValueXChange}
        />
      </div>
      <div draggable onDragStart={(e) => handleDragStart(e, "MoveYAxis")}>
        <MoveYAxis
          updatePositionY={updatePositionY}
          imageId={imageId}
          setInputValueY={handleInputValueYChange}
        />
      </div>

      <div draggable onDragStart={(e) => handleDragStart(e, "RotateClockwise")}>
        {/* Rotate Buttons with Degree Input */}
        <RotateClockwise
          rotateClockwise={rotateClockwise}
          imageId={imageId}
          setRotationValue={handleRotationChange}
        />
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "RotateAnticlockwise")}
      >
        <RotateAnticlockwise
          rotateAnticlockwise={rotateAnticlockwise}
          imageId={imageId}
          setRotationValue={handleRotationChange}
        />
      </div>

      <div
        className="mt-4"
        draggable
        onDragStart={(e) => handleDragStart(e, "GoToCoordinates")}
      >
        {/* Go to X, Y Coordinates */}
        <GoToCoordinates goToCoordinates={goToCoordinates} imageId={imageId} />
      </div>
    </div>
  );
}

export default FeatureSection;
