type Props = {
  isCorrect: Boolean,
  question: String,
}

export const AnswerItem = (props: Props) => {
  return (
    <div className="flex">
      <div className="flex-none w-6 h-6">
        <span>{props.isCorrect ? '+' : '-'}</span>
      </div>
      <p className="">
        {props.question}
      </p>
    </div>
  )
}