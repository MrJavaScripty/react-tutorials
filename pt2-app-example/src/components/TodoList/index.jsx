import TodoListItem from "../TodoListItem";
import "./TodoList.css";
/**
 * @typedef Todo
 * @property {string} label
 * @property {boolean} completed
 */

/**
 * @param {{
 * 	todos: Todo[],
 *  onTaskCompleted:(id: string) => void,
 *  onTaskDeleted:(id: string) => void
 * }} props
 */
const TodoList = ({ todos, onTaskCompleted, onTaskDeleted }) => {
 const sortedTodos = todos.sort((a) => (a.completed ? 1 : -1));

 if (todos.length === 0) {
  return (
   <div>
    <p>No todos</p>
   </div>
  );
 }

 return (
  <div className="todo-list">
   {sortedTodos.map((todo, index) => (
    <TodoListItem
     key={index}
     todoId={index}
     label={todo.label}
     onComplete={(id) => onTaskCompleted(id)}
     onDelete={(id) => onTaskDeleted(id)}
     completed={todo.completed}
    />
   ))}
  </div>
 );
};

export default TodoList;
