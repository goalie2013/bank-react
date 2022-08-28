import React, { useContext } from "react";
import Transaction from "../components/Transaction";
import { UserContext } from "../main";

export default function Data() {
  const ctx = useContext(UserContext);
  const currentUser = ctx.users[ctx.users.length - 1];

  const x = currentUser.transactions.map((el, i) => {
    //`${i + 1}: ${el}`;
    return <Transaction key={i} idx={i} transaction={el} />;
  });

  return (
    <div className="page-wrapper">
      <h1>All Data</h1>
      <h3>
        <b>Your Current Balance: {currentUser.balance}</b>
      </h3>
      <div>{JSON.stringify(currentUser)}</div>
      <h3>Transaction History</h3>
      <h4>{x}</h4>
    </div>
  );
}
