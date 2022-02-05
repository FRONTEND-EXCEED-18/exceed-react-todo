import "./App.css"
import { BrowserRouter, Routes } from "react-router-dom"
import AuthProvider from "./contexts/AuthProvider"

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>{/* add route here */}</Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
