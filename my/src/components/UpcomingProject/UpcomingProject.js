import React from "react";
import Email from "../Contact/Email";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import sadface from "./sad-face.png";

const UpcomingProject = () => {
  return (
    <>
      <div className="container text-center my-5">
        <img style={{ height: "60px", width: "60px" }} src={sadface} alt="" />
        <h4>There are no upcoming projects at this moment.</h4>

        <h4>Check back again or leave your email, we'll update you.</h4>
      </div>

      {/* <Email /> */}

      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UpcomingProject;
