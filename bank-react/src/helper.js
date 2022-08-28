export default function handleChange(e, setValue, setStatus, setShow, ref) {
  console.log("-- handleChange --");
  setValue(e.target.value);
  const target = e.target;
  const name = target.name;
  let error = "";

  console.log("target.value", target.value);
  console.log(typeof target.value);

  if (isNaN(target.value)) {
    setStatus(`${name} field can only be number`);
    setShow(true);
    return false;
  }
  if (!target.value) {
    setStatus(`${name} field cannot be empty`);
    setShow(true);
    return false;
  }

  if (parseInt(target.value) < 0) {
    console.log("NEGATIVE");
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

// Old function in Deposit.jsx
// function handleChange(e) {
//   console.log("-- handleChange --");
//   setDepositValue(e.target.value);
//   const target = e.target;
//   const name = target.name;
//   let error = "";

//   console.log("target.value", target.value);
//   console.log(typeof target.value);

//   if (isNaN(target.value)) {
//     setStatus(`${name} field can only be number`);
//     setShow(true);
//     return false;
//   }
//   if (!target.value) {
//     setStatus(`${name} field cannot be empty`);
//     setShow(true);
//     return false;
//   }

//   if (parseInt(target.value) < 0) {
//     console.log("NEGATIVE");
//     setStatus(`${name} field cannot be negative`);
//     setShow(true);
//     return false;
//   }

//   console.log("ref", ref.current.value);
//   console.log("depositVal", depositValue);
//   setStatus("");
//   if (ref.current.value) setShow(false);
//   else setShow(true);
// }
