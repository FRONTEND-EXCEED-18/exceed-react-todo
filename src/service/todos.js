import axios from "axios"

export async function getTodo() {
  const res = await axios.get("http://localhost:4000/todos")
  return res.data
}

export async function addTodo(todo) {
  const res = await axios.post("http://localhost:4000/todos", todo)
  return res.data
}

export async function toggleTodo(id, status) {
  const res = await axios.patch(`http://localhost:4000/todos/${id}`, {
    completed: status,
  })
  return res.data
}

export async function deleteTodo(id) {
  const res = await axios.delete(`http://localhost:4000/todos/${id}`)
  return res.data
}
