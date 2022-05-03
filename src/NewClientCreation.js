import React from "react";
import { Form } from "./components/Form";
import { Link } from "react-router-dom";

function NewClientCreation() {
  return (
    <>
      <h1> New Client Creation </h1>
      <div className="App">
        <Form />
      </div>
      <Link to="/">
        <button type="button">Submit and Return Home</button>
      </Link>
    </>
  );
}

export default NewClientCreation;
