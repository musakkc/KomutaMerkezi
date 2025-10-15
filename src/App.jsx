import React, { useState, useEffect } from "react";
import MapView from "./components/MapView/MapView";
import Sidebar from "./components/Sidebar/Sidebar";
import { MOCK_DAMAGES, MOCK_TEAMS } from "./utils/constants";
import "./App.css";

function App() {
  const [allDamages] = useState(MOCK_DAMAGES);
  const [filteredDamages, setFilteredDamages] = useState(MOCK_DAMAGES);
  const [teams] = useState(MOCK_TEAMS);
  const [selectedDamage, setSelectedDamage] = useState(null);

  // Filtreleme fonksiyonu
  const handleFilterChange = ({ damageType, teamStatus, search }) => {
    let filtered = [...allDamages];

    // Hasar tipine göre filtrele
    if (damageType !== 'ALL') {
      filtered = filtered.filter(damage => damage.type === damageType);
    }

    // Ekip durumuna göre filtrele
    if (teamStatus === 'ASSIGNED') {
      filtered = filtered.filter(damage => damage.assignedTeam);
    } else if (teamStatus === 'UNASSIGNED') {
      filtered = filtered.filter(damage => !damage.assignedTeam);
    }

    // Arama terimine göre filtrele
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(damage =>
        damage.title.toLowerCase().includes(searchLower) ||
        damage.description.toLowerCase().includes(searchLower)
      );
    }

    setFilteredDamages(filtered);
  };

  return (
    <div className="app-container">
      <Sidebar
        damages={filteredDamages}
        teams={teams}
        onFilterChange={handleFilterChange}
        selectedDamage={selectedDamage}
      />
      <MapView
        damages={filteredDamages}
        selectedDamage={selectedDamage}
        onDamageSelect={setSelectedDamage}
      />
    </div>
  );
}

export default App;
