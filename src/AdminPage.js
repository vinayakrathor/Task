import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("registrations")) || [];
    setRegistrations(saved);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updated = [...registrations];
      updated.splice(index, 1);
      setRegistrations(updated);
      localStorage.setItem("registrations", JSON.stringify(updated));
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData({ ...registrations[index] });
  };

  const handleSave = () => {
    const updated = [...registrations];
    updated[editingIndex] = editData;
    setRegistrations(updated);
    localStorage.setItem("registrations", JSON.stringify(updated));
    setEditingIndex(null);
    setEditData({});
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // 🎨 Improved Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
    width: "90%",
    maxWidth: "1000px",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    // width: "50%",
    // // padding: "12px",
    // // margin: "auto",
    // display: "flex",
    border: "none",
    borderRadius: "6px",
    padding: "4px 6px",
    margin: "5px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const logoutButton = { ...buttonStyle, backgroundColor: "#ff4d4d" };
  const editButton = { ...buttonStyle, backgroundColor: "#4cafef" };
  const deleteButton = { ...buttonStyle, backgroundColor: "#f44336" };
  const saveButton = { ...buttonStyle, backgroundColor: "#4caf50" };
  const cancelButton = { ...buttonStyle, backgroundColor: "#9e9e9e" };
  const loginButton = { ...buttonStyle, backgroundColor: "#4cafef", width: "100%" };

  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "20px",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    fontSize: "14px",
  };

  const thStyle = {
    padding: "12px",
    textAlign: "center",
    background: "#4cafef",
    color: "white",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "center",
  };

  const rowEven = { background: "#f9f9f9" };
  const rowOdd = { background: "#ffffff" };

  // --- Login Page ---
  if (!isLoggedIn) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              style={inputStyle}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button style={loginButton} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Dashboard Page ---
  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Admin Dashboard</h2>
        <button style={logoutButton} onClick={handleLogout}>
          Logout
        </button>

        {registrations.length === 0 ? (
          <p>No registrations found.</p>
        ) : (
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Gender</th>
                <th style={thStyle}>Mobile</th>
                <th style={thStyle}>Education</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>CGPA</th>
                <th style={thStyle}>Branch</th>
                <th style={thStyle}>Resume</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r, i) => (
                <tr key={i} style={i % 2 === 0 ? rowEven : rowOdd}>
                  {editingIndex === i ? (
                    <>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="name"
                          value={editData.name}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="email"
                          name="email"
                          value={editData.email}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="gender"
                          value={editData.gender}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="mobile"
                          value={editData.mobile}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="education"
                          value={editData.education}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="collegeStatus"
                          value={editData.collegeStatus}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="cgpa"
                          value={editData.cgpa}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>
                        <input
                          style={inputStyle}
                          type="text"
                          name="branch"
                          value={editData.branch}
                          onChange={handleChange}
                        />
                      </td>
                      <td style={tdStyle}>{editData.resume}</td>
                      <td style={tdStyle}>
                        <button style={saveButton} onClick={handleSave}>
                          Save
                        </button>
                        <button style={cancelButton} onClick={handleCancel}>
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={tdStyle}>{r.name}</td>
                      <td style={tdStyle}>{r.email}</td>
                      <td style={tdStyle}>{r.gender}</td>
                      <td style={tdStyle}>{r.mobile}</td>
                      <td style={tdStyle}>{r.education}</td>
                      <td style={tdStyle}>{r.collegeStatus}</td>
                      <td style={tdStyle}>{r.cgpa}</td>
                      <td style={tdStyle}>{r.branch}</td>
                      <td style={tdStyle}>{r.resume}</td>
                      <td style={tdStyle}>
                        <button style={editButton} onClick={() => handleEdit(i)}>
                          Edit
                        </button>
                        <button
                          style={deleteButton}
                          onClick={() => handleDelete(i)}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
