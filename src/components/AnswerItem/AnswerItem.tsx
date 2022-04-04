type Props = {
  isCorrect: boolean,
  question: string,
}

export const AnswerItem = (props: Props) => {
  return (
    <div className="flex">
      <div className="flex-none w-6 h-6">
        <span>{props.isCorrect ? '+' : '-'}</span>
      </div>
      <p>
        {props.question}
      </p>
    </div>
  )
}
