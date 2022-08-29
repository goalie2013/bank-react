// ----------------------------------------
// Deposit & Withdraw handleChange function
// ----------------------------------------
export default function handleChange(
  e,
  setValue,
  setStatus,
  setShow,
  setTextColor,
  ref
) {
  console.log("-- handleChange --");
  setValue(e.target.value);
  const target = e.target;
  const name = target.name;

  console.log("target.value", target.value);
  console.log(typeof target.value);

  if (isNaN(target.value)) {
    setTextColor("red");
    setStatus(`${name} field can only be number`);
    setShow(true);
    return false;
  }
  if (!target.value) {
    setTextColor("red");
    setStatus(`${name} field cannot be empty`);
    setShow(true);
    return false;
  }

  if (parseInt(target.value) < 0) {
    console.log("NEGATIVE");
    setTextColor("red");
    setStatus(`${name} field cannot be negative`);
    setShow(true);
    return false;
  }

  console.log("ref", ref.current.value);
  //   console.log("depositVal", depositValue);
  setStatus("");
  if (ref.current.value) setShow(false);
  else setShow(true);
}

// ----------------------------------------
// Deposit & Withdraw handleChange function
// ----------------------------------------
// export default function handleChange(
//   value,
//   name,
//   setStatus,
//   setShow,
//   setTextColor
// ) {
//   console.log("---- handleChange ----");

//   console.log("deposit Value: ", value);

//   if (!value) {
//     setTextColor("red");
//     setStatus(`${name} field cannot be empty`);
//     setShow(true);
//     return false;
//   }
//   if (isNaN(value)) {
//     setTextColor("red");
//     setStatus(`${name} field can only be number`);
//     setShow(true);
//     return false;
//   }

//   if (parseInt(value) < 0) {
//     console.log("NEGATIVE");
//     setTextColor("red");
//     setStatus(`${name} field cannot be negative`);
//     setShow(true);
//     return false;
//   }

//   // console.log('ref', ref.current.value);
//   //   console.log("depositVal", depositValue);
//   setStatus("");
//   if (value) setShow(false);
//   else setShow(true);
// }
