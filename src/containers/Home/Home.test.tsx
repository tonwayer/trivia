import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { Home } from './Home'

describe('Home', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  })

  test('displays contents.', () => {
    expect(
      screen.getByText('Welcome to the Trivia Challenge!')
    ).toBeInTheDocument()

    expect(
      screen.getByText('You will be presented with 10 True or False questions.')
    ).toBeInTheDocument()

    const beginLink = screen.getByText('BEGIN')
    expect(beginLink).toBeInTheDocument()
    expect(beginLink).toHaveAttribute('href', '/questions/0')
  });

  test('navigates to questions page when BEGIN link is clicked.', () => {
    const beginLink = screen.getByText('BEGIN')
    fireEvent.click(beginLink)
    expect(window.location.pathname).toBe('/questions/0')
  })
})
