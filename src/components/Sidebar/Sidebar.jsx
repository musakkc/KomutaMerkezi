import React from "react";
import "./Sidebar.css";

const Sidebar = ({ teams }) => {
    return (
        <div className="sidebar">
            <h2>Teknik Ekipler</h2>
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>
                        <strong>{team.name}</strong>
                        <p>Durum: {team.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
