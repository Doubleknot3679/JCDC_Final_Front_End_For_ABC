import React from "react";
import { Link } from "react-router-dom";
import { ClientContactsTable } from "./components/ClientContactsTable";
import { ClientInfoTable } from "./components/ClientInfoTable";
import { ClientInventoryTable } from "./components/ClientInventoryTable";

function ClientPage() {
  return (
    <>
      <h1> Client Page </h1>
      <div className="App">
        <ClientInfoTable />
      </div>

      <div className="App">
        <ClientContactsTable />
      </div>

      <div className="App">
        <ClientInventoryTable />
      </div>

      <Link to="/InventoryPage">
        <button type="button">Select Inventory</button>
      </Link>
    </>
  );
}

export default ClientPage;
