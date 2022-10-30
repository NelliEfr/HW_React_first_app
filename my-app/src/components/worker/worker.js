import React from "react";

export default function Worker({ id, firstname, last, position }) {
  return (
    <div>
      <p>Id: {id} </p>
      <p>FirstName: {firstname}</p>
      <p> LastName: {last}</p>
      <p>Position: {position} </p>
    </div>
  );
}
