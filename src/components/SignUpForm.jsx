import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { CustomInput } from "./CustomInput"
import { useState } from "react"
import axios from "axios"
import { Slide, toast, Zoom } from "react-toastify"

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export const SignUpForm = () => {
  const [form, setForm] = useState(initialState)

  const fields = [
    {
      label: "Name",
      placeholder: "John Smith",
      required: true,
      type: "text",
      name: "username",
      value: form.username,
    },
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
    {
      label: "Confirm Password",
      placeholder: "******",
      required: true,
      type: "password",
      name: "confirmPassword",
      value: form.confirmPassword,
    },
  ]

  const handleOnChange = async (e) => {
    console.log(1111, e.target.name, e.target.value)

    const updatedForm = {
      ...form,
      [e.target.name]: e.target.value,
    }

    console.log("updatedForm", updatedForm)

    setForm(updatedForm)
  }
  const handleOnSubmit = async (event) => {
    // 1. prevent the default action
    event.preventDefault()
    alert("HANDLE ON SUBMIT")

    // 2. call signup api

    try {
      const response = await axios.post("http://localhost:9001/api/v1/users/signup", form)

      toast.success(response.data.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      })
    } catch (error) {
      console.log(error)
      toast(error.response.data.message, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      })
    }
  }

  return (
    <div className='border rounded p-4'>
      <h4 className='mb-5'>Sign up now!</h4>
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
