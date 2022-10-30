import React from "react";
import "./worker2.css";

export default function Worker2({
  id,
  firstname,
  lastname,
  age,
  foto,
  salary,
  in_office,
}) {
  let style = in_office
    ? { backgroundColor: "green" }
    : { backgroundColor: "red" };
  return (
    <div style={style} className="worker2">
      <p>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p>Age: {age}</p>
      <img src={foto} alt="foto" />
      <p>Salary: {salary} </p>
      <p>in_office: {in_office}</p>
    </div>
  );
}
