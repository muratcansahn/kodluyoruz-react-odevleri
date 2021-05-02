import React, { useState } from "react";
import Coin from "./Coin";
import head from "./head_image.jpg";
import tail from "./tail_image.jpg";
import "./CoinContainer.css";
import { choice } from "./helpers";

/** CoinContainer: holds state about #flips/#heads/#tails, and current coin. */

function CoinContainer(props) {
  const [coin, setCoin] = useState();
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  const handleClick = () => {
    const newCoin = choice(props.coins);
    setCoin(newCoin);
    if (newCoin.side === "head") {
      setHeadCount((oldCount) => oldCount + 1);
    } else {
      setTailCount((oldCount) => oldCount + 1);
    }
  };

  const currCoin = coin ? <Coin side={coin.side} imgSrc={coin.imgSrc} /> : null;

  return (
    <div className="CoinContainer">
      <h2>Yazı Tura Oyunu</h2>
      {currCoin}
      <button onClick={handleClick}>At</button>
      <p>
        {headCount + tailCount} atıştan, {headCount} tanesi yazı,
        {tailCount} tanesi tura geldi.
      </p>
    </div>
  );
}

CoinContainer.defaultProps = {
  coins: [
    {
      side: "head",
      imgSrc: head,
    },
    {
      side: "tail",
      imgSrc: tail,
    },
  ],
};

export default CoinContainer;
