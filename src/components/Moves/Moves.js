import React from "react";
import "./Moves.scss";
import { useSelector } from "react-redux";

export const Moves = () => {
  const moves = useSelector((state) => state.moves);
  const step = useSelector((state) => state.step);
  return (
    <div className="Moves">
      {moves.map((move, index) => (
        <span
          key={move + index}
          className={`Moves__move ${
            index === step ? "Moves__move--active" : ""
          }`}
        >
          {move}
        </span>
      ))}
    </div>
  );
};
