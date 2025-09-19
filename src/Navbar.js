import React from "react";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function Navbar() {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/admin"); // go to admin page
  };

  return (
    <nav
      style={{
        width: "99%",
        padding: "30px 20px",
        background: "#8a64cdff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleAdminClick}
        style={{
            
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "white",
        }}
      >
        <AdminPanelSettingsIcon fontSize="large" />
      </button>
    </nav>
  );
}
