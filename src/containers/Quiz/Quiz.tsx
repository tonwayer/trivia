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

  const handleNext = (answer: boolean) => {
    if (currentIndex === quizzes.length - 1) {
      navigate('/result')
    }
    dispatch(submitAnswer(answer))
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
      <div className="mt-2">
        <span className="mx-2">{currentIndex + 1}</span>
        of
        <span className="mx-2">{quizzes.length}</span>
      </div>
    </CardBody>
    <CardFooter>
      <div className="flex justify-center">
        <button className="mx-2 border-black border-2 py-2 px-3" onClick={() => handleNext(true)}>True</button>
        <button className="mx-2 border-black border-2 py-2 px-3" onClick={() => handleNext(false)}>False</button>
      </div>
    </CardFooter>
  </Card>
}
