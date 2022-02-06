import React, { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import AuthForm from "../components/AuthForm"
import { useAuth } from "../contexts/AuthProvider"
import { login } from "../service/auth"
import { getObjForm } from "../utils/form"

const Login = () => {
  const [error, setError] = useState()

  const { setUserInfo } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getObjForm(e.target)
    login(data)
      .then((data) => {
        setUserInfo(data.user)
      })
      .catch((resError) => {
        setError(resError.response.data)
      })
  }

  return (
    <div className="container">
      <h1>Login</h1>
      {error && <Alert error={error} />}
      <AuthForm isRegister={false} onSubmit={handleSubmit} />
      <Link to="/register">register</Link>
    </div>
  )
}

export default Login
