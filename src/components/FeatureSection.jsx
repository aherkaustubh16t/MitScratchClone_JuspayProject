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
  const handleDragStart = (e, feature) => {
    let data = {
      feature,
      inputValueX,
      inputValueY,
      rotationValue,
    };

    e.dataTransfer.setData("featureData", JSON.stringify(data));
  };

  const [inputValueX, setInputValueX] = useState("");
  const [inputValueY, setInputValueY] = useState("");
  const [rotationValue, setRotationValue] = useState("");
  const [imageId, setImageId] = useState("");

  const [activeFeature, setactiveFeature] = useState(null);

  const handleImageIdChange = (e) => {
    setImageId(e.target.value);
  };

  const handleInputValueXChange = (value) => {
    setInputValueX(value); // Update the inputValueX state
  };

  const handleInputValueYChange = (value) => {
    setInputValueY(value);
  };

  const handleRotationChange = (value) => {
    setRotationValue(value);
  };

  return (
    <div className="p-2">
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
        <GoToCoordinates goToCoordinates={goToCoordinates} imageId={imageId} />
      </div>
    </div>
  );
}

export default FeatureSection;
