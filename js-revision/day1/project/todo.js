let todo = [];
let completeTodo = [];

let running = true;

while (running) {
  let option = prompt(`
Choose an option:
1) Display todo
2) Add a todo
3) Remove a todo
4) Complete a todo
5) Display completed todos
6) Exit
`);

  // Handle cancel button
  if (option === null) {
    alert("Program cancelled.");
    break;
  }

  switch (option) {
    case "1":
      // Display todos
      if (todo.length === 0) {
        alert("No todos available.");
      } else {
        let list = "Todo List:\n";

        todo.forEach((t, index) => {
          list += `${index}: ${t}\n`;
        });

        alert(list);
      }
      break;

    case "2":
      // Add todo
      let addTodo = prompt("Enter the todo item:");

      if (addTodo === null || addTodo.trim() === "") {
        alert("Invalid todo item.");
      } else {
        todo.push(addTodo);
        alert("Todo added successfully.");
      }
      break;

    case "3":
      // Remove todo
      if (todo.length === 0) {
        alert("No todos to remove.");
        break;
      }

      let deleteTodoNum = parseInt(prompt("Enter todo number to remove:"));

      if (
        isNaN(deleteTodoNum) ||
        deleteTodoNum < 0 ||
        deleteTodoNum >= todo.length
      ) {
        alert("Invalid todo number.");
      } else {
        let removed = todo.splice(deleteTodoNum, 1);
        alert(`Removed: ${removed[0]}`);
      }
      break;

    case "4":
      // Complete todo
      if (todo.length === 0) {
        alert("No todos to complete.");
        break;
      }

      let completeTodoNum = parseInt(prompt("Enter todo number to complete:"));

      if (
        isNaN(completeTodoNum) ||
        completeTodoNum < 0 ||
        completeTodoNum >= todo.length
      ) {
        alert("Invalid todo number.");
      } else {
        completeTodo.push(todo[completeTodoNum]);
        alert(`Completed: ${todo[completeTodoNum]}`);

        todo.splice(completeTodoNum, 1);
      }
      break;

    case "5":
      // Display completed todos
      if (completeTodo.length === 0) {
        alert("No completed todos.");
      } else {
        let completedList = "Completed Todos:\n";

        completeTodo.forEach((t, index) => {
          completedList += `${index}: ${t}\n`;
        });

        alert(completedList);
      }
      break;

    case "6":
      running = false;
      alert("Exiting app...");
      break;

    default:
      alert("Invalid option.");
  }
}
