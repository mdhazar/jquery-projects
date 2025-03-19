$(document).ready(function () {
  $("#add-btn").click(addTodo);
  $("#todo-input").keypress(function (e) {
    if (e.which === 13) addTodo();
  });

  function addTodo() {
    const todoText = $("#todo-input").val();
    if (todoText) {
      $("#todo-list").append(`
                        <li>
                            <span>${todoText}</span>
                            <button class="delete-btn">Delete</button>
                        </li>
                    `);
      $("#todo-input").val("");
    }
  }

  $(document).on("click", ".delete-btn", function () {
    $(this).parent().remove();
  });

  $(document).on("click", "li span", function () {
    $(this).toggleClass("completed");
  });
});
