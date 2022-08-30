import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import Data from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function DataWrap() {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  let navigate = useNavigate();

  console.log("ctx", ctx);
  console.log("currentUser", currentUser);

  console.log("showModal value", showModal);

  // If context is empty, means no user signed up -->
  // Deny page entry &/or redirect to Create Account page
  useEffect(() => {
    ctx.users.length === 0 ? setShowModal(true) : setShowModal(false);
  }, []);

  function handleClick(btnEvent) {
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
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            // top: "60%",
          }}
        >
          <Card className="card-denied">
            <Card.Header style={{ color: "white", backgroundColor: "red" }}>
              ACCESS DENIED
            </Card.Header>
            <Card.Body style={{ padding: "2rem" }}>
              <p style={{ fontSize: "1.5em", marginBottom: "1rem" }}>
                No user detected.
                <br />
                Must create account to access Bank Transactions History.
              </p>
              <footer className="denied-btns">
                <Button
                  variant="primary"
                  className="denied-btn-1"
                  value="Create Account"
                  onClick={handleClick}
                >
                  Create Account
                </Button>
                <Button
                  variant="primary"
                  className="denied-btn-2"
                  value="Home"
                  onClick={handleClick}
                >
                  Home
                </Button>
              </footer>
            </Card.Body>
          </Card>

          <div className="overlay"></div>
        </div>
      ) : (
        <>
          <Data />
        </>
      )}
    </>
  );
}
