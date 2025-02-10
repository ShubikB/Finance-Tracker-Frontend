import "./App.css"
// import Button from 'react-bootstrap/Button'

import { ToastContainer } from "react-toastify"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { DefaultLayout } from "./components/layout/DefaultLayout"
import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import { Auth } from "./auth/Auth"
import { useEffect } from "react"
import { useUser } from "./context/userContext"

function App() {
  const { autologin, user } = useUser()

  // const loginFromToken = async () => {
  //   return await autologin()
  // }

  // useEffect(() => {
  //   !user?._id && loginFromToken()
  // }, [user?._id])

  return (
    <div className='wrapper'>
      {/* {SignUp()} */}
      <Routes>
        <Route path='*' element={<DefaultLayout />}>
          {/* Public Pages */}
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />

          {/* signup Page */}
          <Route path='signup' element={<SignUp />} />

          {/* Private Pages */}
          {/* dashboard Page */}
          <Route
            path='dashboard'
            element={
              <Auth>
                <Dashboard />
              </Auth>
            }
          />
          {/* Transaction Page */}
          <Route
            path='transaction'
            element={
              <Auth>
                <Transaction />
              </Auth>
            }
          />
        </Route>
      </Routes>
      {/* <CustomComponent prop1="prop1 value">
        <SignUp />
      </CustomComponent> */}

      <ToastContainer />
    </div>
  )
}

export default App
