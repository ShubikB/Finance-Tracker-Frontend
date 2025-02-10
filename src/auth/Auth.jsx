import React from "react"
import { Navigate, useLocation } from "react-router-dom"
import { useUser } from "../context/userContext"

export const Auth = ({ children }) => {
  const { user } = useUser()
  const location = useLocation()
  console.log("WE authenticate the user")

  console.log("location", location)
  console.log(11111, user)
  return <>{user?._id ? children : <Navigate to='/' replace state={{ from: location }} />}</>
}
