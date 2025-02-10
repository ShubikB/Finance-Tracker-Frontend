import React from "react";
import { Form } from "react-bootstrap";

const NewCustomInput = ({ label, ...rest }) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control {...rest} />
    </Form.Group>
  );
};

export default NewCustomInput;
