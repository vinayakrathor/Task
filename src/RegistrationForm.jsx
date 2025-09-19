import { useState, useEffect } from "react";



export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    mobile: "",
    address: "",
    education: "",
    collegeStatus: "",
    cgpa: "",
    branch: "",
    resume: "",
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [extraVisible, setExtraVisible] = useState(false);

  // Load saved data (optional)
  useEffect(() => {
    const saved = localStorage.getItem("registrations");
    if (saved) {
      console.log("Existing registrations:", JSON.parse(saved));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0]?.name || "" });
      setFileName(files[0]?.name || "No file chosen");
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "collegeStatus") {
      setExtraVisible(value === "passed");
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.gender || !formData.mobile) {
      alert("Please fill all required fields");
      return;
    }

    // Get old entries or empty array
    const existing = JSON.parse(localStorage.getItem("registrations")) || [];

    // Add new one
    existing.push(formData);

    // Save
    localStorage.setItem("registrations", JSON.stringify(existing));

    alert("Form data saved successfully!");

    // Reset
    setFormData({
      name: "",
      email: "",
      gender: "",
      mobile: "",
      address: "",
      education: "",
      collegeStatus: "",
      cgpa: "",
      branch: "",
      resume: "",
    });
    setFileName("No file chosen");
    setExtraVisible(false);
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                  required
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            placeholder="Enter 10-digit number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street, city, state..."
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="education">Education Level</label>
          <select
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Education --</option>
            <option>10+2</option>
            <option>Diploma</option>
            <option>Bachelor's</option>
            <option>Master's</option>
            <option>PhD</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="collegeStatus">College Status</label>
          <select
            id="collegeStatus"
            name="collegeStatus"
            value={formData.collegeStatus}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Status --</option>
            <option value="appearing">Appearing</option>
            <option value="passed">Passed</option>
          </select>
        </div>

        {extraVisible && (
          <>
            <div className="form-group">
              <label htmlFor="cgpa">CGPA</label>
              <input
                id="cgpa"
                name="cgpa"
                type="number"
                step="0.01"
                min="0"
                max="10"
                value={formData.cgpa}
                onChange={handleChange}
                placeholder="e.g. 8.50"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="branch">Branch</label>
              <input
                id="branch"
                name="branch"
                type="text"
                value={formData.branch}
                onChange={handleChange}
                placeholder="Your branch"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Upload Resume</label>
              <div className="file-wrap">
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("resume").click()
                  }
                  className="file-btn"
                >
                  Choose File
                </button>
                <div className="file-name">{fileName}</div>
              </div>
            </div>
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
  

}
