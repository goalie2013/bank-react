import React, { useState, useEffect, useContext, useRef } from "react";
import CustomCard from "../components/Card";
import Form from "react-bootstrap/Form";
import SubmitBtn from "../components/SubmitBtn";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import handleChange from "../helper";

export default function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  const ref = useRef(null);
  let navigate = useNavigate();

  if (ctx.users[ctx.users.length - 1] === currentUser) console.log("SAME");

  function handleWithdraw() {
    console.log("-- handleWithdraw --");
    console.log("withdrawValue", withdrawValue, typeof withdrawValue);

    if (currentUser.balance - withdrawValue < 0) {
      setStatus(`Transaction FAILED. Balance cannot be negative`);
      setShow(true);
      return false;
    }

    currentUser.balance -= withdrawValue;
    currentUser.transactions = [
      ...currentUser.transactions,
      `Withdraw $${withdrawValue}`,
    ];

    setStatus("Withdraw Complete!");
    setShow(true);
    setWithdrawValue("");
  }

  return (
    <div className="page-wrapper">
      <h1>Withdraw</h1>
      <CustomCard
        bgcolor="light"
        header="Withdraw From Account"
        status={status}
        body={
          <Form className="create-acc-form">
            <Form.Group className="mb-2" controlId="formWithdraw">
              <Form.Label style={{ fontSize: "1.5rem" }}>
                Withdraw Amount
              </Form.Label>
              <Form.Control
                required
                ref={ref}
                size="lg"
                type="text"
                placeholder="Withdraw"
                value={withdrawValue}
                onChange={(e) =>
                  handleChange(e, setWithdrawValue, setStatus, setShow, ref)
                }
              />
            </Form.Group>

            {show ? (
              <SubmitBtn name="Withdraw" disabled="true" />
            ) : (
              <SubmitBtn name="Withdraw" handleClick={handleWithdraw} />
            )}
          </Form>
        }
      />
      {/* DEVELOPMENT ONLY */}
      <div>{JSON.stringify(currentUser)}</div>
    </div>
  );
}
