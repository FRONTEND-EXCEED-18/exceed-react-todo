import axios from "axios"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/Alert"
import AuthForm from "../components/AuthForm"
import { useAuth } from "../contexts/AuthProvider"
import { register } from "../service/auth"
import { getObjForm } from "../utils/form"

const Register = () => {
  const [error, setError] = useState()
  const { setUserInfo } = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getObjForm(e.target)
    register(data)
      .then((data) => {
        setUserInfo(data.user)
      })
      .catch((resError) => {
        setError(resError.response.data)
      })
  }
  return (
    <div className="container" onSubmit={handleSubmit}>
      <h1>Register</h1>
      {error && <Alert error={error} />}
      <AuthForm isRegister={true} />
      <Link to="/login">login</Link>
    </div>
  )
}

export default Register
