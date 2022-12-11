import { createSlice } from '@reduxjs/toolkit'

// asta e o parte din state-ul store-ului
const initialState = {
  name: null,
  email: null,
  branch: null,
  datetime_start: null,
  operation: null,
}

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    // cu functia asta modificam state-ul
    setAppointment: (state, action) => {
      if (action.payload.name)
        state.name = action.payload.name
      if (action.payload.email)
        state.email = action.payload.email
      if (action.payload.branch)
        state.branch = action.payload.branch
      if (action.payload.datetime_start)
        state.datetime_start = action.payload.datetime_start
      if (action.payload.operation)
        state.operation = action.payload.operation
    },
    setBranch: (state, action) => {
      state.branch = action.payload
    }
  },
})

export const { setAppointment, setBranch } = appointmentSlice.actions;

export default appointmentSlice.reducer;