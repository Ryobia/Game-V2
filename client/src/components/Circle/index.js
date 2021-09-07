import React, { useState } from "react";

const Circle = () => {
  let first = function () {};

  return (
    <div>

      <section className="buttons">
        <button onClick={first}>First</button>
        <button>Second</button>
        <button>Third</button>
        <button>Fourth</button>
      </section>

      <div className="circle-div">
        <div id="outer-orbit" className="first">
          <div className="outer-orbit-cirlces"></div>
        </div>
        <div id="outer-orbit" className="second">
          <div className="outer-orbit-cirlces"></div>
        </div>
        <div id="outer-orbit" className="third">
          <div className="outer-orbit-cirlces"></div>
        </div>
        <div id="outer-orbit" className="fourth">
          <div className="outer-orbit-cirlces"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Circle;
