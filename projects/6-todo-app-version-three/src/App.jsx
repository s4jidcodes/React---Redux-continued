import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // todoItems is the state that stores all Todo items
  // Initially, the list is empty
  const [todoItems, setTodoItems] = useState([]);

  // This function is called when a new Todo item is added
  // itemName -> name of the Todo
  // itemDueDate -> due date of the Todo
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);

    // Create a new array using the spread operator
    // It keeps all existing Todo items
    // and adds the new Todo item at the end
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    // Update the state with the new Todo list
    setTodoItems(newTodoItems);
  };

  // This function is called when the Delete button is clicked
  const handleDeleteItem = (todoItemName) => {
    // filter() creates a new array
    // It keeps only the items whose name is NOT equal
    // to the item we want to delete
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);

    // Update the state with the filtered list
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      {/* Displays the Todo App heading */}
      <AppName />

      {/* 
        AddTodo receives handleNewItem as a prop.
        When a new Todo is submitted,
        AddTodo calls this function.
      */}
      <AddTodo onNewItem={handleNewItem} />

      {/* 
        If there are no Todo items,
        WelcomeMessage will be displayed.
      */}
      {todoItems.length === 0 && <WelcomeMessage />}

      {/* 
        TodoItems receives:
        1. todoItems -> complete Todo list
        2. onDeleteClick -> delete function
      */}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;

/*
sajid explanationnn

3. TodoItems ko data milta hai

<TodoItems
  todoItems={todoItems}
  onDeleteClick={handleDeleteItem}
/>

Yahan props ke through data child component mein ja raha hai.

App
 │
 ├── todoItems (state)
 │
 ├── AddTodo
 │     └── onNewItem → handleNewItem()
 │
 └── TodoItems
       ├── todoItems
       └── onDeleteClick → handleDeleteItem()
🧠 Sabse important concept

Tera App.jsx basically parent component + state manager ka kaam kar raha hai.

AddTodo
   ↓
User adds Todo
   ↓
handleNewItem()
   ↓
setTodoItems()
   ↓
State updated
   ↓
App re-renders
   ↓
TodoItems gets updated data

Delete ke case mein:

Delete Button
     ↓
handleDeleteItem()
     ↓
filter()
     ↓
setTodoItems()
     ↓
State updated
     ↓
UI automatically updates

Ye React ka core pattern hai:
State → Props → Event Handler → State Update → Re-render.

*/
