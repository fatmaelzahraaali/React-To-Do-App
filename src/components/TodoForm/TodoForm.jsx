import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (!title.trim()) return; // Avoid empty todos

    addTodo({ title, description }); // Send new todo to parent component
    setTitle(""); // Clear input fields
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h2>TODO APP</h2>
      <input
        type="text"
        placeholder="Enter Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter Todo Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Save</button>
    </form>
  );
};

export default TodoForm;
