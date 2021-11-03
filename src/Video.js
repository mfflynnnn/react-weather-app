import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Video() {
  return (
    <div className="Video">
      <video autoPlay muted loop id="myVideo">
        <source src="../public/images/clouds.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
