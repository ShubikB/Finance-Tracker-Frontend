import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import NewSignInForm from "../components/NewSignInForm";

const NewLogin = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col md={6} className="bg-dark">
            <NewSignInForm />
          </Col>
          <Col md={6} className="bg-success">
            Decoration
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewLogin;
