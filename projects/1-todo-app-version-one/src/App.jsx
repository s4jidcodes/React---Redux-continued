import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
import TodoItem1 from './components/TodoItem1.jsx';
import TodoItem2 from './components/TodoItem2.jsx';
import "./App.css";

function App() {
  return (
    <centre class="todo-container">
      <AppName />
      <AddTodo />
      
   <TodoItem1></TodoItem1>
    <TodoItem2/>

    </centre>
  );
}

export default App;
