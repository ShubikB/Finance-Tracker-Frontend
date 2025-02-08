import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet /> {/* This will render the nested routes */}
      <Footer />
    </div>
  )
}

export default DefaultLayout
