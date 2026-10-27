import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    number: "",
    checked: false,
    select: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((previousErrors) => ({ ...previousErrors, [name]: "" }));
    setSubmittedData(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "Username is required.";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmittedData(null);
      return;
    }
    setSubmittedData(formData);
  };

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <h1>Sign in</h1>
      <div className="form-field">
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your username"
          onChange={handleChange}
          value={formData.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && <p className="error" id="name-error">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          value={formData.password}
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
        />
        {errors.password && (
          <p className="error" id="password-error">{errors.password}</p>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="number">Phone number</label>
        <input
          id="number"
          type="tel"
          name="number"
          placeholder="Enter your phone number"
          onChange={handleChange}
          value={formData.number}
        />
      </div>
      <div className="form-field">
        <label htmlFor="select">Choose an option</label>
        <select
          id="select"
          name="select"
          value={formData.select}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="option-1">Option 1</option>
          <option value="option-2">Option 2</option>
          <option value="option-3">Option 3</option>
        </select>
      </div>
      <label className="checkbox-field" htmlFor="checked">
        <input
          id="checked"
          type="checkbox"
          name="checked"
          checked={formData.checked}
          onChange={handleChange}
        />
        Check this box
      </label>
      <button type="submit">Submit</button>
      {submittedData && (
        <div className="success" role="status">
          <p>Form submitted successfully.</p>
          <p>Name: {submittedData.name}</p>
          <p>Phone number: {submittedData.number || "Not provided"}</p>
          <p>Selected: {submittedData.select || "None"}</p>
          <p>Checked: {submittedData.checked ? "Yes" : "No"}</p>
        </div>
      )}
    </form>
  );
}

export default App;
