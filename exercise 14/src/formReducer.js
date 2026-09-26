export const STEPS = {
  PROFILE: 1,
  CONTACT: 2,
  REVIEW: 3,
}

export const initialState = {
  step: STEPS.PROFILE,
  data: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
}

export function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        data: {
          ...state.data,
          [action.field]: action.value,
        },
      }

    case 'NEXT_STEP':
      return {
        ...state,
        step: Math.min(state.step + 1, STEPS.REVIEW),
      }

    case 'PREV_STEP':
      return {
        ...state,
        step: Math.max(state.step - 1, STEPS.PROFILE),
      }

    case 'RESET_FORM':
      return initialState

    default:
      return state
  }
}
