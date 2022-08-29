import React from "react";
import CustomCard from "../components/Card";
import moneyPic from "../assets/money.jpeg";
import { COLORS } from "../themes.js";

export default function Home() {
  return (
    <div className="page-wrapper">
      <h1>Home</h1>
      <CustomCard
        bgHeaderColor={COLORS.cardHeader}
        txtColor="#000"
        bgColor={COLORS.cardBackground}
        header="BadBank"
        title="Welcome to our Bank"
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
