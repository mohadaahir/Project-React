import { useReducer, useState } from 'react'
import { STEPS, formReducer, initialState } from './formReducer'

function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const [error, setError] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  const { step, data } = state

  function updateField(field, value) {
    setError('')
    dispatch({ type: 'UPDATE_FIELD', field, value })
  }

  function validateCurrentStep() {
    if (step === STEPS.PROFILE) {
      if (!data.firstName.trim() || !data.lastName.trim()) {
        return 'Please enter both first and last name.'
      }
    }

    if (step === STEPS.CONTACT) {
      if (!data.email.trim() || !data.phone.trim()) {
        return 'Please enter both email and phone number.'
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
        return 'Please enter a valid email address.'
      }
    }

    return ''
  }

  function handleNext(event) {
    event.preventDefault()
    const message = validateCurrentStep()
    if (message) {
      setError(message)
      return
    }
    setError('')
    dispatch({ type: 'NEXT_STEP' })
  }

  function handleBack() {
    setError('')
    dispatch({ type: 'PREV_STEP' })
  }

  function handleReset() {
    setError('')
    setIsComplete(false)
    dispatch({ type: 'RESET_FORM' })
  }

  function handleConfirm() {
    setIsComplete(true)
    dispatch({ type: 'RESET_FORM' })
  }

  if (isComplete) {
    return (
      <section>
        <h1>Registration complete</h1>
        <p>Your details were submitted. You can start a new registration below.</p>
        <button type="button" onClick={handleReset}>
          Start over
        </button>
      </section>
    )
  }

  return (
    <section>
      <header>
        <p>useReducer</p>
        <h1>Multi-step registration</h1>
      </header>

      {step === STEPS.PROFILE && (
        <form onSubmit={handleNext}>
          <h2>Your profile</h2>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={data.firstName}
              onChange={(event) => updateField('firstName', event.target.value)}
              autoComplete="given-name"
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              onChange={(event) => updateField('lastName', event.target.value)}
              autoComplete="family-name"
            />
          </label>
          {error && <p>{error}</p>}
          <div>
            <button type="button" onClick={handleReset}>
              Cancel
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      )}

      {step === STEPS.CONTACT && (
        <form onSubmit={handleNext}>
          <h2>Contact details</h2>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={(event) => updateField('email', event.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={(event) => updateField('phone', event.target.value)}
              autoComplete="tel"
            />
          </label>
          {error && <p>{error}</p>}
          <div>
            <button type="button" onClick={handleBack}>
              Back
            </button>
            <button type="submit">Next</button>
          </div>
        </form>
      )}

      {step === STEPS.REVIEW && (
        <div>
          <h2>Review and confirm</h2>
          <dl>
            <div>
              <dt>Name</dt>
              <dd>
                {data.firstName} {data.lastName}
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{data.email}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{data.phone}</dd>
            </div>
          </dl>
          <div>
            <button type="button" onClick={handleBack}>
              Edit
            </button>
            <button type="button" onClick={handleReset}>
              Cancel
            </button>
            <button type="button" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default MultiStepForm
