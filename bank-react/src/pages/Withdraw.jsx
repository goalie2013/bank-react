import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import SubmitBtn from "../components/SubmitBtn";
import { UserContext } from "../main";

export default function Withdraw() {
  return (
    <div className="page-wrapper">
      <h1>Withdraw</h1>
      <Card style={{ width: "25rem", margin: "2rem", padding: "2rem" }}>
        <Card.Body className="deposit-card">
          <Form className="create-acc-form">
            <Form.Group className="mb-2" controlId="formWithdraw">
              <Form.Label style={{ fontSize: "24px" }}>
                Withdraw Amount
              </Form.Label>
              <Form.Control size="lg" type="text" placeholder="Withdraw" />
            </Form.Group>

            <SubmitBtn name="Withdraw" />
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
