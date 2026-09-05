import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <div className="todo-container">
      {todoItems.map(item => (
        <TodoItem
          key={item.id}
          todoDate={item.dueDate}
          todoName={item.todoName}
        ></TodoItem>
      ))}
      <TodoItem todoDate="4/10/2026" todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="4/10/2026" todoName="Go to College"></TodoItem>
    </div>
  );
};
export default TodoItems;
