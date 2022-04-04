import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { Card, CardBody, CardHeader, CardFooter } from "../../components/Card"
import { QuestionBox } from "../../components/QuestionBox"
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import {
  loadQuestions,
  selectCurrentIndex,
  selectError,
  selectIsLoading,
  selectQuestions,
  submitAnswer
} from '../../redux/modules/questions'

export const Question = () => {
  const dispatch = useAppDispatch()
  const questions = useAppSelector(selectQuestions)
  const currentIndex = useAppSelector(selectCurrentIndex)
  const isLoading = useAppSelector(selectIsLoading)
  const navigate = useNavigate()
  const error = useAppSelector(selectError)

  useEffect(() => {
    dispatch(loadQuestions())
  }, [dispatch])

  useEffect(() => {
    navigate(`/questions/${currentIndex}`)
  }, [currentIndex])

  const handleNext = (answer: boolean) => {
    if (currentIndex === questions.length - 1) {
      navigate('/result')
    }
    dispatch(submitAnswer(answer))
  }

  return <Card>
    <CardHeader>
      <h2>{questions[currentIndex]?.category}</h2>
    </CardHeader>
    {isLoading
      ? <div className="py-24">
        <span>Now Loading...</span>
      </div>
      : <>
        <CardBody>
          {
            error === null
              ? <>
                <QuestionBox question={questions[currentIndex]?.question} />
                <div className="mt-2">
                  <span className="mx-2">{currentIndex + 1}</span>
                  of
                  <span className="mx-2">{questions.length}</span>
                </div>
              </>
              : <p>Oops, something went wrong.</p>
          }

        </CardBody>
        <CardFooter>
          <div className="flex justify-center">
            {
              error === null ?
                <>
                  <button className="mx-2 border-black border-2 py-2 px-3" onClick={() => handleNext(true)}>True</button>
                  <button className="mx-2 border-black border-2 py-2 px-3" onClick={() => handleNext(false)}>False</button>
                </>
                : <Link to="/">Go Back</Link>
            }
          </div>
        </CardFooter>
      </>
    }
  </Card>
}
