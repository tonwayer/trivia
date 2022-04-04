import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card, CardBody, CardHeader, CardFooter } from "../../components/Card"
import { QuestionBox } from "../../components/QuestionBox"
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import {
  loadQuizzes,
  selectCurrentIndex,
  selectIsLoading,
  selectQuizzes,
  submitAnswer
} from '../../redux/modules/quizzes'

export const Quiz = () => {
  const dispatch = useAppDispatch()
  const quizzes = useAppSelector(selectQuizzes)
  const currentIndex = useAppSelector(selectCurrentIndex)
  const isLoading = useAppSelector(selectIsLoading)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadQuizzes())
  }, [dispatch])

  const handleNext = () => {
    if (currentIndex === quizzes.length - 1) {
      navigate('/result')
    }
    dispatch(submitAnswer(true))
  }

  return <Card>
    <CardHeader>
      <h2>{quizzes[currentIndex]?.category}</h2>
    </CardHeader>
    <CardBody>
      {
        isLoading
          ? <span>Now Loading...</span>
          : <QuestionBox question={quizzes[currentIndex]?.question} />
      }
    </CardBody>
    <CardFooter>
      <button onClick={handleNext}>Next</button>
    </CardFooter>
  </Card>
}
