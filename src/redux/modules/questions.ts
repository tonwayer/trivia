import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { getQuestions } from '../../services/api'
import { RootState } from '../store'
import { Question } from '../../types'

export interface QuestionState {
  questions: Question[]
  isLoading: boolean
  currentIndex: number
  answers: boolean[]
  error: any
}

export const initialState: QuestionState = {
  questions: [],
  isLoading: false,
  currentIndex: 0,
  answers: [],
  error: null
}

export const loadQuestions = createAsyncThunk(
  'questions',
  async () => {
    const response = await getQuestions()
    return response.data
  }
)

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      state.answers[state.currentIndex] = action.payload
      state.currentIndex += 1

      if (state.currentIndex === state.questions.length)
        state.currentIndex = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuestions.pending, (state) => {
      state.isLoading = true
      state.questions = []
      state.error = null
    }).addCase(loadQuestions.fulfilled, (state, action) => {
      state.questions = action.payload.results
      state.error = null
      state.isLoading = false
    }).addCase(loadQuestions.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

const selectQuestion = (state: RootState) => state.question;


export const selectQuestions = createSelector(
  selectQuestion,
  (state) => state.questions
)

export const selectCurrentIndex = createSelector(
  selectQuestion,
  (state) => state.currentIndex
)

export const selectIsLoading = createSelector(
  selectQuestion,
  (state) => state.isLoading
)

export const selectError = createSelector(
  selectQuestion,
  (state) => state.error
)

export const getResult = createSelector(
  selectQuestion,
  (state) => {
    const { questions, answers } = state
    let correctAnswerCount = 0
    let incorrectAnswerCount = 0
    const correctness = questions.map((question, index) => {
      const correct_answer = question['correct_answer'] === "True" ? true : false
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

export const { submitAnswer } = questionSlice.actions

export default questionSlice.reducer
