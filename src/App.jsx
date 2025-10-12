import React, { useState } from "react";
import MapView from "./components/MapView/MapView";
import Sidebar from "./components/Sidebar/Sidebar"
import "./App.css";

function App() {
  const [team, setTeams] = useState([
    { id: 1, name: "Ekip A", status: "Yolda" },
    { id: 2, name: "Ekip B", status: "Görevde" },
    { id: 3, name: "Ekip C", status: "Hazır" },
  ])
  return (
    <div className="app-container">
      <h1>🛰️ Komuta Merkezi</h1>
      <MapView />
      {/* <Sidebar /> */}
      <h1></h1>
    </div>
    //     <div className="app-container">
    //   <Sidebar teams={teams} />
    //   <MapView />
    // </div>
  );
}

export default App;
