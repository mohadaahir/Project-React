import { useForm } from 'react-hook-form';
import './App.css';

const subjectOptions = ['Mathematics', 'Science', 'English'];

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.alert(`Registration Data:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <main className="registration-page">
      <section className="registration-card" aria-label="Student registration form">
        <h1>Student Registration</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <div className="field-row">
            <label htmlFor="studentName">Student Name</label>
            <input
              id="studentName"
              type="text"
              placeholder="Student Name"
              {...register('studentName', {
                required: 'Student name is required',
              })}
            />
            {errors.studentName && (
              <span className="error-message">{errors.studentName.message}</span>
            )}
          </div>

          <div className="field-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="email@gmail.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <span className="error-message">{errors.email.message}</span>}
          </div>

          <div className="field-row">
            <label htmlFor="grade">Grade</label>
            <select id="grade" defaultValue="" {...register('grade', { required: 'Grade is required' })}>
              <option value="" disabled>
                Grade
              </option>
              <option value="Grade 8">Grade 8</option>
              <option value="Grade 9">Grade 9</option>
              <option value="Grade 10">Grade 10</option>
              <option value="Grade 11">Grade 11</option>
              <option value="Grade 12">Grade 12</option>
            </select>
            {errors.grade && <span className="error-message">{errors.grade.message}</span>}
          </div>

          <fieldset className="subject-field">
            <legend>Subjects of interest</legend>
            <div className="checkbox-group">
              {subjectOptions.map((subject) => (
                <label key={subject} className="checkbox-item">
                  <input type="checkbox" value={subject} {...register('subjects')} />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </section>
    </main>
  );
};

export default RegistrationForm;
