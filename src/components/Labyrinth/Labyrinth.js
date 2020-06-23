import React, { useEffect } from "react";
import "./Labyrinth.scss";
import { GameField } from "../GameField/GameField";
import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../store/store";
import { Moves } from "../Moves/Moves";

export const Labyrinth = () => {
  const dispatch = useDispatch();
  const isWrong = useSelector((state) => state.wrongAnswer);
  const isRight = useSelector((state) => state.rightAnswer);

  useEffect(() => {
    dispatch(newGame());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(newGame());
  };

  return (
    <div className="Labyrinth">
      {isRight ? (
        <span className="Labyrinth__message">That`s right!!!</span>
      ) : (
        ""
      )}
      {isWrong ? (
        <span className="Labyrinth__message">Sorry, that`s wrong :(</span>
      ) : (
        ""
      )}
      <GameField />
      <Moves />
      <button onClick={handleClick} className="Labyrinth__new-game">
        Start new game
      </button>
    </div>
  );
};
