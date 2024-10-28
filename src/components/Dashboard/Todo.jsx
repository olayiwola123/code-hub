import React, { useState } from 'react';
import '../Dashboard/Todo.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([]); // Array to hold todos
  const [input, setInput] = useState(""); // Input field state
  const [priority, setPriority] = useState("Low"); // Task priority state
  const [dueDate, setDueDate] = useState(""); // Due date state
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  // Add Todo Handler
  const handleAddTodo = () => {
    if (input !== "") {
      setTodos([...todos, { task: input, priority, dueDate }]); // Add new task with priority and due date
      setInput("");
      setPriority("Low");
      setDueDate("");
      setShowModal(false); // Close modal after adding task
    }
  };

  // Delete Todo Handler
  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index); // Remove selected todo
    setTodos(newTodos);
  };

  // Open Modal to Add Todo
  const openModal = () => {
    setShowModal(true);
  };

  // Close Modal without Adding
  const closeModal = () => {
    setShowModal(false);
    setInput(""); // Reset fields on close
    setPriority("Low");
    setDueDate("");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>

      <button className="add-todo-btn" onClick={openModal}>
        Add New Task
      </button>

      {/* Task List */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`todo-item ${todo.priority.toLowerCase()}`}>
            <div className="todo-details">
              <span className="task-name">{todo.task}</span>
              <span className="task-priority">Priority: {todo.priority}</span>
              <span className="task-dueDate">Due: {todo.dueDate || "No due date"}</span>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Modal for Adding Todo */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Task</h2>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Enter task name" 
              className="input-task"
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input-priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <input 
              type="date" 
              value={dueDate} 
              onChange={(e) => setDueDate(e.target.value)} 
              className="input-date"
            />
            <div className="modal-buttons">
              <button onClick={handleAddTodo} className="modal-add-btn">Add Task</button>
              <button onClick={closeModal} className="modal-close-btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoApp;
