import React, { useState } from "react";
import { DAMAGE_TYPES, TEAM_STATUS } from "../../utils/constants";
import "./Sidebar.css";

const Sidebar = ({ damages, teams, onFilterChange, selectedDamage }) => {
    const [damageFilter, setDamageFilter] = useState('ALL');
    const [teamFilter, setTeamFilter] = useState('ALL');
    const [searchTerm, setSearchTerm] = useState('');

    // Filtreleme işlemi
    const handleDamageFilterChange = (e) => {
        const value = e.target.value;
        setDamageFilter(value);
        onFilterChange({ damageType: value, teamStatus: teamFilter, search: searchTerm });
    };

    const handleTeamFilterChange = (e) => {
        const value = e.target.value;
        setTeamFilter(value);
        onFilterChange({ damageType: damageFilter, teamStatus: value, search: searchTerm });
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onFilterChange({ damageType: damageFilter, teamStatus: teamFilter, search: value });
    };

    // İstatistikleri hesapla
    const stats = {
        total: damages.length,
        critical: damages.filter(d => d.type === 'CRITICAL').length,
        high: damages.filter(d => d.type === 'HIGH').length,
        medium: damages.filter(d => d.type === 'MEDIUM').length,
        low: damages.filter(d => d.type === 'LOW').length,
        unassigned: damages.filter(d => !d.assignedTeam).length,
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>🛰️ Komuta Merkezi</h2>
                <p className="subtitle">Hasar Takip Sistemi</p>
            </div>

            {/* İstatistikler */}
            <div className="stats-section">
                <h3>📊 İstatistikler</h3>
                <div className="stats-grid">
                    <div className="stat-card">
                        <span className="stat-value">{stats.total}</span>
                        <span className="stat-label">Toplam Hasar</span>
                    </div>
                    <div className="stat-card critical">
                        <span className="stat-value">{stats.critical}</span>
                        <span className="stat-label">Kritik</span>
                    </div>
                    <div className="stat-card high">
                        <span className="stat-value">{stats.high}</span>
                        <span className="stat-label">Yüksek</span>
                    </div>
                    <div className="stat-card unassigned">
                        <span className="stat-value">{stats.unassigned}</span>
                        <span className="stat-label">Atanmamış</span>
                    </div>
                </div>
            </div>

            {/* Filtreler */}
            <div className="filters-section">
                <h3>🔍 Filtreler</h3>
                
                <div className="filter-group">
                    <label>Arama</label>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Hasar ara..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className="filter-group">
                    <label>Hasar Tipi</label>
                    <select 
                        className="filter-select"
                        value={damageFilter}
                        onChange={handleDamageFilterChange}
                    >
                        <option value="ALL">Tümü</option>
                        {Object.entries(DAMAGE_TYPES).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value.icon} {value.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filter-group">
                    <label>Ekip Durumu</label>
                    <select 
                        className="filter-select"
                        value={teamFilter}
                        onChange={handleTeamFilterChange}
                    >
                        <option value="ALL">Tümü</option>
                        <option value="ASSIGNED">Atanmış</option>
                        <option value="UNASSIGNED">Atanmamış</option>
                    </select>
                </div>
            </div>

            {/* Hasar Listesi */}
            <div className="damages-section">
                <h3>📋 Hasar Listesi ({damages.length})</h3>
                <div className="damages-list">
                    {damages.length === 0 ? (
                        <p className="no-data">Filtre kriterlerine uygun hasar bulunamadı.</p>
                    ) : (
                        damages
                            .sort((a, b) => a.priority - b.priority)
                            .map((damage) => (
                                <div 
                                    key={damage.id} 
                                    className={`damage-item ${selectedDamage?.id === damage.id ? 'selected' : ''}`}
                                >
                                    <div className="damage-header">
                                        <span 
                                            className="damage-icon"
                                            style={{ color: DAMAGE_TYPES[damage.type].color }}
                                        >
                                            {DAMAGE_TYPES[damage.type].icon}
                                        </span>
                                        <div className="damage-info">
                                            <h4>{damage.title}</h4>
                                            <span className="damage-type" style={{
                                                backgroundColor: DAMAGE_TYPES[damage.type].color
                                            }}>
                                                {DAMAGE_TYPES[damage.type].label}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="damage-description">{damage.description}</p>
                                    <div className="damage-meta">
                                        <span className="damage-date">📅 {damage.detectedDate}</span>
                                        {damage.assignedTeam ? (
                                            <span className="damage-team">👷 {damage.assignedTeam}</span>
                                        ) : (
                                            <span className="damage-team unassigned">⚠️ Atanmamış</span>
                                        )}
                                    </div>
                                </div>
                            ))
                    )}
                </div>
            </div>

            {/* Ekip Durumları */}
            <div className="teams-section">
                <h3>👥 Ekip Durumları</h3>
                <div className="teams-list">
                    {teams.map((team) => (
                        <div key={team.id} className="team-item">
                            <div className="team-info">
                                <strong>{team.name}</strong>
                                <span 
                                    className="team-status"
                                    style={{ 
                                        backgroundColor: TEAM_STATUS[team.status].color 
                                    }}
                                >
                                    {TEAM_STATUS[team.status].label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
