import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = () => {
    const { name, address, mobile, email, gender, dob, course } = formData;
    if (!name || !address || !mobile || !email || !gender || !dob || !course) {
      alert("Please fill out all fields correctly.");
      return;
    }
    alert(
      `Data stored successfully!\n\nName: ${name}\nAddress: ${address}\nMobile: ${mobile}\nEmail: ${email}\nGender: ${gender}\nDate of Birth: ${dob}\nCourse: ${course}`
    );
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Higher Secondary Admission Form</h2>
      <form
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#f4f4f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter your name"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter your address"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", marginTop: "5px" }}
            placeholder="Enter your email"
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: "95%", padding: "10px", marginTop: "5px" }}
            required
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={{ width: "90%", padding: "10px", marginTop: "5px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            style={{ width: "95%", padding: "10px", marginTop: "5px" }}
            required
          >
            <option value="" disabled>
              Select your course
            </option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={handleRegister}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;

