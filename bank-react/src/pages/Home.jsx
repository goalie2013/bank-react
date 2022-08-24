import React from "react";
import CustomCard from "../components/Card";
import moneyPic from "../assets/money.jpeg";

export default function Home() {
  return (
    <div className="page-wrapper">
      <h1>Home</h1>
      <CustomCard
        bgHeaderColor="aqua"
        txtColor="#000"
        bgColor="#ccc"
        header="BadBank Welcome Page"
        title="Welcome to the bank"
        text="You can use this bank to deposit and withdraw savings"
        body={
          <img
            src={moneyPic}
            className="img-fluid"
            alt="Coins with rooting plant"
          />
        }
      />
    </div>
  );
}
