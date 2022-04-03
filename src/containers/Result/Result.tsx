import { useMemo } from "react"
import { Link } from "react-router-dom"
import { AnswerItem } from "../../components/AnswerItem"
import { Card, CardBody, CardFooter, CardHeader } from "../../components/Card"

const quizzes = [
  {
    correct_answer: true,
    question: 'Unturned originally started as a Roblox game.',
  },
  {
    correct_answer: true,
    question: 'Unturned originally started as a Roblox game.',
  },
  {
    correct_answer: true,
    question: 'Unturned originally started as a Roblox game.',
  },
]

const anwsers = [
  true,
  false,
  true,
]

export const Result = () => {

  const correctAnswersCount = useMemo(() => {
    let count = 0
    quizzes.forEach((quiz, index) => {
      if (quiz['correct_answer'] === anwsers[index])
        count++
    })
    return count
  }, [anwsers])

  return (
    <Card>
      <CardHeader>
        <p>You scored</p>
        <p><span>{correctAnswersCount}</span>/<span>10</span></p>
      </CardHeader>
      <CardBody>
        {quizzes.map((quiz, index) =>
          <AnswerItem
            key={index}
            isCorrect={quiz['correct_answer'] === anwsers[index]}
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
