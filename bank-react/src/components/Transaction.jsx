import React from "react";

export default function Transaction(props) {
  return (
    <h4>
      {props.idx + 1}: {props.transaction};
    </h4>
  );
}
