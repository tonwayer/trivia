import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getQuizzes } from '../../services/api'
import { RootState } from '../store'
import { Question } from '../../types'

export interface QuizState {
  quizzes: Question[],
  isLoading: Boolean,
}

const initialState: QuizState = {
  quizzes: [],
  isLoading: false
}

export const loadQuizzes = createAsyncThunk(
  'questions',
  async () => {
    const response = await getQuizzes()
    return response.data
  }
)

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadQuizzes.fulfilled, (state, action) => {
      state.quizzes = action.payload.results
    })
  }
})

export const selectQuizzes = (state: RootState) => state.quiz.quizzes

export default quizSlice.reducer
