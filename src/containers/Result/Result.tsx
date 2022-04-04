import { Link } from "react-router-dom"

import { AnswerItem } from "../../components/AnswerItem"
import { Card, CardBody, CardFooter, CardHeader } from "../../components/Card"
import { useAppSelector } from "../../redux/hook"
import { getResult, selectQuizzes } from "../../redux/modules/quizzes"

export const Result = () => {

  const { correctAnswerCount, correctness } = useAppSelector(getResult)
  const quizzes = useAppSelector(selectQuizzes)

  return (
    <Card>
      <CardHeader>
        <p>You scored</p>
        <p><span>{correctAnswerCount}</span>/<span>{correctness.length}</span></p>
      </CardHeader>
      <CardBody>
        {quizzes.map((quiz, index) =>
          <AnswerItem
            key={index}
            isCorrect={correctness[index]}
            question={quiz['question']}
          />
        )}
      </CardBody>
      <CardFooter>
        <Link to="/">Play again?</Link>
      </CardFooter>
    </Card>
  )
}
