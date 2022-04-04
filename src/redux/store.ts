import { configureStore } from '@reduxjs/toolkit'
import questionReducer from './modules/questions'

export const store = configureStore({
  reducer: {
    question: questionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
