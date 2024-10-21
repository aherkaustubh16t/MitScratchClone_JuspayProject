import React, { useState, useEffect } from "react";
import FeatureSection from "./components/FeatureSection";
import Playground from "./components/Playground";
import DragArea from "./components/DragArea";

function App() {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState(1); // Start ID from 1

  // Initialize with one image on component mount
  useEffect(() => {
    const initialImage = {
      id: imageId, // Use the initial ID
      x: 50, // Initial X position
      y: 100, // Initial Y position
      rotation: 0, // Initial rotation
      src: "/bunny.png", // Example image source
    };
    setImages([initialImage]); // Set the initial image in the state
  }, []); // Empty dependency array to run only once on mount

  // Function to add a new image with incremented ID
  const addImage = () => {
    const newImage = {
      id: imageId + 1, // Increment ID for the new image
      x: 200, // Initial X position
      y: 200, // Initial Y position
      rotation: 0, // Initial rotation
      src: "/bunny.png", // Example image source
    };
    setImages([...images, newImage]); // Add the new image to the images array
    setImageId(imageId + 1); // Increment the image ID for the next image
  };

  // Update X-axis position for a specific image
  const updatePositionX = (id, steps) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, x: image.x + steps } : image
    );
    setImages(updatedImages);
  };

  // Function to update the image's position on the Y-axis
  const updatePositionY = (id, steps) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, y: image.y + steps } : image
    );
    setImages(updatedImages);
  };

  // Function to rotate the image clockwise
  const rotateClockwise = (id, degree) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, rotation: image.rotation + degree } : image
    );
    setImages(updatedImages);
  };

  // Function to rotate the image anticlockwise
  const rotateAnticlockwise = (id, degree) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, rotation: image.rotation - degree } : image
    );
    setImages(updatedImages);
  };

  // Function to move image to specific (x, y) coordinates
  const goToCoordinates = (id, x, y) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, x: x, y: y } : image
    );
    setImages(updatedImages);
  };

  return (
    <>
      <h1 className="text-2xl font-bold  text-center bg-blue-400 p-2">
        Visual Coding Environment
      </h1>
      <div className="flex flex-row gap-4 h-screen p-2">
        {/* Feature Section */}
        <div className="basis-1/3 p-4 rounded-lg shadow-lg bg-slate-300">
          <h2 className="text-center text-xl font-bold bg-white p-2 rounded-lg shadow-xl">
            Features Section
          </h2>
          <FeatureSection
            updatePositionX={updatePositionX}
            updatePositionY={updatePositionY}
            rotateClockwise={rotateClockwise}
            rotateAnticlockwise={rotateAnticlockwise}
            goToCoordinates={goToCoordinates}
          />
          <button
            onClick={addImage}
            className="px-3 py-2 text-lg font-semibold bg-green-500 rounded-md absolute bottom-2 left-28 hover:bg-green-700 hover:text-white transition-all duration-200 active:scale-90"
          >
            Add New Image
          </button>
        </div>
        {/* Drag-Drop Section */}
        <div className="basis-1/3 bg-gray-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-center text-xl font-bold mb-2">
            Drag-Drop Section
          </h2>
          <DragArea />
        </div>
        {/* Playground Section */}
        <div className="basis-1/2 bg-gray-600 p-4 rounded-lg shadow-lg">
          <h2 className="text-center text-xl bg-neutral-200 p-2 font-bold rounded-lg">
            Playground Section
          </h2>
          <Playground images={images} updatePositionX={updatePositionX} />
        </div>
      </div>
    </>
  );
}

export default App;
