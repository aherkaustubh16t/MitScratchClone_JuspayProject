import React, { useRef } from "react";

function Playground({ images, updatePositionX }) {
  const imageRef = useRef(null); // Create a ref for the image with ID 1

  const handleCollision = () => {
    const imageCollide = document.querySelector("#image-collide");

    // Set up an interval to check for collisions
    const intervalId = setInterval(() => {
      // Get the bounding rectangle of the image with ID 1 using the ref
      const targetImgRect = imageRef.current.getBoundingClientRect();
      const collideImgRect = imageCollide.getBoundingClientRect();

      // Check for collision
      const isColliding = !(
        targetImgRect.right < collideImgRect.left ||
        targetImgRect.left > collideImgRect.right ||
        targetImgRect.bottom < collideImgRect.top ||
        targetImgRect.top > collideImgRect.bottom
      );

      if (isColliding) {
        // Flip imageId 1 (using scaleX for horizontal flip)
        imageRef.current.style.transition = "transform 1s ease";
        imageRef.current.style.transform = "scaleX(-1)"; // Flip image horizontally

        let k1 = targetImgRect.x;
        imageCollide.style.transition =
          "transform 1s ease-in-out, right 2s ease";
        imageCollide.style.transform = "scaleX(1)";
        imageCollide.style.right = `${1591 - k1}px`;

        imageCollide.style.transition = "right 1s ease"; // Set transition for the right property
        imageCollide.style.right = `${currentPosition}px`; // Move the image to the right

        // Return imageId 1 to its original position after a delay
        // Flip it back to the original state
        imageRef.current.style.transition = "transform 0s ease, left 2s ease";
        imageRef.current.style.transform = "scaleX(-1)"; // Unflip image

        // Move it back to the original position
        imageRef.current.style.left = `${originalPosition}px`; // Original position of the image

        // Stop checking for collisions after detecting one
        clearInterval(intervalId);
      }
    }, 50); // Check every 50 milliseconds

    // Initial setup to move the colliding image
    const currentPosition = parseInt(imageCollide.style.right, 10) || 8;
    const originalPosition = parseInt(imageRef.current.style.left, 10) || 0; // Store the original position of imageId 1

    imageCollide.style.transition = "opacity 0.5s ease";
    imageCollide.style.opacity = "1";

    const fun1 = () => {
      imageCollide.style.transition = "right 2s ease"; // Set transition for the right property
      imageCollide.style.right = `${currentPosition + 450}px`; // Move the image to the right

      const idToMove = 1; // ID of the image you want to move
      const steps = 430; // Number of pixels to move
      updatePositionX(idToMove, steps); // Call the updatePositionX function
    };
    setTimeout(fun1, 500); // Call the updatePositionX function
  };

  const handleReset = () => {
    location.reload();
  };

  return (
    <div className="relative w-full h-full border border-gray-600 overflow-hidden">
      {/* Render each image */}
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="Animated"
          className="absolute h-20 w-20"
          ref={image.id === 1 ? imageRef : null} // Assign ref to the image with ID 1
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            transform: `rotate(${image.rotation}deg)`, // Rotate image based on rotation state
            transition:
              image.id === 1
                ? "left 2s ease, transform 0.5s, top 0.5s"
                : "transform 0.5s, left 0.5s, top 0.5s", // Conditional transition timing
          }}
        />
      ))}

      <br />
      <button
        className="text-lg font-semibold absolute left-2 top-2 bg-green-500 p-3 rounded-xl transition-all ease-in-out  hover:bg-green-600 hover:text-white active:scale-90 "
        onClick={handleCollision}
      >
        COLLIDE
      </button>
      <button
        className="text-xl font-semibold absolute left-32 top-2 bg-green-500 p-3 rounded-xl w-24 transition-all ease-in-out  hover:bg-green-600 hover:text-white active:scale-90 "
        onClick={handleReset}
      >
        Reset
      </button>
      <br />
      <img
        src="/bunny.png"
        alt=""
        id="image-collide"
        className="w-20 h-20 absolute transition-all right-8 top-[100px] transform scale-x-[-1] opacity-0"
      />
    </div>
  );
}

export default Playground;
