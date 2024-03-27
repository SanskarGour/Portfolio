import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

function Parentpage() {
  const blobRef = useRef(null);
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const pointerMove = (event) => {
      const { clientX, clientY } = event;

      // Calculate new position with a slight lag
      const lag = 0.2; // Adjust the lag amount as needed
      const newX = blobPosition.x + (clientX - blobPosition.x) * lag;
      const newY = blobPosition.y + (clientY - blobPosition.y) * lag;

      // Update blob position
      blobRef.current.style.left = `${newX}px`;
      blobRef.current.style.top = `${newY}px`;

      // Update blob position state
      setBlobPosition({ x: newX, y: newY });
    };

    window.addEventListener("pointermove", pointerMove);

    return () => {
      window.removeEventListener("pointermove", pointerMove);
    };
  }, [blobPosition]);

  return (
    <div className="z-9">
      <div id="blur"></div>
      <div id="blob" ref={blobRef}></div>
      <div id="scrollable-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Parentpage;
