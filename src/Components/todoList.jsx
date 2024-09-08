import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CodePreview from "./snippetPreview/codePreview";


const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const titleExists = todos.some(
      (todo, index) => todo.title === title && index !== editingIndex
    );
    setError(titleExists ? "Title already exists!" : "");
  }, [title, todos, editingIndex]);

  const handleSave = () => {
    if (title.trim() === "" || description.trim() === "") {
      alert("Both title and description are required.");
      return;
    }
    if (error) {
      alert(error);
      return;
    }

    if (isEditing) {
      // Update existing todo
      const updatedTodos = todos.map((todo, index) =>
        index === editingIndex ? { title, description } : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      // Add new todo
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
    }

    setTitle("");
    setDescription("");
    setError("");
  };

  const handleEdit = (index) => {
    const todo = todos[index];
    setTitle(todo.title);
    setDescription(todo.description);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              rows="3"
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button onClick={handleSave} className="btn btn-primary">
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3>Todo List</h3>
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="mb-1">{todo.title}</h5>
                <p className="mb-0">{todo.description}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="container" style={{ marginTop: "3rem" }}>
        <h6>Todo list Component code</h6>
        <CodePreview path="src/Components/todoList.jsx" />
      </div>
    </div>
  );
};

export default TodoApp;
