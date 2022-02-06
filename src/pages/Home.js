import React, { useEffect, useState } from "react"
import AddTodoForm from "../components/AddTodoForm"
import TodoItem from "../components/TodoItem"
import { useAuth } from "../contexts/AuthProvider"
import { addTodo, deleteTodo, getTodo, toggleTodo } from "../service/todos"
import { getObjForm } from "../utils/form"

const Home = () => {
  const [todos, setTodos] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    getTodo().then((data) => {
      setTodos(data)
    })
  }, [])

  const onAddTodo = (e) => {
    e.preventDefault()
    const todoForm = getObjForm(e.target)
    addTodo(todoForm).then((data) => {
      console.log(data)
      setTodos((todos) => [...todos, data.todo])
    })
    e.target.reset()
  }

  const onDeleteTodo = (id) => {
    deleteTodo(id).then(() => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id))
    })
  }

  const onToggleTodo = (id, status) => {
    toggleTodo(id, status).then(() => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: status } : todo
        )
      )
    })
  }

  return (
    <div className="container">
      <h1>{user.name}'s Todolist</h1>
      <AddTodoForm onSubmit={onAddTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDeleteTodo}
            onToggle={onToggleTodo}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
