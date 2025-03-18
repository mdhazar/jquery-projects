$(document).ready(function () {
  const appendLocation = "main";
  $("body").css({
    backgroundColor: "lightgray",
    margin: 0,
    padding: 0,
  });
  $(appendLocation).css({
    display: "grid",
    gridTemplateColumns: "repeat(16, 1fr)",
    gridTemplateRows: "repeat(16, 1fr)",
    border: "1px solid black",
    width: "700px",
    height: "700px",
  });
  function createGrid(size) {
    $(appendLocation).empty();
    $(appendLocation).css({
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      gridTemplateRows: `repeat(${size}, 1fr)`,
    });
    for (let i = 0; i < size ** 2; i++) {
      $(appendLocation).append(
        '<div class="cell" style="background-color: white; border: 1px solid black;"></div>'
      );
    }
  }
  createGrid(16);
});
