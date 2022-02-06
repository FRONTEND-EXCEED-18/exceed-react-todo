import React from "react"
import { useAuth } from "../contexts/AuthProvider"

const Navbar = () => {
  const { logout } = useAuth()
  return (
    <nav>
      <h1>Exceed Todo</h1>
      <button onClick={logout} className="btn-add-todo">
        logout
      </button>
    </nav>
  )
}

export default Navbar
