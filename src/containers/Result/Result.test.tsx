import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import createMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import _ from 'lodash'

import { initialState } from '../../redux/modules/questions'
import { mockAnswer, mockQuestion } from '../../helpers/mock'
import { Result } from './Result'

const totalCount = 10
const mockStore = createMockStore([thunk]);

describe('Result', () => {
  const questions = _.range(totalCount).map(mockQuestion)
  const answers = _.range(totalCount).map(mockAnswer)

  beforeEach(() => {
    const loadedStore = mockStore({
      question: {
        ...initialState,
        questions,
        answers,
      },
    })

    render(
      <Provider store={loadedStore}>
        <BrowserRouter>
          <Result />
        </BrowserRouter>
      </Provider>
    )
  })

  test('displays content', () => {
    expect(screen.getByText('You scored')).toBeInTheDocument()
    expect(screen.getByText('Play again?')).toBeInTheDocument()
    questions.forEach((question) => {
      expect(screen.getByText(question.question)).toBeInTheDocument()
    })
  })

  test('goes to home page when "Play again?" is clicked', () => {
    fireEvent.click(screen.getByText('Play again?'))
    expect(window.location.pathname).toBe('/')
  })
})
