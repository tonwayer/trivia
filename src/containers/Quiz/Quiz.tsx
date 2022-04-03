import { Link } from 'react-router-dom'

import { Card, CardBody, CardHeader, CardFooter } from "../../components/Card"
import { QuestionBox } from "../../components/QuestionBox"

const quiz = {
  "category": "Entertainment: Video Games",
  "type": "boolean",
  "difficulty": "hard",
  "question": "Unturned originally started as a Roblox game.",
  "correct_answer": "True",
  "incorrect_answers": [
    "False"
  ]
}

export const Quiz = () => {
  return <Card>
    <CardHeader>
      <h2>{quiz.category}</h2>
    </CardHeader>
    <CardBody>
      <QuestionBox question={quiz.question} />
    </CardBody>
    <CardFooter>
      <Link to="/quiz">Next</Link>
    </CardFooter>
  </Card>
}
