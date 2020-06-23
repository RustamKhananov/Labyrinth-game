import React from "react";
import "./GameField.scss";
import { useSelector, useDispatch } from "react-redux";
import { setUsersChoice } from "../../store/store";
import { Bee } from "../Bee/Bee";

export const GameField = () => {
  const dispatch = useDispatch();
  const start = useSelector((state) => state.start);
  const usersChoice = useSelector((state) => state.usersChoice);
  const rows = [1, 2, 3];
  const columns = [1, 2, 3];

  const handleClick = (event) => {
    const choice = [
      parseInt(event.target.dataset.row),
      parseInt(event.target.dataset.column),
    ];
    dispatch(setUsersChoice(choice));
  };

  return (
    <div className="GameField">
      <Bee />
      <table className="GameField__table">
        <tbody className="GameField__tbody">
          {rows.map((row) => (
            <tr key={row} className="GameField__row">
              {columns.map((column) => (
                <td
                  key={row + column}
                  onClick={handleClick}
                  className={`GameField__cell ${
                    usersChoice[0] === row && usersChoice[1] === column
                      ? "GameField__cell--users-choice"
                      : ""
                  } ${
                    start[0] === row && start[1] === column
                      ? "GameField__cell--start"
                      : ""
                  }`}
                  data-column={column}
                  data-row={row}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
