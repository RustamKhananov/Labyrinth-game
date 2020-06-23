import React, { useEffect, useState } from "react";
import "./Bee.scss";
import { useSelector, useDispatch } from "react-redux";
import { wrongAnswer, rightAnswer, setStep } from "../../store/store";

export const Bee = () => {
  const moves = useSelector((state) => state.moves);
  const usersChoice = useSelector((state) => state.usersChoice);
  const start = useSelector((state) => state.start);
  const [position, setPosition] = useState(start);
  const beePositions = useSelector((state) => state.beePositions);
  const dispatch = useDispatch();

  const fly = () => {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        dispatch(setStep(i));
        setPosition(beePositions[i]);
      }, i * 2000);
    }
    setTimeout(() => {
      if (position[0] === usersChoice[0] && +position[1] === usersChoice[1]) {
        dispatch(rightAnswer(true));
      } else {
        dispatch(wrongAnswer(true));
      }
    }, 21000);
  };

  useEffect(() => {
    setPosition(start);
  }, [start]);

  useEffect(() => {
    if (usersChoice.length > 0) {
      fly(moves);
    }
  }, [usersChoice]);

  const beeStyle = {
    top: `${(position[0] - 1) * 160 + 30}px`,
    left: `${(position[1] - 1) * 160 + 30}px`,
  };
  return <span className="Bee" style={beeStyle}></span>;
};
