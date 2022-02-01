import React from "react";
import HowManyParks from "./parks/HowManyParks.js";

function ColoradoStateParks() {
  HowManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;
