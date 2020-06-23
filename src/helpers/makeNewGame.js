export const makeNewGame = () => {
  const start = [Math.ceil(Math.random() * 3), Math.ceil(Math.random() * 3)];
  let moves = [];
  const beePositions = [];

  let goal = [...start];
  for (let i = 0; i < 10; i++) {
    let possibleMoves = [];
    if (goal[0] !== 3) {
      possibleMoves.push("down");
    }
    if (goal[0] !== 1) {
      possibleMoves.push("up");
    }
    if (goal[1] !== 1) {
      possibleMoves.push("left");
    }
    if (goal[1] !== 3) {
      possibleMoves.push("right");
    }
    const index = Math.floor(Math.random() * possibleMoves.length);
    const move = possibleMoves[index];
    moves.push(move);

    switch (move) {
      case "up":
        goal[0] = goal[0] - 1;
        break;
      case "down":
        goal[0] = goal[0] + 1;
        break;
      case "left":
        goal[1] = goal[1] - 1;
        break;
      case "right":
        goal[1] = goal[1] + 1;
        break;
      default:
    }
    beePositions.push([...goal]);
  }
  return {
    goal: goal,
    moves: moves,
    start: start,
    beePositions: beePositions,
    usersChoice: [],
  };
};
