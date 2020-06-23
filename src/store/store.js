import { createStore } from "redux";
import { makeNewGame } from "../helpers/makeNewGame";

const NEW_GAME = "NEW_GAME";
const SET_USERS_CHOICE = "SET_USERS_CHOICE";
const WRONG_ANSWER = "WRONG_ANSWER";
const RIGHT_ANSWER = "RIGHT_ANSWER";
const SET_STEP = "SET_STEP";

export const newGame = () => ({ type: NEW_GAME });
export const setUsersChoice = (usersChoice) => ({
  type: SET_USERS_CHOICE,
  usersChoice,
});
export const wrongAnswer = () => ({ type: WRONG_ANSWER });
export const rightAnswer = () => ({ type: RIGHT_ANSWER });
export const setStep = (step) => ({ type: SET_STEP, step });

const initialState = {
  goal: [],
  start: [],
  moves: [],
  usersChoice: [],
  beePositions: [],
  wrongAnswer: false,
  rightAnswer: false,
  step: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case NEW_GAME:
      return {
        ...initialState,
        ...makeNewGame(),
      };
    case SET_USERS_CHOICE:
      return {
        ...state,
        usersChoice: action.usersChoice,
      };
    case WRONG_ANSWER:
      return {
        ...state,
        wrongAnswer: true,
      };
    case RIGHT_ANSWER:
      return {
        ...state,
        rightAnswer: true,
      };
    case SET_STEP:
      return {
        ...state,
        step: action.step,
      };
    default:
      return {
        ...state,
      };
  }
};

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
