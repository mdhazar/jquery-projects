const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let circleTurn;

$(document).ready(function () {
  const $cellElements = $("[data-cell]");
  const $board = $("#board");
  const $winningMessageElement = $("#winningMessage");
  const $restartButton = $("#restartButton");
  const $winningMessageTextElement = $("[data-winning-message-text]");

  startGame();

  $restartButton.on("click", startGame);

  function startGame() {
    circleTurn = false;
    $cellElements.each(function () {
      $(this).removeClass(X_CLASS);
      $(this).removeClass(CIRCLE_CLASS);
      $(this).off("click");
      $(this).one("click", handleClick);
    });
    setBoardHoverClass();
    $winningMessageElement.removeClass("show");
  }

  function handleClick(e) {
    const $cell = $(this);
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark($cell, currentClass);
    if (checkWin(currentClass)) {
      endGame(false);
    } else if (isDraw()) {
      endGame(true);
    } else {
      swapTurns();
      setBoardHoverClass();
    }
  }

  function endGame(draw) {
    if (draw) {
      $winningMessageTextElement.text("Draw!");
    } else {
      $winningMessageTextElement.text(`${circleTurn ? "O's" : "X's"} Wins!`);
    }
    $winningMessageElement.addClass("show");
  }

  function isDraw() {
    return $cellElements.toArray().every((cell) => {
      return $(cell).hasClass(X_CLASS) || $(cell).hasClass(CIRCLE_CLASS);
    });
  }

  function placeMark($cell, currentClass) {
    $cell.addClass(currentClass);
  }

  function swapTurns() {
    circleTurn = !circleTurn;
  }

  function setBoardHoverClass() {
    $board.removeClass(X_CLASS);
    $board.removeClass(CIRCLE_CLASS);
    if (circleTurn) {
      $board.addClass(CIRCLE_CLASS);
    } else {
      $board.addClass(X_CLASS);
    }
  }

  function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        return $($cellElements[index]).hasClass(currentClass);
      });
    });
  }
});
