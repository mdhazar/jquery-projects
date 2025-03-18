$(document).ready(function () {
  const appendLocation = "main";
  let isDrawing = false;

  $("body").css({
    backgroundColor: "lightgray",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

    $(".cell")
      .mousedown(function () {
        isDrawing = true;
        $(this).css("background-color", "black");
      })
      .mouseover(function () {
        if (isDrawing) {
          $(this).css("background-color", "black");
        }
      });

    $(document).mouseup(function () {
      isDrawing = false;
    });
  }
  $(appendLocation).after("<button id='clear'>Clear Grid</button>");
  $(appendLocation).before("<div class='title'>Etch-A-Sketch</div>");
  $("#clear").click(function () {
    $(".cell").css("background-color", "white");
  });

  createGrid(16);
});
