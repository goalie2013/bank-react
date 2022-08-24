import React from "react";
import Button from "react-bootstrap/Button";

export default function SubmitBtn(props) {
  return props.disabled ? (
    <Button
      disabled
      variant="primary"
      className="submit-btn py-3"
      style={{
        backgroundColor: "rgb(104, 29, 87)",
        borderColor: "rgb(104, 29, 87)",
      }}
      onClick={props.handleClick}
    >
      {props.name}
    </Button>
  ) : (
    <Button
      variant="primary"
      className="submit-btn py-3"
      style={{
        backgroundColor: "rgb(104, 29, 87)",
        borderColor: "rgb(104, 29, 87)",
      }}
      onClick={props.handleClick}
    >
      {props.name}
    </Button>
  );
}
