import React, { useState, useContext } from "react";
import SubmitBtn from "../components/SubmitBtn";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CustomCard from "../components/Card";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="page-wrapper">
      <h1>Create Account</h1>
      <Card style={{ width: "25rem", margin: "2rem", padding: "2rem" }}>
        <Card.Body>
          <Form className="create-acc-form">
            <Form.Group className="mb-4" controlId="formName">
              {/* <Form.Label>Name</Form.Label> */}
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPassword">
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Must be at least 6 characters long
              </Form.Text>
            </Form.Group>

            <SubmitBtn name="Create Account" />
          </Form>
        </Card.Body>
      </Card>

      <CustomCard
        bgcolor="light"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />{" "}
              <br />
            </>
          ) : (
            <></>
          )
        }
      />
    </div>
  );
}
