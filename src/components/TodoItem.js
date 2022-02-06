import React from "react"
import { FaCheck, FaTrash } from "react-icons/fa"

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <p className="todo-title">{todo.title}</p>
      <button
        className="btn-todo-complete"
        onClick={() => onToggle(todo.id, !todo.completed)}
      >
        <FaCheck />
      </button>
      <button className="btn-todo-remove" onClick={() => onDelete(todo.id)}>
        <FaTrash />
      </button>
    </div>
  )
}

export default TodoItem
