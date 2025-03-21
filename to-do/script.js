$(document).ready(function () {
  loadTodos();

  $("#add-btn").click(addTodo);

  function addTodo() {
    if ($("#todo-input").val()) {
      $("#todo-list").append(`
        <li>
          <span>${$("#todo-input").val()}</span>

        </li>
      `);
      $("#todo-input").val("");
      saveTodos();
    }
  }

  $(document).on("click", "li", function () {
    $(this).remove();
    saveTodos();
  });

  function saveTodos() {
    const todos = [];
    $("#todo-list li").each(function () {
      todos.push({
        text: $(this).find("span").text(),
      });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      $("#todo-list").append(`
        <li>
          <span>${todo.text}</span>
          
        </li>
      `);
    });
  }
});
