import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import _ from 'lodash'

import { Question } from './Question'
import { initialState } from '../../redux/modules/questions'
import { mockQuestion } from '../../helpers/mock'

const mockStore = createMockStore([thunk]);

const totalCount = 10
const currentIndex = 5

describe('Question', () => {
  const questions = _.range(totalCount).map(mockQuestion)

  test('displays contents.', () => {
    const loadedStore = mockStore({
      question: {
        ...initialState,
        questions: questions,
        currentIndex: currentIndex
      },
    })

    render(
      <Provider store={loadedStore}>
        <BrowserRouter>
          <Question />
        </BrowserRouter>
      </Provider>
    )

    expect(
      screen.getByText(questions[currentIndex].category)
    ).toBeInTheDocument()

    expect(
      screen.getByText(questions[currentIndex].question)
    ).toBeInTheDocument()

    expect(
      screen.getByText('True')
    ).toBeInTheDocument()

    expect(
      screen.getByText('False')
    ).toBeInTheDocument()
  })

  test('goes to result page when all questions are answered.', () => {
    const loadedStore = mockStore({
      question: {
        ...initialState,
        questions: questions,
        currentIndex: 9
      },
    })

    render(
      <Provider store={loadedStore}>
        <BrowserRouter>
          <Question />
        </BrowserRouter>
      </Provider>
    )
    const trueButton = screen.getByText('True')
    fireEvent.click(trueButton)
    expect(window.location.pathname).toBe(`/result`)
  })

  test('displays "Now Loading" when data is loading', () => {
    const loadedStore = mockStore({
      question: {
        ...initialState,
        isLoading: true
      },
    })

    render(
      <Provider store={loadedStore}>
        <BrowserRouter>
          <Question />
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText('Now Loading...')).toBeInTheDocument()
  })
})
