import React, { useState, useEffect, useContext, useRef } from "react";
import SubmitBtn from "../components/SubmitBtn";
import CustomCard from "../components/Card";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import handleChange from "../helper";
import dayjs from "dayjs";

// ** If using callback function from onChange, use ref
// OR can change state by calling function in onChange and setting state there (NOT WORKING??)

export default function Deposit() {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [depositValue, setDepositValue] = useState("");
  const [textColor, setTextColor] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  const ref = useRef(null);
  let navigate = useNavigate();

  const styles = {
    display: ctx.users.length === 1 ? "none" : "flex",
  };

  console.log("depositValue on render", depositValue);
  console.log("ctx", ctx);
  console.log("currentUser", currentUser);

  // If context is empty, means no user signed up -->
  // Deny page entry &/or redirect to Create Account page

  useEffect(() => {
    ctx.users.length === 0 ? setShowModal(true) : setShowModal(false);

    if (ctx.users.length === 0) {
      navigate("/");
    }
  }, []);

  function handleDeposit() {
    console.log("-- handleDeposit --");
    console.log("ref", ref.current.value, typeof ref.current.value);
    console.log("depositVal", depositValue, typeof depositValue);
    const depositInt = parseInt(depositValue);
    currentUser.balance += depositInt;
    currentUser.transactions = [
      ...currentUser.transactions,
      {
        info: `Deposit $${depositInt}`,
        timeStamp: dayjs().format("MM/DD/YYYY HH:mm:ss"),
      },
    ];

    setTextColor("green");
    setStatus("Deposit Complete!");
    setShow(true);
    setDepositValue("");
  }

  return (
    <div className="page-wrapper">
      <h1>Deposit</h1>
      <CustomCard
        bgcolor="light"
        header="Deposit Into Account"
        statusText={status}
        statusColor={textColor}
        body={
          <Form className="create-acc-form">
            <Form.Group className="mb-2" controlId="formDeposit">
              <Form.Label style={{ fontSize: "1.5rem" }}>
                Deposit Amount
              </Form.Label>
              <Form.Control
                required
                ref={ref}
                size="lg"
                type="text"
                placeholder="Deposit"
                value={depositValue}
                onChange={(e) =>
                  handleChange(
                    e,
                    setDepositValue,
                    setStatus,
                    setShow,
                    setTextColor,
                    ref
                  )
                }
                // onChange={handleChange}
                /*onChange={(e) => setDepositVal(e.currentTarget.value)} */
              />
            </Form.Group>

            {show ? (
              <SubmitBtn name="Deposit" disabled="true" />
            ) : (
              <SubmitBtn name="Deposit" handleClick={handleDeposit} />
            )}
          </Form>
        }
      />
      {/* DEVELOPMENT ONLY */}
      <div>{JSON.stringify(currentUser)}</div>
      {/* <div class="overlay"></div> */}
    </div>
  );
}
