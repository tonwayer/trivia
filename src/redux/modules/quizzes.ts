import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { getQuizzes } from '../../services/api'
import { RootState } from '../store'
import { Question } from '../../types'

export interface QuizState {
  quizzes: Question[]
  isLoading: boolean
  currentIndex: number
  answers: boolean[]
}

const initialState: QuizState = {
  quizzes: [],
  isLoading: false,
  currentIndex: 0,
  answers: [],
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
  reducers: {
    submitAnswer: (state, action) => {
      state.answers[state.currentIndex] = action.payload
      state.currentIndex += 1

      if (state.currentIndex === state.quizzes.length)
        state.currentIndex = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuizzes.pending, (state) => {
      state.isLoading = true
      state.quizzes = []
    }).addCase(loadQuizzes.fulfilled, (state, action) => {
      state.quizzes = action.payload.results
      state.isLoading = false
    }).addCase(loadQuizzes.rejected, (state) => {
      state.isLoading = false
    })
  }
})

const selectQuiz = (state: RootState) => state.quiz;


export const selectQuizzes = createSelector(
  selectQuiz,
  (state) => state.quizzes
)

export const selectCurrentIndex = createSelector(
  selectQuiz,
  (state) => state.currentIndex
)

export const selectIsLoading = createSelector(
  selectQuiz,
  (state) => state.isLoading
)

export const getResult = createSelector(
  selectQuiz,
  (state) => {
    const { quizzes, answers } = state
    let correctAnswerCount = 0
    let incorrectAnswerCount = 0
    const correctness = quizzes.map((quiz, index) => {
      const correct_answer = quiz['correct_answer'] === "True" ? true : false
      if (correct_answer === answers[index]) {

        correctAnswerCount++
        return true
      }
      else {
        incorrectAnswerCount++
        return false
      }
    })
    return {
      correctAnswerCount,
      incorrectAnswerCount,
      correctness
    }
  }
)

export const { submitAnswer } = quizSlice.actions

export default quizSlice.reducer
