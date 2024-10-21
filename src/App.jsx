import React, { useState, useEffect } from "react";
import FeatureSection from "./components/FeatureSection";
import Playground from "./components/Playground";
import DragArea from "./components/DragArea";

function App() {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState(1);
  useEffect(() => {
    const initialImage = {
      id: imageId,
      x: 50,
      y: 100,
      rotation: 0,
      src: "/bunny.png",
    };
    setImages([initialImage]);
  }, []);

  const addImage = () => {
    const newImage = {
      id: imageId + 1,
      x: 200,
      y: 200,
      rotation: 0,
      src: "/bunny.png",
    };
    setImages([...images, newImage]);
    setImageId(imageId + 1);
  };

  const updatePositionX = (id, steps) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, x: image.x + steps } : image
    );
    setImages(updatedImages);
  };

  const updatePositionY = (id, steps) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, y: image.y + steps } : image
    );
    setImages(updatedImages);
  };

  const rotateClockwise = (id, degree) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, rotation: image.rotation + degree } : image
    );
    setImages(updatedImages);
  };

  const rotateAnticlockwise = (id, degree) => {
    const updatedImages = images.map((image) =>
      image.id === id ? { ...image, rotation: image.rotation - degree } : image
    );
    setImages(updatedImages);
  };

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

        <div className="basis-1/3 bg-gray-200 p-4 rounded-lg shadow-lg">
          <h2 className="text-center text-xl font-bold mb-2">
            Drag-Drop Section
          </h2>
          <DragArea />
        </div>

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
