import React from "react"

const Alert = ({ error }) => {
  return (
    <div className="alert-container">
      <h3>fail</h3>
      <p>{error.message}</p>
    </div>
  )
}

export default Alert
