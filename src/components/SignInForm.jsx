import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { CustomInput } from "./CustomInput"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import { useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { useUser } from "../context/userContext"

const initialState = {
  email: "",
  password: "",
}
export const SignInForm = () => {
  const { setUser, user } = useUser()
  const [form, setForm] = useState(initialState)

  const navigate = useNavigate()
  const location = useLocation()

  const goTo = location?.state?.from?.pathname || "/dashboard"

  console.log(2222, user)
  useEffect(() => {
    user?._id && navigate(goTo)
  }, [user?._id])

  const fields = [
    {
      label: "Email",
      placeholder: "John@email.com",
      required: true,
      type: "email",
      name: "email",
      value: form.email,
    },
    {
      label: "Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "password",
      value: form.password,
    },
  ]

  const handleOnChange = async (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = async (e) => {
    // prevent default

    e.preventDefault()

    try {
      // call login api
      const response = await axios.post("http://localhost:9001/api/v1/users/login", form)

      // show the success message
      toast.success(response.data.message)

      // store the jwt access tokan to localstorage
      localStorage.setItem("accessToken", response.data.accessToken)
      console.log(response.data.accessToken)

      // update user context
      console.log(response.data)
      setUser(response.data.user)

      // navigate to dashboard page
      navigate("/dashboard")
    } catch (err) {
      console.log(err)
      toast.error(err.response.data.message)
    }
  }

  return (
    <div className='border rounded p-4'>
      <h4 className='mb-5'>Sign In now!</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className='d-grid'>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}
