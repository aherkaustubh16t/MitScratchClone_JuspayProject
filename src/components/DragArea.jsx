import { useState } from "react";
import React from "react";

function DragArea() {
  const [droppedFeatures, setDroppedFeatures] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const featureData = JSON.parse(e.dataTransfer.getData("featureData"));

    setDroppedFeatures([...droppedFeatures, featureData]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRun = () => {
    droppedFeatures.forEach((feature) => {
      if (feature.feature === "MoveX" && feature.inputValueX) {
        moveX(feature.inputValueX);
      } else if (feature.feature === "MoveY" && feature.inputValueY) {
        moveY(feature.inputValueY);
      } else if (
        feature.feature === "RotateClockwise" &&
        feature.rotationValue
      ) {
        rotateClockwise(feature.rotationValue);
      } else if (
        feature.feature === "RotateAnticlockwise" &&
        feature.rotationValue
      ) {
        rotateAnticlockwise(feature.rotationValue);
      }
    });
  };

  const moveX = (steps) => {
    console.log(`Moving X by ${steps}`);
  };

  const moveY = (steps) => {
    console.log(`Moving Y by ${steps}`);
  };

  const rotateClockwise = (degrees) => {
    console.log(`Rotating clockwise by ${degrees} degrees`);
  };

  const rotateAnticlockwise = (degrees) => {
    console.log(`Rotating anticlockwise by ${degrees} degrees`);
  };

  return (
    <div
      className="flex flex-col justify-center h-full bg-gray-400 rounded-lg p-4"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2
        className="text-2xl font-semibold mt-2 p-2 bg-red-500 w-24 h-12 rounded-lg text-center cursor-pointer hover:bg-red-600 hover:text-white active:scale-90 transition-all ease-in-out mb-4"
        onClick={handleRun}
      >
        Run
      </h2>

      <div className="mt-4 w-full">
        {droppedFeatures.length > 0 ? (
          droppedFeatures.map((featureData, index) => (
            <div
              key={index}
              className="p-4 bg-white border mb-2 rounded-md shadow-md"
            >
              <div className="text-xl font-semibold mb-2">
                {featureData.feature}
              </div>

              {featureData.feature === "MoveX" && featureData.inputValueX && (
                <div className="mb-2">
                  <strong>X-axis Move: </strong>
                  <span>{featureData.inputValueX} steps</span>
                </div>
              )}

              {featureData.feature === "MoveY" && featureData.inputValueY && (
                <div className="mb-2">
                  <strong>Y-axis Move: </strong>
                  <span>{featureData.inputValueY} steps</span>
                </div>
              )}

              {featureData.feature === "RotateClockwise" &&
                featureData.rotationValue && (
                  <div className="mb-2">
                    <strong>Rotation: </strong>
                    <span>{featureData.rotationValue}° Clockwise</span>
                  </div>
                )}

              {featureData.feature === "RotateAnticlockwise" &&
                featureData.rotationValue && (
                  <div className="mb-2">
                    <strong>Rotation: </strong>
                    <span>{featureData.rotationValue}° Anticlockwise</span>
                  </div>
                )}

              {featureData.feature === "GoToCoordinates" &&
                featureData.inputValueX &&
                featureData.inputValueY && (
                  <div className="mb-2">
                    <strong>Go to Coordinates: </strong>
                    <span>
                      X: {featureData.inputValueX}, Y: {featureData.inputValueY}
                    </span>
                  </div>
                )}
            </div>
          ))
        ) : (
          <p className="text-center text-lg">Drop features here</p>
        )}
      </div>
    </div>
  );
}

export default DragArea;
