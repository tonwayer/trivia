import { Link } from "react-router-dom"

import { AnswerItem } from "../../components/AnswerItem"
import { Card, CardBody, CardFooter, CardHeader } from "../../components/Card"
import { useAppSelector } from "../../redux/hook"
import { getResult, selectQuestions } from "../../redux/modules/questions"

export const Result = () => {

  const { correctAnswerCount, correctness } = useAppSelector(getResult)
  const questions = useAppSelector(selectQuestions)

  return (
    <Card>
      <CardHeader>
        <span>You scored</span>
        <div>
          <span>{correctAnswerCount}</span>
          /
          <span>{correctness.length}</span>
        </div>
      </CardHeader>
      <CardBody>
        {questions.map((question, index) =>
          <AnswerItem
            key={index}
            isCorrect={correctness[index]}
            question={question['question']}
          />
        )}
      </CardBody>
      <CardFooter>
        <Link to="/">Play again?</Link>
      </CardFooter>
    </Card>
  )
}
