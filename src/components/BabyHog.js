import React ,{useState} from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorMapper = {
  blue: BlueBaby,
  sun: SunBaby,
  glowing: GlowingBaby,
};

function BabyHog({name, hobby, eyeColor}) {

  const [weight, setWeight] = useState(10)

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    {e.target.name === "+" ? setWeight(weight + 1) : setWeight(weight - 1)}
  }

  return (
    <li className="hogbabies">
      <h1>Name: {name}</h1>
      <h3>Weight:{weight}</h3>
      <h3>Hobby: {hobby}</h3>
      <h4>Eye Color: {eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper[eyeColor]}
          style={{ height: `${200+weight}px` }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
