import axios from "axios"
import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState({})
  console.log(user)

  const getTransaction = () => {
    return [1, 2, 3]
  }

  const logout = () => {
    // empty user
    setUser({})

    // remove jwt token
    localStorage.removeItem("accessToken")
  }

  const autologin = async () => {
    // get the access token from Localstorage
    const token = localStorage.getItem("accessToken")

    if (token) {
      // call user detail api
      const response = await axios.get("http://localhost:9001/api/v1/users", {
        headers: {
          Authorization: token,
        },
      })

      if (response.data && response.data.status == "success") {
        //  token is valid
        setUser(response.data.user)
        return true
      } else {
        setUser({})
        return false
      }
    }
  }

  const providerObject = {
    user,
    setUser,
    logout,
    autologin,
  }

  return <UserContext.Provider value={providerObject}>{props.children}</UserContext.Provider>
}

export const useUser = () => useContext(UserContext)
