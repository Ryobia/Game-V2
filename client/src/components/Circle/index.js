import React, { useState } from "react";

const Circle = () => {
  return (
    <div className="circle-div">
      <svg
        width="400"
        height="400"
        viewBox="0 0 496 496"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M248 0C111 0 0 111 0 248C0 385 111 496 248 496C385 496 496 385 496 248C496 111 385 0 248 0ZM248 448C137.5 448 48 358.5 48 248C48 137.5 137.5 48 248 48C358.5 48 448 137.5 448 248C448 358.5 358.5 448 248 448Z"
          fill="black"
        />
      </svg>

      <div id="outer-orbit">
    <div class="outer-orbit-cirlces"></div>
  </div>
    </div>
  );
};

export default Circle;