import { CheckIcon, TrashIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import "./TodoListItem.css";

const TodoListItem = ({ todoId, label, onComplete, completed, onDelete }) => {
 return (
  <div className={clsx("todo-list-item", completed && "completed")}>
   <p>{label}</p>
   <div className="button-group">
    <button className={"complete-button"} onClick={() => onComplete(todoId)}>
     <CheckIcon />
    </button>
    <button className="delete-button" onClick={() => onDelete(todoId)}>
     <TrashIcon height={18} width={18} />
    </button>
   </div>
  </div>
 );
};

export default TodoListItem;
