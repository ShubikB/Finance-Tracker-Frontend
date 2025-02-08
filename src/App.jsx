import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DefaultLayout from "./components/layout/DefaultLayout"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import Home from "./pages/Home"
import "./index.css"

const App = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      <Route path='*' element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='transaction' element={<Transaction />} />
      </Route>
    </Routes>
  )
}

export default App
