import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import Withdraw from "./Withdraw";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

// ** If using callback function from onChange, use ref
// OR can change state by calling function in onChange and setting state there

export default function WithdrawWrap() {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];
  let navigate = useNavigate();

  // const modalStyles = {
  //   backgroundColor: "white",
  //   zIndex: 50,
  //   width: "50vw",
  //   // height: "40vh",
  //   boxShadow: "0 3rem 5rem rgba(0, 0, 0, 0.3)",
  //   borderRadius: "18px",
  //   padding: "2rem",
  //   display: "flex",
  // };

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
                Must create account to access Bank transactions.
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
          <Withdraw />
        </>
      )}
    </>
  );
}

/*
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
        <>
          <Withdraw />
        </>
      )}
*/
