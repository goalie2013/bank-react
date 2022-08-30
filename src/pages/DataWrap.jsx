import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../main";
import { useNavigate } from "react-router-dom";
import Data from "./Data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AccessCard from "../components/AccessCard";

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
          <AccessCard
            bodyTxt="Must create account to access Bank Transactions History."
            handleClick={handleClick}
          />
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
