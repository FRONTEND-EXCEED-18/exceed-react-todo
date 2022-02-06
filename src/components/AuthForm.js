import React from "react"

const AuthForm = (props) => {
  console.log(props)
  return (
    <form className="login-form" onSubmit={props.onSubmit}>
      {props.isRegister ? <input name="name" placeholder="name" /> : ""}
      <input name="email" placeholder="email" />
      <input name="password" placeholder="password" type="password" />
      <button className="btn-add-todo" type="submit">
        {props.isRegister ? "register" : "login"}
      </button>
    </form>
  )
}

export default AuthForm
