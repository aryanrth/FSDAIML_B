import React from "react";
import "./Image.css";
import cat from "./cat.jpg";

function ImageManipulation() {
  return <div className="imageCard">
    <div className="catdiv">
      <img src={cat} alt={cat.jpg} width={120} height={120} />
    </div>
    <div className="buttondiv">
      <button style={{backgroundColor:"orange"}}> Enhance Height</button>
      &nbsp; &nbsp; &nbsp;
      <button> Enhance width</button>
      <br />
      <button> Image Rotate</button>
      &nbsp; &nbsp; &nbsp;

      <button> color change</button>
    </div>
  </div>;
}

export default ImageManipulation;
