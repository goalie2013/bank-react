import React, { useState, useContext, useRef } from "react";
import CustomCard from "../components/Card";
import Form from "react-bootstrap/Form";
import SubmitBtn from "../components/SubmitBtn";
import { UserContext } from "../main";
import handleChange from "../helper";
import dayjs from "dayjs";
import { COLORS } from "../themes";

export default function Withdraw() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [withdrawValue, setWithdrawValue] = useState("");
  const [textColor, setTextColor] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  const ref = useRef(null);

  if (ctx.users[ctx.users.length - 1] === currentUser) console.log("SAME");

  function handleWithdraw() {
    console.log("-- handleWithdraw --");
    console.log("withdrawValue", withdrawValue, typeof withdrawValue);

    if (currentUser.balance - withdrawValue < 0) {
      setTextColor("red");
      setStatus(`Transaction FAILED. Balance cannot be negative`);
      setShow(true);
      return false;
    }

    currentUser.balance -= withdrawValue;
    currentUser.transactions = [
      ...currentUser.transactions,
      {
        info: `Withdraw $${withdrawValue}`,
        timeStamp: dayjs().format("MM/DD/YYYY HH:mm:ss"),
      },
    ];

    setTextColor("green");
    setStatus("Withdraw Complete!");
    setShow(true);
    setWithdrawValue("");
  }

  return (
    <div className="page-wrapper">
      <h1>Withdraw</h1>
      <CustomCard
        bgHeaderColor={COLORS.cardHeader}
        header="Withdraw From Account"
        bgColor={COLORS.cardBackground}
        statusText={status}
        statusColor={textColor}
        body={
          <Form className="form">
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
                  handleChange(
                    e,
                    setWithdrawValue,
                    setStatus,
                    setShow,
                    setTextColor,
                    ref
                  )
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
