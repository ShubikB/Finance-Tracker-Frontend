import React from "react";
import { Button, Form } from "react-bootstrap";
import NewCustomInput from "./NewCustomInput";

const NewSignInForm = () => {
  const inputFields = [
    {
      type: "email",
      label: "Email address",
      controlId: "formBasicEmail",
      required: true,
      placeholder: "Email",
      name: "email",
    },
    {
      type: "password",
      label: "Password",
      controlId: "formBasicPassword",
      required: true,
      placeholder: "Password",
      name: "password",
    },
  ];

  return (
    <>
      <Form>
        {inputFields.map((item) => {
          return <NewCustomInput key={item.controlId} {...item} />;
        })}

        {/* 
        <NewCustomInput
          type="email"
          label="Email address"
          controlId="formBasicEmail"
          placeholder="Email"
        />

        <NewCustomInput
          type="password"
          label="Password address"
          controlId="formBasicPassword"
          placeholder="Password"
        /> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default NewSignInForm;
