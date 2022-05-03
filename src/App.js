import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ClientPage from "./ClientPage";
import NewClientCreation from "./NewClientCreation";
import InventoryPage from "./InventoryPage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClientPage" element={<ClientPage />} />
        <Route path="/NewClientCreation" element={<NewClientCreation />} />
        <Route path="/InventoryPage" element={<InventoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
