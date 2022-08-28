import React, { useState, useEffect, useContext, useRef } from "react";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import Deposit from "./Deposit";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// ** If using callback function from onChange, use ref
// OR can change state by calling function in onChange and setting state there (NOT WORKING??)

export default function DepositNew() {
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const [depositValue, setDepositValue] = useState("");
  const [textColor, setTextColor] = useState("");
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  const ref = useRef(null);
  let navigate = useNavigate();

  const modalStyles = {
    backgroundColor: "white",
    zIndex: 50,
    width: "50vw",
    // height: "40vh",
    boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
    borderRadius: "18px",
    padding: "2rem",
    display: "flex",
  };

  console.log("depositValue on render", depositValue);
  console.log("ctx", ctx);
  console.log("currentUser", currentUser);

  console.log("showModal vvalue", showModal);

  // If context is empty, means no user signed up -->
  // Deny page entry &/or redirect to Create Account page

  useEffect(() => {
    ctx.users.length === 0 ? setShowModal(true) : setShowModal(false);

    if (ctx.users.length === 0) {
      navigate("/");
    }
  }, []);

  function handleClick(btnEvent) {
    console.log("---- DepositNew handleClick ----");

    btnEvent.target.value === "Home"
      ? navigate("/")
      : navigate("/createaccount");
  }

  return (
    <>
      {showModal ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // top: "60%",
          }}
        >
          <Modal.Dialog style={modalStyles}>
            <Modal.Header>
              <Modal.Title style={{ color: "red" }}>Access Denied</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p style={{ fontSize: "1.5em", marginTop: "1rem" }}>
                No user detected.
                <br />
                Must create account to access Bank transactions.
              </p>
            </Modal.Body>

            <Modal.Footer
              style={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                variant="primary"
                style={{
                  marginRight: "1rem",
                  width: "40%",
                  padding: "1rem",
                }}
                value="Create Account"
                onClick={handleClick}
              >
                Create Account
              </Button>
              <Button
                variant="primary"
                style={{
                  width: "40%",
                  padding: "1rem",
                }}
                value="Home"
                onClick={handleClick}
              >
                Home
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
          <div className="overlay"></div>
        </div>
      ) : (
        <div className="page-wrapper">
          <Deposit />
        </div>
      )}
    </>
  );
}
