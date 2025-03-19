$(document).ready(function () {
  loadTodos();

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
      saveTodos();
    }
  }

  $(document).on("click", ".delete-btn", function () {
    $(this).parent().remove();
    saveTodos();
  });

  $(document).on("click", "li span", function () {
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
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    todos.forEach((todo) => {
      $("#todo-list").append(`
        <li>
          <span>${todo.text}</span>
          <button class="delete-btn">Delete</button>
        </li>
      `);
    });
  }
});
