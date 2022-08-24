import React, { useState, useContext, useRef } from "react";
import SubmitBtn from "../components/SubmitBtn";
import CustomCard from "../components/Card";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { UserContext } from "../main";

// ** If using callback function from onChange, use ref
// OR can change state by invoking function in onChange and setting state there

export default function Deposit() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [depositVal, setDepositVal] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = ctx.users.slice(-1);
  const ref = useRef(null);

  console.log("depositVal", depositVal);

  function handleChange(e) {
    console.log("handleChange");
    setDepositVal(e.target.value);
    const target = e.target;
    const name = target.name;
    let error = "";

    console.log("target.value", target.value);
    console.log(typeof target.value);

    if (isNaN(target.value)) {
      setStatus(`${name} field can only be number`);
      setShow(true);
      return false;
    }
    if (!target.value) {
      setStatus(`${name} field cannot be empty`);
      setShow(true);
      return false;
    }

    if (parseInt(target.value) < 0) {
      console.log("NEGATIVE");
      setStatus(`${name} field cannot be negative`);
      setShow(true);
      return false;
    }

    console.log("ref", ref.current.value);
    console.log("depositVal", depositVal);
    setStatus("");
    if (ref.current.value) setShow(false);
    else setShow(true);
  }

  // TODO: both ref.current.value & depositVal are strings;
  // whichever you use, convert to int before adding to balance
  function handleDeposit() {
    console.log("handleDeposit");
    console.log(currentUser[0]);
    console.log("ref", ref.current.value);
    console.log(typeof ref.current.value);
    console.log("depositVal", depositVal);
    console.log(typeof depositVal);
    const balance = currentUser[0].balance;
    //ctx.users[ctx.users.length - 1].balance += balance;
  }

  return (
    <div className="page-wrapper">
      <h1>Deposit</h1>
      <Card style={{ width: "25rem", margin: "2rem", padding: "2rem" }}>
        <Card.Body className="deposit-card">
          <Form className="create-acc-form">
            <Form.Group className="mb-2" controlId="formDeposit">
              <Form.Label style={{ fontSize: "24px" }}>
                Deposit Amount
              </Form.Label>
              <Form.Control size="lg" type="text" placeholder="Deposit" />
            </Form.Group>

            <SubmitBtn name="Deposit" disabled="true" />
          </Form>
        </Card.Body>
      </Card>

      <CustomCard
        bgcolor="light"
        header="Deposit Into Account"
        status={status}
        body={
          <Card.Body className="deposit-card">
            <Form className="create-acc-form">
              <Form.Group className="mb-2" controlId="formDeposit">
                <Form.Label style={{ fontSize: "24px" }}>
                  Deposit Amount
                </Form.Label>
                <Form.Control
                  required
                  ref={ref}
                  size="lg"
                  type="text"
                  placeholder="Deposit"
                  value={depositVal}
                  onChange={handleChange}
                  /*onChange={(e) => setDepositVal(e.currentTarget.value)} */
                />
              </Form.Group>

              {show ? (
                <SubmitBtn name="Deposit" disabled="true" />
              ) : (
                <SubmitBtn name="Deposit" handleClick={handleDeposit} />
              )}
            </Form>
          </Card.Body>
        }
      />
    </div>
  );
}
