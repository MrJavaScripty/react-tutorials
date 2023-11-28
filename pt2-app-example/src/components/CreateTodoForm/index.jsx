const CreateTodoForm = ({ onCreate }) => {
 const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const todo = formData.get("todo");
  e.currentTarget.reset();
  onCreate(todo);
 };

 return (
  <form onSubmit={handleSubmit}>
   <label>
    <span>Todo</span>
    <input name="todo" type="text" />
   </label>
   <button type="submit">Create</button>
  </form>
 );
};

export default CreateTodoForm;
