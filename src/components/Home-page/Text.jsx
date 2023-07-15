import React from "react";
import TypewriterComponent from "typewriter-effect";
import "../Home-page/Home-page.css";

function Text() {
  return (
    <TypewriterComponent
      options={{
        strings: ["React developer", "Front end developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;
