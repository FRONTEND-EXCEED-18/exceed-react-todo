import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const setUserInfo = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate("/home")
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser({})
    navigate("/login")
  }

  useEffect(() => {
    const oldUser = localStorage.getItem("user")
    if (oldUser) {
      navigate("/home")
      setUser(JSON.parse(oldUser))
    } else {
      navigate("/login")
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
