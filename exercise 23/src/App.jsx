import { useState } from "react";
import "./App.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "Java",
  "C#",
  "C++",
  "SQL",
];

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    termsAccepted: false,
  });
  const [skillsError, setSkillsError] = useState("");

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    if (type === "checkbox" && name === "skills") {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);

      setFormData((previousFormData) => ({
        ...previousFormData,
        skills: updatedSkills,
      }));
      if (updatedSkills.length > 0) setSkillsError("");
      return;
    }

    setFormData((previousFormData) => ({
      ...previousFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.skills.length === 0) {
      setSkillsError("Choose at least one skill to continue.");
      return;
    }
    setSkillsError("");
    console.log(formData);
  };

  return (
    <main className="page-shell">
      <div className="glow glow-top" aria-hidden="true" />
      <div className="glow glow-bottom" aria-hidden="true" />

      <section className="application-card" aria-labelledby="form-title">
        <div className="card-intro">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
          
          </span>
          <h1 id="form-title">form&apos; application for developers.</h1>
          <p>
            Tell us a little about yourself and the kind of work you love doing.
          </p>
          <div className="step-indicator" aria-label="Application form">
            <span className="step-line" />
            <span>Developer application</span>
          </div>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="userName">Full name</label>
              <input
                autoComplete="name"
                id="userName"
                name="userName"
                onChange={handleChange}
                placeholder="e.g. Alex Morgan"
                minLength={2}
                maxLength={60}
                required
                type="text"
                value={formData.userName}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email address</label>
              <input
                autoComplete="email"
                id="email"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                maxLength={254}
                required
                type="email"
                value={formData.email}
              />
            </div>

            <div className="field">
              <label htmlFor="role">Role you&apos;re interested in</label>
              <select
                id="role"
                name="role"
                onChange={handleChange}
                required
                value={formData.role}
              >
                <option disabled value="">
                  Choose a role
                </option>
                <option value="full-stack">Full-stack developer</option>
                <option value="web-development">Web developer</option>
                <option value="ui-ux">UI/UX designer</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="experience">Years of experience (0-50)</label>
              <input
                id="experience"
                min="0"
                max="50"
                name="experience"
                onChange={handleChange}
                placeholder="e.g. 2"
                required
                step="1"
                type="number"
                value={formData.experience}
              />
            </div>
          </div>

          <fieldset className="skills-field">
            <legend>Which programming languages do you know?</legend>
            <p className="field-hint">Check every language you work with.</p>
            <div
              aria-describedby={skillsError ? "skills-error" : undefined}
              aria-invalid={Boolean(skillsError)}
              className="skill-options"
            >
              {skills.map((skill) => (
                <label className="skill-option" key={skill}>
                  <input
                    checked={formData.skills.includes(skill)}
                    name="skills"
                    onChange={handleChange}
                    type="checkbox"
                    value={skill}
                  />
                  <span>{skill}</span>
                </label>
              ))}
            </div>
            {skillsError && (
              <p className="validation-error" id="skills-error" role="alert">
                {skillsError}
              </p>
            )}
          </fieldset>

          <label className="terms-option">
            <input
              checked={formData.termsAccepted}
              name="termsAccepted"
              onChange={handleChange}
              required
              type="checkbox"
            />
            <span>
              I agree to the <a href="#terms">terms and conditions</a>.
            </span>
          </label>

          <button className="submit-button" type="submit">
            Send my application <span aria-hidden="true">→</span>
          </button>
          <p className="form-note">Your details are only used for this application.</p>
        </form>
      </section>
    </main>
  );
}

export default App;
