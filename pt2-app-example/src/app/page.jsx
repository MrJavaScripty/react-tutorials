import { useEffect, useMemo, useRef, useState } from "react";
import CreateTodoForm from "../components/CreateTodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
 const [todos, setTodos] = useState([]);
 const dialogRef = useRef(null);

 const remainingTodos = useMemo(
  () => todos.filter((todo) => !todo.completed),
  [todos]
 );

 useEffect(() => {
  const todoAppTitle = "What-Todo";
  if (remainingTodos.length === 0) {
   document.title = todoAppTitle;
  } else {
   document.title = `${todoAppTitle} | ${remainingTodos.length} left`;
  }
 }, [todos.length, remainingTodos.length]);

 const handleTodoCreateEvent = (todo) => {
  setTodos((previousTodos) => [
   ...previousTodos,
   { label: todo, completed: false }
  ]);
  dialogRef.current.close();
 };

 return (
  <main>
   <dialog ref={dialogRef}>
    <CreateTodoForm onCreate={handleTodoCreateEvent} />
   </dialog>
   <button
    onClick={() => {
     dialogRef.current.showModal();
    }}
   >
    Create Todo
   </button>
   <TodoList
    todos={todos}
    onTaskCompleted={(id) => {
     console.log(id);
     const newTodos = [...todos];
     newTodos[id].completed = true;
     setTodos(newTodos);
    }}
    onTaskDeleted={(id) => {
     const newTodos = [...todos];
     newTodos.splice(id, 1);
     setTodos(newTodos);
    }}
   />
  </main>
 );
};

export default Home;
