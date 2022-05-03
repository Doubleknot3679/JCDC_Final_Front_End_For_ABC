import React from "react";
import { RowSelection } from "./components/RowSelection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1> ABC Industries </h1>
      <h4>Inventory Management Software</h4>
      <Link to="/NewClientCreation">
        <button type="button">Create New Client</button>
      </Link>
      <div className="App">
        <RowSelection />
      </div>
      <Link to="/ClientPage">
        <button type="button">Submit</button>
      </Link>
    </>
  );
}

export default Home;
