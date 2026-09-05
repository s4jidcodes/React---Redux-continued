import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoItems from "./components/TodoItems.jsx";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2026",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2026",
    },
    {
      name: "buy cake",
      dueDate: "3pm",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems></TodoItems>
    </center>
  );
}

export default App;
