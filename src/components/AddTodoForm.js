import React from "react"

const AddTodoForm = ({ onSubmit }) => {
  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <input placeholder="add todo" name="title" />
      <button className="btn-add-todo" type="submit">
        add
      </button>
    </form>
  )
}

export default AddTodoForm
