import { configureStore } from '@reduxjs/toolkit'
import appointmentSlice from './appointmentSlice'

// store-ul e creat din mai multe bucatele numite slice-uri
export const store = configureStore({
  reducer: {
    appointment: appointmentSlice
  },
})