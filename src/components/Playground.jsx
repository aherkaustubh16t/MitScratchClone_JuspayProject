import React, { useRef } from "react";

function Playground({ images, updatePositionX }) {
  const imageRef = useRef(null);

  const handleCollision = () => {
    const imageCollide = document.querySelector("#image-collide");

    const intervalId = setInterval(() => {
      const targetImgRect = imageRef.current.getBoundingClientRect();
      const collideImgRect = imageCollide.getBoundingClientRect();

      const isColliding = !(
        targetImgRect.right < collideImgRect.left ||
        targetImgRect.left > collideImgRect.right ||
        targetImgRect.bottom < collideImgRect.top ||
        targetImgRect.top > collideImgRect.bottom
      );

      if (isColliding) {
        imageRef.current.style.transition = "transform 1s ease";
        imageRef.current.style.transform = "scaleX(-1)";

        let k1 = targetImgRect.x;
        imageCollide.style.transition =
          "transform 1s ease-in-out, right 2s ease";
        imageCollide.style.transform = "scaleX(1)";
        imageCollide.style.right = `${1591 - k1}px`;

        imageCollide.style.transition = "right 1s ease";
        imageCollide.style.right = `${currentPosition}px`;

        imageRef.current.style.transition = "transform 0s ease, left 2s ease";
        imageRef.current.style.transform = "scaleX(-1)";

        imageRef.current.style.left = `${originalPosition}px`;

        clearInterval(intervalId);
      }
    }, 50);

    const currentPosition = parseInt(imageCollide.style.right, 10) || 8;
    const originalPosition = parseInt(imageRef.current.style.left, 10) || 0;

    imageCollide.style.transition = "opacity 0.5s ease";
    imageCollide.style.opacity = "1";

    const fun1 = () => {
      imageCollide.style.transition = "right 2s ease";
      imageCollide.style.right = `${currentPosition + 450}px`;

      const idToMove = 1;
      const steps = 430;
      updatePositionX(idToMove, steps);
    };
    setTimeout(fun1, 500);
  };

  const handleReset = () => {
    location.reload();
  };

  return (
    <div className="relative w-full h-full border border-gray-600 overflow-hidden">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt="Animated"
          className="absolute h-20 w-20"
          ref={image.id === 1 ? imageRef : null}
          style={{
            left: `${image.x}px`,
            top: `${image.y}px`,
            transform: `rotate(${image.rotation}deg)`,
            transition:
              image.id === 1
                ? "left 2s ease, transform 0.5s, top 0.5s"
                : "transform 0.5s, left 0.5s, top 0.5s",
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
