// code your solution here
function superbowlWin(array) {
    const winningYear = array.find(obj => obj.result === "W");
    return winningYear ? winningYear.year : undefined;
  }