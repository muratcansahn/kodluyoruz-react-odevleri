import React from "react";
import "./Coin.css";
import CrossfadeImage from "react-crossfade-image";
/** Coin: simple & stateless: just show the name & image of current coin. */

function Coin(props) {
  return (
    <div className="Coin">
      <CrossfadeImage src={props.imgSrc} alt={props.side} duration={1000} />
    </div>
  );
}

export default Coin;
