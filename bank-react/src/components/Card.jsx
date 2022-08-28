import React from "react";
import Card from "react-bootstrap/Card";

export default function CustomCard(props) {
  // Dynamic Styles
  // Separate Card Header & Body so doesn't have to be the same color
  function classes(str) {
    if (str === "header") {
      const bg = props.bgHeaderColor ? " bg-" + props.bgHeaderColor : " ";
      const txt = props.txtHeaderColor
        ? " text-" + props.txtHeaderColor
        : " text-black";
      console.log("bg", bg);
      return "card mb-3 " + bg + txt;
    } else {
      const bg = props.bgColor ? " bg-" + props.bgColor : " ";
      const txt = props.txtColor ? " text-" + props.txtColor : " text-black";
      // console.log("bg", bg);
      return "card mb-3 " + bg + txt;
    }
  }

  return (
    <Card
      className={classes()}
      style={{
        backgroundColor: props.bgColor,
        width: "25rem",
        marginTop: "2.5rem",
      }}
    >
      <Card.Header
        className={classes("header")}
        style={{ backgroundColor: props.bgHeaderColor }}
      >
        {props.header}
      </Card.Header>
      <Card.Body>
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </Card.Body>
    </Card>
  );
}
