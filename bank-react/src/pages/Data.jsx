import React, { useContext } from "react";
import Transaction from "../components/Transaction";
import { UserContext } from "../main";
import Card from "react-bootstrap/Card";
import CustomCard from "../components/Card";

export default function Data() {
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];

  const transactions = currentUser.transactions.map((el, i) => {
    //`${i + 1}: ${el}`;
    return <Transaction key={i} idx={i} transaction={el} />;
  });

  return (
    <div className="page-wrapper">
      <h1>All Data</h1>
      <h3 style={{ marginTop: "2rem" }}>
        <b>Your Current Balance: {currentUser.balance}</b>
      </h3>
      {/* <h3>Transaction History</h3> */}
      <CustomCard
        bgcolor="light"
        header={`${currentUser.name} Transaction History`}
        statusText={status}
        body={<h4>{transactions}</h4>}
      ></CustomCard>
      {/* {transactions} */}
    </div>
  );
}
