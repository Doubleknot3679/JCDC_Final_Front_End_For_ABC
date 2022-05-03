import React from "react";
import { ResourcesTable } from "./components/ResourcesTable";
import { InventoryForm } from "./components/InventoryForm";
import { Link } from "react-router-dom";
function InventoryPage() {
  return (
    <>
      <h1> Inventory </h1>
      <Link to="/">
        <button type="button">Return Home</button>
      </Link>
      <p>Add or Update Resource </p>
      <div className="App">
        <InventoryForm />
      </div>
      <div className="App">
        <ResourcesTable />
      </div>
      <button>Delete</button>
    </>
  );
}

export default InventoryPage;
