import React, { useState, useContext } from "react";
import SubmitBtn from "../components/SubmitBtn";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CustomCard from "../components/Card";
import { UserContext } from "../main";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(UserContext);
  console.log("ctx", ctx);

  // ** TODO: Should I have useEffect since using document.xxx???
  // ** TODO: EMAIL VALIDATION
  function validate(field, label) {
    if (!field) {
      setStatus(`Error: ${label} must be filled out`);
      return false;
    }

    if (field === email && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      if (field === password && field.length < 8) {
        setStatus("PASSWORD MUST BE AT LEAST 8 CHARACTERS");
        document.documentElement.style.setProperty(
          "--password-txt-color",
          "red"
        );
        return false;
      }
    setStatus("");
    document.documentElement.style.setProperty("--password-txt-color", "gray");
    return true;
  }

  function handleCreate() {
    console.log("handleCreate", name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;

    console.log("Passed validation!!");
    ctx.users.push({
      name: name,
      email: email,
      password: password,
      balance: 0,
    });
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div className="page-wrapper">
      <h1>Create Account</h1>

      <CustomCard
        bgcolor="light"
        header="Create Account"
        statusText={status}
        body={
          show ? (
            <>
              <Card.Body>
                <Form className="create-acc-form">
                  <Form.Group className="mb-4" controlId="formName">
                    {/* <Form.Label>Name</Form.Label> */}
                    <Form.Control
                      required
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Control
                      required
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group
                    className="mb-4 txt-muted"
                    controlId="formPassword"
                  >
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <Form.Text>
                      <div className="txt-muted">
                        Must be at least 8 characters long
                      </div>
                    </Form.Text>
                  </Form.Group>

                  <SubmitBtn name="Create Account" handleClick={handleCreate} />
                </Form>
              </Card.Body>
            </>
          ) : (
            <>
              <h5 style={{ textAlign: "center" }}>Success</h5>
              <SubmitBtn name="Add Another Account" handleClick={clearForm} />
            </>
          )
        }
      />
    </div>
  );
}
